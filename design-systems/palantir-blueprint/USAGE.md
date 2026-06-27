# Palantir Blueprint Usage

Design System package guide for Open Design agents and reviewers.

## Read Order

1. Read `DESIGN.md` for visual intent, constraints, and anti-patterns.
2. Paste `tokens.css` into the first artifact `<style>` block before component CSS.
3. Use `components.manifest.json` for the compact component inventory.
4. Open `components.html` when exact selectors, layout, or states matter.
5. Inspect `source/` when attribution or capture evidence matters.

## Design Highlights

- Package: `palantir-blueprint`
- Intent: Desktop application UI language. Data-dense enterprise surfaces, compact controls, crisp blue interactions, small radii, and workflows built for analysts and operators.
- Use the package to preserve the captured visual language while keeping output usable and readable.

## Do

- Preserve schema token names exactly so cross-brand switching stays reliable.
- Reuse component groups from `components.manifest.json` before inventing new controls.
- Treat source files as evidence, not as permission to copy proprietary assets.

## Avoid

- Avoid raw hex values outside the copied `:root` token block.
- Avoid redefining design-token values independently of `tokens.css`.
- Avoid adding component recipes that are not represented in `components.html` or `DESIGN.md`.
