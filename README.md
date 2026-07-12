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

## Static Contract Check

```bash
node scripts/check-gallery.mjs
```

The check keeps large-list rendering batched, restricts the single heavy iframe
to the selected-item modal, and verifies that catalog preview paths stay local
while external references remain ordinary links.
