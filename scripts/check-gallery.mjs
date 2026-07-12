import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { isStrictLocalPath, resolveRepoLocalPath } from "./thumbnail-utils.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const [index, overview, catalogPreview, assetCatalogText, thumbnailManifest, captureBuilder, overviewDataText] = await Promise.all([
  readFile(path.join(root, "index.html"), "utf8"),
  readFile(path.join(root, "overview.html"), "utf8"),
  readFile(path.join(root, "catalog", "preview.html"), "utf8"),
  readFile(path.join(root, "catalog", "assets.json"), "utf8"),
  readFile(path.join(root, "catalog", "preview-thumbnails.js"), "utf8"),
  readFile(path.join(root, "scripts", "capture-preview-thumbnails.mjs"), "utf8"),
  readFile(path.join(root, "catalog", "overview-data", "overview-data.js"), "utf8"),
]);

assert.equal(index, overview, "index.html and overview.html must stay identical");
assert.equal((index.match(/<iframe\b/g) ?? []).length, 1, "Gallery must have exactly one live preview iframe");
assert.match(index, /<aside class="preview-shell" id="preview-shell"[^>]*role="dialog"[^>]*aria-modal="false"/, "the shared preview shell must expose dialog semantics without claiming desktop modality");
assert.match(index, /<iframe id="preview-iframe" title="Selected local preview"><\/iframe>/, "desktop and mobile must share one preview iframe");
assert.doesNotMatch(index, /createElement\(['"]iframe['"]\)|data-preview-src|IntersectionObserver/, "cards must not create lazy preview iframes");
assert.match(index, /const RENDER_LIMIT = 48;/, "each active result surface must cap its rendered cards at 48");
assert.match(index, /\.catalog-page\.active \{ display:block; min-height:100vh; \}/, "active catalog page must reserve the first viewport before data loads");
assert.match(index, /<div class="container catalog-page active" id="templates" data-catalog-page="templates">/, "Templates must be active in the static HTML before overview data loads");
assert.match(index, /function renderWindow\(/, "all large surfaces must use the shared render window");
assert.match(index, /items\.slice\(0, RENDER_LIMIT\)/, "rendering must only materialize the first active result window");
assert.match(index, /grid\.dataset\.total=String\(items\.length\)/, "result counts must retain the full matching total when the DOM window is capped");
assert.doesNotMatch(index, /grid\.innerHTML\s*=\s*items\.map/, "large lists must not render in one innerHTML assignment");
assert.match(index, /function staticPreview\(/, "cards must render a static preview or an explicit type poster");
assert.match(index, /class="static-preview-image"/, "captured previews must use an image instead of a card iframe");
assert.match(index, /class="static-preview-poster"/, "uncaptured previews must declare a deterministic type poster fallback");
assert.doesNotMatch(index, /select to preview/i, "cards must not hide their visual content behind selection copy");
assert.match(index, /if\(e\.key==='Enter'\|\|e\.key===' '\)/, "preview cards must support Enter and Space");
assert.match(index, /document\.body\.classList\.add\('preview-open'\)/, "mobile dialog must lock background scrolling");
assert.match(index, /document\.querySelectorAll\('body > :not\(#preview-shell\)'\)/, "mobile dialog must isolate background content");
assert.match(index, /function trapPreviewFocus\(/, "mobile dialog must trap keyboard focus");
assert.match(index, /#skills \.card-img \{ aspect-ratio:16\/9; \}/, "skills must use compact directory cards instead of portrait placeholders");
assert.match(index, /#skills \.card-grid \{ grid-template-columns:repeat\(auto-fit,minmax\(220px,1fr\)\); gap:18px; \}/, "skills must use a denser desktop directory grid");
assert.match(index, /function isLocalPreview\(/, "modal previews must enforce repository-local paths");
assert.match(index, /if\(!isLocalPreview\(preview\)\)return;/, "live preview must reject external preview URLs");
assert.match(index, /function clearInactiveCatalogPages\(/, "page switches must remove cards from hidden catalog pages");
assert.match(index, /clearInactiveCatalogPages\(nextPage\)/, "every catalog page switch must clear inactive page DOM");
assert.match(index, /function filterItemsForWindow\(/, "specialized libraries must filter complete arrays before windowing");
for (const renderer of ["renderProductUiView", "renderCommercialView", "renderBlogView"]) {
  const body = index.match(new RegExp(`function ${renderer}\\([\\s\\S]*?\\n}`))?.[0] || "";
  assert.match(body, /filterItemsForWindow\(items, state,/, `${renderer} must filter the complete array before renderWindow`);
  assert.match(body, /renderWindow\(grid, matches,/, `${renderer} must window the matching array, not the unfiltered source`);
}
assert.match(index, /function activateFirstPreview\([\s\S]*?if\(!card\)\{closePreview\(\);return;}/, "empty results must close and clear the live preview");
assert.match(index, /function clearInactiveViewGrids\(/, "specialized sub-tabs must release every inactive grid");
for (const setter of ["setProductUiView", "setCommercialView", "setBlogView"]) {
  const body = index.match(new RegExp(`function ${setter}\\([\\s\\S]*?\\n}`))?.[0] || "";
  assert.match(body, /clearInactiveViewGrids\(/, `${setter} must keep only its active grid mounted`);
}
const blogSetter = index.match(/function setBlogView\([\s\S]*?\n}/)?.[0] || "";
assert.match(blogSetter, /#blog-projects \[data-blog-view\]/, "blog tabs must be scoped to the Blogs page");
assert.match(blogSetter, /#blog-projects \.blog-panel/, "blog panels must be scoped to the Blogs page");
assert.doesNotMatch(index, /<article class="blog-card"[^>]*role="button"/, "articles containing links and buttons must not claim button semantics");
assert.match(index, /function isInteractiveCardTarget\(/, "card delegation must recognize nested interactive controls");
assert.match(index, /if\(isInteractiveCardTarget\(e\.target\)\)return;/, "card selection must ignore interactive descendants");
assert.match(index, /data-card-id=/, "every selectable card must expose a unique identity");
assert.match(index, /card\.dataset\.cardId===cardId/, "active state must compare card identity, not shared preview URL");
assert.match(index, /function staticTypePoster\(/, "Skills without previews must use a real type poster");
assert.doesNotMatch(index, /#skills[\s\S]*?<span class="placeholder">[\s\S]*?<\/span>/, "Skills must not render emoji placeholders");
assert.match(index, /systems-workbench-head/, "Systems title, search, and primary categories must share one visual axis");
assert.match(index, /function progressiveFilterButtons\(/, "Launches and Blogs must collapse low-frequency categories");
assert.match(index, /<details class="filter-more"/, "overflow categories must remain expandable");
assert.match(index, /class="card is-static"/, "poster-only cards must use static article semantics");
assert.match(index, /\.card\.is-static \{ cursor:default;/, "static cards must not advertise click affordance");
assert.match(index, /c\.preview\?'<div class="card has-preview" tabindex="0" role="button"[^:]+:'<article class="card is-static"'/, "only cards with previews may enter the card tab sequence");
for (const prefix of ["product-ui", "commercial", "blog"]) {
  assert.match(index, new RegExp(`id="tab-${prefix}-[^"]+"[^>]*role="tab"[^>]*aria-selected="(?:true|false)"[^>]*aria-controls="${prefix}-panel-[^"]+"`), `${prefix} buttons need complete tab ARIA`);
  assert.match(index, new RegExp(`id="${prefix}-panel-[^"]+"[^>]*role="tabpanel"[^>]*aria-labelledby="tab-${prefix}-[^"]+"`), `${prefix} panels need complete tabpanel ARIA`);
}
assert.match(index, /function syncTabState\(/, "setView must synchronize aria-selected and tab stops");
assert.match(index, /function handleTablistKeydown\(/, "tablists must support directional keyboard navigation");
assert.match(captureBuilder, /waitForPreviewReady\(/, "capture must wait for deterministic page readiness");
assert.match(captureBuilder, /assertMeaningfulCapture\(/, "capture must reject obvious blank or loading frames");
assert.match(captureBuilder, /process\.exitCode\s*=\s*1/, "capture failures must not report silent success");
assert.match(captureBuilder, /mapExistingThumbnails/, "capture must merge prior, existing, and captured thumbnails");
for (const invalid of ["/tmp/x.png", "C:\\tmp\\x.png", "https://example.com/x.png", "file:x.png", "../x.png", "a/../x.png", "//host/x.png"]) {
  assert.equal(isStrictLocalPath(invalid), false, `${invalid}: strict local validator must reject unsafe path`);
  assert.equal(await resolveRepoLocalPath(root, invalid), null, `${invalid}: unsafe path must not resolve inside Gallery`);
}
assert.ok(await resolveRepoLocalPath(root, "catalog/preview-thumbnails.js", true), "strict local validator must accept an existing repo file");
assert.doesNotMatch(catalogPreview, /<iframe\b/i, "catalog cards must remain link-only");
assert.match(thumbnailManifest, /"[^"\n]+\.html": "[^"\n]+\.(?:webp|png|jpg)"/, "existing source screenshots must be reused by the static preview manifest");
assert.match(captureBuilder, /chromium\.launch\(/, "the capture builder must use a real headless browser");
assert.match(captureBuilder, /process\.env\.OD_CHROMIUM_EXECUTABLE/, "capture must support an explicit compatible browser executable");
assert.match(captureBuilder, /process\.env\.OD_SHARP_MODULE/, "WebP conversion must accept an explicit Sharp module");
assert.match(captureBuilder, /sharp\(capture\)\.webp\(/, "Playwright PNG captures must be converted to WebP by Sharp");

const thumbnailMap = JSON.parse(thumbnailManifest.match(/=\s*(\{[\s\S]*\});/)[1]);
const publishedPreviews = [...new Set([...overviewDataText.matchAll(/"preview"\s*:\s*"([^"]+)"/g)].map(match => match[1]))];
for (const preview of publishedPreviews) {
  assert.ok(thumbnailMap[preview], `${preview}: local preview must have a static thumbnail`);
  assert.ok(await resolveRepoLocalPath(root, preview, true), `${preview}: preview must resolve to an existing file inside Gallery`);
  assert.ok(await resolveRepoLocalPath(root, thumbnailMap[preview], true), `${preview}: thumbnail must resolve to an existing file inside Gallery`);
}

const externalTargets = index.match(/target="_blank"/g) ?? [];
const safeExternalTargets = index.match(/target="_blank" rel="noreferrer"/g) ?? [];
assert.equal(safeExternalTargets.length, externalTargets.length, "external links must use noreferrer");

const catalog = JSON.parse(assetCatalogText);
for (const asset of catalog.assets ?? []) {
  for (const field of ["sourcePath", "previewPath"]) {
    const value = asset[field];
    if (value === undefined) continue;
    assert.ok(isStrictLocalPath(value), `${asset.id}: ${field} must pass the strict local path validator`);
    assert.ok(await resolveRepoLocalPath(root, value, true), `${asset.id}: ${field} must resolve inside Gallery`);
    assert.equal(path.isAbsolute(value), false, `${asset.id}: ${field} must be local`);
    assert.equal(value.split(/[\\/]/).includes(".."), false, `${asset.id}: ${field} must not escape Gallery`);
    assert.doesNotMatch(value, /^[a-z][a-z0-9+.-]*:/i, `${asset.id}: ${field} must not be an external URL`);
  }
}

console.log(`Gallery surface check passed: ${catalog.assets.length} assets, one live iframe, 48-card active windows.`);
