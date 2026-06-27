# Palantir Blueprint Source Evidence

## Source Scope

This package distills public official Blueprint documentation and the public `palantir/blueprint` repository into an Open Design reusable visual language. It is inspiration-only: no official screenshots, image assets, icons, source files, or proprietary Palantir resources were copied.

## Official Sources Reviewed

- Blueprint landing/docs site: https://blueprintjs.com/
- Blueprint documentation entry: https://blueprintjs.com/docs/
- Blueprint repository: https://github.com/palantir/blueprint
- Blueprint core variables source page, used only as public evidence of token categories: https://github.com/palantir/blueprint/blob/develop/packages/core/src/common/_variables.scss
- Blueprint typography source page, used only as public evidence of type hierarchy: https://github.com/palantir/blueprint/blob/develop/packages/core/src/_typography.scss

## Evidence Notes

- The public site and repository describe Blueprint as a React-based UI toolkit for the web.
- The repository README says Blueprint is optimized for complex, data-dense desktop web interfaces in modern browsers and explicitly notes that it is not mobile-first.
- The repository identifies component libraries for core styles/components, dates and times, icons, selecting items from a list, and a scalable interactive spreadsheet-like table component.
- The public package list and docs structure support a design language centered on tables, menus, forms, overlays, selection, tags, and other dense desktop application primitives.
- The typography source page documents a heading scale that maps to 36px, 28px, 22px, 18px, 16px, and 14px tiers, plus UI text, monospace text, running text, muted text, disabled text, and overflow handling.
- The variables source page exposes elevation, shadow, dark-theme, high-contrast, and system-color concerns, which supports the distillation's emphasis on crisp overlays, accessible focus, and enterprise app states.
- The repository license is Apache-2.0. This package remains a distillation and does not vendor Blueprint code or assets.

## Distillation Decisions

- The Open Design package uses cool blue-gray surfaces, firm borders, small radii, blue interaction states, and restrained semantic colors.
- The component fixture focuses on a data investigation desktop workspace with toolbar controls, table rows, intent tags, detail inspector, dialog preview, and export actions. These patterns match Blueprint's public positioning without copying official examples.
- Tokens use only the standard Open Design schema. No brand-specific extension tokens were introduced.
