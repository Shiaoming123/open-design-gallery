import { access, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const overview = await readFile(path.join(root, "catalog/overview-data/overview-data.js"), "utf8");
const previews = [...new Set([...overview.matchAll(/"preview"\s*:\s*"([^"]+)"/g)].map(match => match[1]))].sort();
const names = ["preview.webp", "screenshot.webp", "preview.png", "screenshot.png", "hero.png", "cover.png"];
const thumbnails = {};

for (const preview of previews) {
  const directory = path.posix.dirname(preview);
  for (const name of names) {
    const candidate = path.posix.join(directory, "assets", name);
    try {
      await access(path.join(root, candidate));
      thumbnails[preview] = candidate;
      break;
    } catch {}
  }
}

const output = `window.OD_PREVIEW_THUMBNAILS = ${JSON.stringify(thumbnails, null, 2)};\n`;
await writeFile(path.join(root, "catalog/preview-thumbnails.js"), output);
console.log(`Mapped ${Object.keys(thumbnails).length} existing preview images for ${previews.length} local previews.`);
