import { createHash } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const option = name => {
  const index = process.argv.indexOf(name);
  return index >= 0 ? process.argv[index + 1] : undefined;
};
const baseUrl = (option("--base-url") || "http://127.0.0.1:8765").replace(/\/$/, "");
const limit = Number(option("--limit") || Infinity);
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

const overview = await readFile(path.join(root, "catalog/overview-data/overview-data.js"), "utf8");
const previews = [...new Set([...overview.matchAll(/"preview"\s*:\s*"([^"]+)"/g)].map(match => match[1]))]
  .filter(preview => !preview.startsWith("/") && !preview.includes("..") && !/^[a-z]+:/i.test(preview))
  .sort()
  .slice(0, limit);
const outputDirectory = path.join(root, "catalog/thumbnails");
await mkdir(outputDirectory, { recursive: true });

const executablePath = process.env.OD_CHROMIUM_EXECUTABLE;
const browser = await chromium.launch({ headless: true, ...(executablePath ? { executablePath } : {}) });
const thumbnails = {};
let cursor = 0;
let failures = 0;

async function worker() {
  const page = await browser.newPage({ viewport: { width: 960, height: 600 }, deviceScaleFactor: 1 });
  while (cursor < previews.length) {
    const preview = previews[cursor++];
    const filename = `${createHash("sha256").update(preview).digest("hex").slice(0, 20)}.webp`;
    try {
      await page.goto(`${baseUrl}/${preview}`, { waitUntil: "domcontentloaded", timeout: 12_000 });
      const capture = await page.screenshot({ type: "png" });
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
const ordered = Object.fromEntries(Object.entries(thumbnails).sort(([a], [b]) => a.localeCompare(b)));
await writeFile(path.join(root, "catalog/preview-thumbnails.js"), `window.OD_PREVIEW_THUMBNAILS = ${JSON.stringify(ordered, null, 2)};\n`);
console.log(`Captured ${Object.keys(ordered).length}/${previews.length} local previews (${failures} skipped).`);
