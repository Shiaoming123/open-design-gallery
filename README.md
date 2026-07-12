# Open Design Gallery

Personal static gallery for browsing Open Design visual references.

The site is generated from a local Open Design checkout and published as a
standalone GitHub Pages project. This repository intentionally contains only
static browse assets, not the upstream Open Design source code.

## Local Preview

Open `index.html` directly, or serve this folder:

```bash
python3 -m http.server 8765
```

## Static previews

Cards never create hidden iframes. `catalog/preview-thumbnails.js` maps a local
preview page to an existing screenshot/cover when that source bundle already
contains one; otherwise the card renders an explicit metadata poster and keeps
the real page available in the single live preview. Refresh the deterministic
mapping after publishing source assets:

```bash
node scripts/build-preview-thumbnails.mjs
```

The mapper deliberately does not fabricate screenshots. Adding browser capture
uses a real headless browser and is opt-in because this standalone repository
does not install browser dependencies:

```bash
python3 -m http.server 8765
OD_PLAYWRIGHT_MODULE=/absolute/path/to/playwright/index.mjs \
OD_SHARP_MODULE=/absolute/path/to/sharp/lib/index.js \
OD_CHROMIUM_EXECUTABLE=/optional/path/to/compatible/chrome \
  node scripts/capture-preview-thumbnails.mjs --base-url http://127.0.0.1:8765
```

## Static Contract Check

```bash
node scripts/check-gallery.mjs
```

The check caps active result windows at 48 cards, restricts the heavy live view
to one shared iframe, and verifies that catalog preview paths stay local while
external references remain ordinary links.
