# AWS Cloudscape Source Evidence

## Source Scope

This package distills public official Cloudscape Design System documentation into an Open Design reusable visual language. It is inspiration-only: no official screenshots, image assets, source code, or proprietary AWS UI files were copied.

## Official Sources Reviewed

- Cloudscape home: https://cloudscape.design/
- Cloudscape foundation overview: https://cloudscape.design/foundation/
- Cloudscape colors: https://cloudscape.design/foundation/visual-foundation/colors/
- Cloudscape spacing: https://cloudscape.design/foundation/visual-foundation/spacing/
- Cloudscape typography: https://cloudscape.design/foundation/visual-foundation/typography/
- Cloudscape theming: https://cloudscape.design/foundation/visual-foundation/theming/
- Cloudscape components index: https://cloudscape.design/components/

## Evidence Notes

- Cloudscape presents itself as an open source design system for cloud web applications, built for AWS products and services, with guidelines, React components, design resources, and development tools.
- The foundation docs emphasize color, spacing, iconography, motion, accessibility, responsive behavior, and broad browser support.
- The color guidance says most UI is white with grayscale, using blue for primary action/links/interactive accent and red/green status colors for resource state. Color should not be the only means of conveying information.
- The spacing guidance is based on a 4px grid with progressive increments and clear differentiation between internal component padding and spacing between components.
- Typography guidance emphasizes hierarchy, sentence case, one h1 per page, no font sizes below 12px, and restrained monospace use.
- The theming page identifies typography, colors, and border radii as themeable categories, while discouraging instance-by-instance overrides.
- The components index shows a broad operational component set: badges, boards, buttons, cards, charts, checkboxes, code editor, and related console primitives.

## Distillation Decisions

- The Open Design palette uses neutral gray shell surfaces, white containers, blue action states, and semantic success/warning/danger tokens.
- The component fixture focuses on a resource inventory, service navigation, metrics cards, status chips, and configuration review because these patterns match cloud-console usage without copying any official Cloudscape examples.
- The tokens use the standard Open Design schema only, with no brand-specific extension tokens.
