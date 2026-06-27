# U.S. Web Design System Evidence

## Source Material

- USWDS home: https://designsystem.digital.gov/
- Design tokens overview: https://designsystem.digital.gov/design-tokens/
- Theme color tokens: https://designsystem.digital.gov/design-tokens/color/theme-tokens/
- Font tokens: https://designsystem.digital.gov/design-tokens/typesetting/font/
- Line height tokens: https://designsystem.digital.gov/design-tokens/typesetting/line-height/
- Spacing unit tokens: https://designsystem.digital.gov/design-tokens/spacing-units/
- Components overview: https://designsystem.digital.gov/components/overview/
- Button component: https://designsystem.digital.gov/components/button/
- Alert component: https://designsystem.digital.gov/components/alert/
- Card component: https://designsystem.digital.gov/components/card/

## License And Attribution

This Open Design package is a distilled, hand-authored visual-language capture from public USWDS documentation. It does not copy official screenshots, assets, downloadable source, or component code. Source pages were used as evidence for visual roles, component semantics, token scales, and accessibility-oriented behavior.

## Evidence Notes

- The token overview frames typography, spacing, color, line height, and related values as limited reusable design-token palettes.
- Theme color tokens are organized into base, primary, secondary, accent-warm, and accent-cool families, with a proportional 60/30/10 guidance for non-base color use.
- Font guidance emphasizes font-family plus size tokens and a normalized type scale.
- Line-height guidance lists six line-height targets, with 1.15 for headings/lead text and 1.62 as a good choice for extended reading.
- Spacing units are based on multiples of 8px with small 1px, 2px, and 4px options and larger named layout widths.
- The components overview positions components as simple, consistent solutions to common interface needs.
- Button guidance distinguishes important actions from regular links and notes outline buttons for actions that happen on the current page.
- Alert guidance covers information, warning, success, error, emergency, slim, and no-icon variants, with concise human-readable language.
- Card guidance describes cards as modular summaries in collections, separated by border or shadow, and warns against using them for tabular or sequential content.

## Distillation Choices

- `--accent` is mapped to the default primary blue from the USWDS theme token table.
- Cool-gray neutrals carry the base family, while `--surface-warm` preserves the accent-warm role for tags and support highlights.
- The fixture demonstrates a trust banner, alerts, grouped cards, buttons, and a search strip using original content and original markup.
