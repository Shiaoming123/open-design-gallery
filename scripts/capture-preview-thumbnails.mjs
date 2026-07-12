import { createHash } from "node:crypto";
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { loadPublishedPreviews, loadValidPriorThumbnails, mapExistingThumbnails, writeThumbnailManifest } from "./thumbnail-utils.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const option = name => {
  const index = process.argv.indexOf(name);
  return index >= 0 ? process.argv[index + 1] : undefined;
};
const baseUrl = (option("--base-url") || "http://127.0.0.1:8765").replace(/\/$/, "");
const limit = Number(option("--limit") || Infinity);
const match = option("--match");
const concurrency = Math.max(1, Number(option("--concurrency") || 4));
const moduleName = process.env.OD_PLAYWRIGHT_MODULE || "playwright";
const sharpModuleName = process.env.OD_SHARP_MODULE || "sharp";

let chromium, sharp;
try {
  ({ chromium } = await import(moduleName));
  ({ default: sharp } = await import(sharpModuleName));
} catch (error) {
  throw new Error(`Playwright and Sharp are required. Install them or set OD_PLAYWRIGHT_MODULE and OD_SHARP_MODULE. ${error.message}`);
}

const allPreviews = await loadPublishedPreviews(root);
const previews = allPreviews.filter(preview => !match || preview.includes(match)).slice(0, limit);
const outputDirectory = path.join(root, "catalog/thumbnails");
await mkdir(outputDirectory, { recursive: true });

const executablePath = process.env.OD_CHROMIUM_EXECUTABLE;
const browser = await chromium.launch({ headless: true, ...(executablePath ? { executablePath } : {}) });
const prior = await loadValidPriorThumbnails(root, allPreviews);
const thumbnails = await mapExistingThumbnails(root, allPreviews, prior);
let cursor = 0;
let failures = 0;

async function waitForPreviewReady(page) {
  await page.waitForFunction(() => document.readyState === "complete", null, { timeout: 8_000 });
  const imagesReady = await page.waitForFunction(() => [...document.images].every(image => image.complete), null, { timeout: 5_000 }).then(() => true, () => false);
  await page.evaluate(async () => {
    if (document.fonts?.ready) await Promise.race([document.fonts.ready, new Promise(resolve => setTimeout(resolve, 3_000))]);
    await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));
  });
  await page.waitForTimeout(250);
  return imagesReady;
}

async function assertMeaningfulCapture(page, capture) {
  const readiness = await page.evaluate(() => {
    const text = (document.body?.innerText || "").replace(/\s+/g, " ").trim();
    const visible = [...document.body.querySelectorAll("*")].some(element => {
      const rect = element.getBoundingClientRect();
      return rect.width > 24 && rect.height > 24 && getComputedStyle(element).visibility !== "hidden";
    });
    const viewportArea = Math.max(1, innerWidth * innerHeight);
    const blockingLoading = [...document.querySelectorAll('[aria-busy="true"],[data-loading="true"],.loading,.loader,.spinner')].some(element => {
      const rect = element.getBoundingClientRect();
      return rect.width * rect.height > viewportArea * .25 && getComputedStyle(element).visibility !== "hidden";
    });
    return { text, visible, blockingLoading };
  });
  if (!readiness.visible || readiness.blockingLoading || /^(loading|please wait|加载中)[. …]*$/i.test(readiness.text)) throw new Error("page remained blank/loading");
  const stats = await sharp(capture).stats();
  const variation = stats.channels.slice(0, 3).reduce((sum, channel) => sum + channel.stdev, 0) / 3;
  if (variation < 1) throw new Error(`capture is visually blank (variation ${variation.toFixed(2)})`);
}

async function worker() {
  const page = await browser.newPage({ viewport: { width: 960, height: 600 }, deviceScaleFactor: 1 });
  while (cursor < previews.length) {
    const preview = previews[cursor++];
    const filename = `${createHash("sha256").update(preview).digest("hex").slice(0, 20)}.webp`;
    try {
      await page.goto(`${baseUrl}/${preview}`, { waitUntil: "domcontentloaded", timeout: 12_000 });
      const imagesReady = await waitForPreviewReady(page);
      if (!imagesReady) console.warn(`SETTLED ${preview}: some images did not complete; validating rendered frame`);
      const capture = await page.screenshot({ type: "png" });
      await assertMeaningfulCapture(page, capture);
      await sharp(capture).webp({ quality: 58, effort: 4 }).toFile(path.join(outputDirectory, filename));
      thumbnails[preview] = `catalog/thumbnails/${filename}`;
    } catch (error) {
      failures++;
      console.warn(`SKIP ${preview}: ${error.message.split("\n")[0]}`);
    }
  }
  await page.close();
}

await Promise.all(Array.from({ length: Math.min(concurrency, previews.length) }, () => worker()));
await browser.close();
const ordered = await writeThumbnailManifest(root, thumbnails);
console.log(`Captured ${previews.length - failures}/${previews.length} targets; manifest covers ${Object.keys(ordered).length}/${allPreviews.length} previews (${failures} skipped).`);
if (failures) process.exitCode = 1;
