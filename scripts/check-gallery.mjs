import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const [index, overview, catalogPreview, assetCatalogText] = await Promise.all([
  readFile(path.join(root, "index.html"), "utf8"),
  readFile(path.join(root, "overview.html"), "utf8"),
  readFile(path.join(root, "catalog", "preview.html"), "utf8"),
  readFile(path.join(root, "catalog", "assets.json"), "utf8"),
]);

assert.equal(index, overview, "index.html and overview.html must stay identical");
assert.equal((index.match(/<iframe\b/g) ?? []).length, 1, "Gallery must have exactly one selected-item iframe");
assert.match(index, /<iframe id="modal-iframe"><\/iframe>/, "selected-item iframe must belong to the modal");
assert.doesNotMatch(index, /createElement\(['"]iframe['"]\)|data-preview-src|IntersectionObserver/, "cards must not create lazy preview iframes");
assert.match(index, /function renderInBatches\(/, "large lists must use the shared batch renderer");
assert.match(index, /requestAnimationFrame\(appendBatch\)/, "later batches must yield to the browser");
assert.doesNotMatch(index, /grid\.innerHTML\s*=\s*items\.map/, "large lists must not render in one innerHTML assignment");
assert.match(index, /function isLocalPreview\(/, "modal previews must enforce repository-local paths");
assert.match(index, /if\(!isLocalPreview\(preview\)\)return;/, "modal must reject external preview URLs");
assert.doesNotMatch(catalogPreview, /<iframe\b/i, "catalog cards must remain link-only");

const externalTargets = index.match(/target="_blank"/g) ?? [];
const safeExternalTargets = index.match(/target="_blank" rel="noreferrer"/g) ?? [];
assert.equal(safeExternalTargets.length, externalTargets.length, "external links must use noreferrer");

const catalog = JSON.parse(assetCatalogText);
for (const asset of catalog.assets ?? []) {
  for (const field of ["sourcePath", "previewPath"]) {
    const value = asset[field];
    if (value === undefined) continue;
    assert.equal(path.isAbsolute(value), false, `${asset.id}: ${field} must be local`);
    assert.equal(value.split(/[\\/]/).includes(".."), false, `${asset.id}: ${field} must not escape Gallery`);
    assert.doesNotMatch(value, /^[a-z][a-z0-9+.-]*:/i, `${asset.id}: ${field} must not be an external URL`);
  }
}

console.log(`Gallery surface check passed: ${catalog.assets.length} assets, one selected-item iframe, batched lists.`);
