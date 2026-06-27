# Pinterest Gestalt Evidence

## Sources reviewed

- https://gestalt.pinterest.systems/
- https://github.com/pinterest/gestalt
- https://raw.githubusercontent.com/pinterest/gestalt/master/README.md
- https://raw.githubusercontent.com/pinterest/gestalt/master/LICENSE
- https://www.npmjs.com/package/gestalt
- https://www.npmjs.com/package/gestalt-design-tokens
- `gestalt-design-tokens@177.0.12` package metadata and token JSON inspected locally from the public npm tarball.

## Public evidence distilled

- The Gestalt README describes Gestalt as Pinterest's design system and a React component library with guidelines, best practices, tools, and resources for designers and engineers.
- The `gestalt` npm package describes the library as React UI components that enforce Pinterest's design language.
- The `gestalt-design-tokens` npm package is Apache-2.0 and describes itself as the design-token style dictionary for Gestalt.
- The token package exposes classic base, semantic, and component token layers, including base colors, base spacing, base font, base rounding, base elevation, semantic light/dark color maps, data visualization colors, and component web color/font/elevation tokens.
- Public token values include Pinterest red `#E60023`, near-black `#111111`, neutral grays, blue link/info/focus families, green success, yellow/orange warning, and red error families.
- Public spacing tokens follow a 4px ladder from 0px through 64px, including negative counterparts.
- Public rounding tokens include 0, 4, 8, 12, 16, 20, 24, 28, 32, pill, and circle.
- The public docs HTML exposes a Gestalt theme block with compact line-height tokens and a component navigation index containing buttons, fields, side navigation, segmented controls, tables, tags, toasts, tooltips, and modals.
- The GitHub repository is Apache-2.0 licensed. This Open Design package is a distilled inspiration capture and does not copy official screenshots, icons, assets, or source code.

## Capture decisions

- Keep this package product-component oriented and distinct from `design-systems/pinterest/`, which captures the consumer visual-discovery brand.
- Use the Open Design schema token names only; do not vendor Gestalt JSON token files.
- Bind the core visual language to semantic roles: near-black text, neutral surfaces, red primary action, blue focus, green success, orange warning, red error.
- Build original HTML fixture examples that evoke Gestalt-like product primitives without copying official React component source or docs screenshots.
