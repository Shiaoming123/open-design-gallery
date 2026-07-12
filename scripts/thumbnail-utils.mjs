import { access, readFile, realpath, writeFile } from "node:fs/promises";
import path from "node:path";

const MANIFEST = "catalog/preview-thumbnails.js";
const EXISTING_NAMES = ["preview.webp", "screenshot.webp", "preview.png", "screenshot.png", "hero.png", "cover.png"];

export function isStrictLocalPath(value) {
  return typeof value === "string"
    && value.length > 0
    && !path.isAbsolute(value)
    && !value.startsWith("//")
    && !value.includes("\\")
    && !value.split("/").includes("..")
    && !/^[a-z][a-z0-9+.-]*:/i.test(value);
}

export async function resolveRepoLocalPath(root, value, mustExist = false) {
  if (!isStrictLocalPath(value)) return null;
  const resolved = path.resolve(root, value);
  const relative = path.relative(root, resolved);
  if (!relative || relative.startsWith("..") || path.isAbsolute(relative)) return null;
  if (!mustExist) return resolved;
  try {
    const [realRoot, realTarget] = await Promise.all([realpath(root), realpath(resolved)]);
    const realRelative = path.relative(realRoot, realTarget);
    return !realRelative.startsWith("..") && !path.isAbsolute(realRelative) ? realTarget : null;
  } catch {
    return null;
  }
}

export function parseThumbnailManifest(text) {
  const match = text.match(/=\s*(\{[\s\S]*\});?\s*$/);
  if (!match) return {};
  try { return JSON.parse(match[1]); } catch { return {}; }
}

export async function loadPublishedPreviews(root) {
  const overview = await readFile(path.join(root, "catalog/overview-data/overview-data.js"), "utf8");
  return [...new Set([...overview.matchAll(/"preview"\s*:\s*"([^"]+)"/g)].map(match => match[1]))]
    .filter(isStrictLocalPath)
    .sort();
}

export async function loadValidPriorThumbnails(root, previews) {
  let prior = {};
  try { prior = parseThumbnailManifest(await readFile(path.join(root, MANIFEST), "utf8")); } catch {}
  const allowed = new Set(previews);
  const valid = {};
  for (const [preview, thumbnail] of Object.entries(prior)) {
    if (!allowed.has(preview)) continue;
    if (!await resolveRepoLocalPath(root, preview, true)) continue;
    if (!await resolveRepoLocalPath(root, thumbnail, true)) continue;
    valid[preview] = thumbnail;
  }
  return valid;
}

export async function mapExistingThumbnails(root, previews, prior = {}) {
  const merged = { ...prior };
  for (const preview of previews) {
    if (merged[preview]) continue;
    if (!await resolveRepoLocalPath(root, preview, true)) continue;
    const directory = path.posix.dirname(preview);
    for (const name of EXISTING_NAMES) {
      const candidate = path.posix.join(directory, "assets", name);
      if (await resolveRepoLocalPath(root, candidate, true)) {
        merged[preview] = candidate;
        break;
      }
    }
  }
  return merged;
}

export async function writeThumbnailManifest(root, thumbnails) {
  const ordered = Object.fromEntries(Object.entries(thumbnails).sort(([a], [b]) => a.localeCompare(b)));
  await writeFile(path.join(root, MANIFEST), `window.OD_PREVIEW_THUMBNAILS = ${JSON.stringify(ordered, null, 2)};\n`);
  return ordered;
}
