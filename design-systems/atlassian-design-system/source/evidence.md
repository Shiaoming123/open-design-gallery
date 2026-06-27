# Evidence: Atlassian Design System

Captured for Open Design Worker A on 2026-06-10.

## Official public sources reviewed

- https://atlassian.design/foundations
- https://atlassian.design/foundations/color
- https://atlassian.design/foundations/spacing
- https://atlassian.design/foundations/elevation
- https://atlassian.design/foundations/typography-beta
- https://atlassian.design/foundations/typography/applying-typography
- https://atlassian.design/components/tokens/all-tokens

## Distilled observations

- Atlassian positions tokens as the source of truth for design decisions and recommends applying color through semantic design tokens instead of raw color picking.
- The color system supports light and dark themes and treats accessibility contrast as a baseline requirement.
- The spacing foundation is built from an 8px base unit, with tokenized steps from very small values up to large layout spacing.
- Elevation is a layered surface model: sunken, default, raised, overlay, plus special overflow cases. Raised surfaces should be paired with shadows and used intentionally.
- Typography guidance emphasizes legible tokenized styles, correct heading hierarchy, responsive text, and avoiding very small text except for fine print.
- Product UI uses compact, clear, information-dense patterns: navigation, boards, forms, tables, status indicators, and overlay surfaces.

## Open Design translation

- `--bg`, `--surface`, and `--surface-warm` model the canvas, card, and sunken/well relationship.
- `--accent` maps to an Atlassian-blue action role, with darker hover and pressed states.
- The typography stack favors Atlassian Sans and Charlie Display when locally available, with system sans fallbacks.
- The component fixture uses original markup and no official screenshots, logos, icons, source code, fonts, or assets.

## License and attribution note

This package is an original design-language distillation from public official documentation. It is inspiration only and does not vendor Atlassian assets or claim affiliation.
