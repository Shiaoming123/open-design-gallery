# GitLab Pajamas Source Evidence

## Source Scope

This package distills public official GitLab Pajamas Design System documentation into an Open Design reusable visual language. It is inspiration-only: no official screenshots, image assets, source code, Figma files, or GitLab UI implementation were copied.

## Official Sources Reviewed

- Pajamas home: https://design.gitlab.com/
- Navigating Pajamas: https://design.gitlab.com/get-started/navigating-pajamas/
- Product color foundation: https://design.gitlab.com/product-foundations/color/
- Brand color foundation: https://design.gitlab.com/brand-design/color/
- Product spacing foundation: https://design.gitlab.com/product-foundations/spacing/
- Type fundamentals: https://design.gitlab.com/product-foundations/type-fundamentals/
- Design tokens overview: https://design.gitlab.com/product-foundations/design-tokens/
- Headings: https://design.gitlab.com/product-foundations/type-headings/
- Alert component: https://design.gitlab.com/components/alert/
- Badge component: https://design.gitlab.com/components/badge/
- Elevation foundation: https://design.gitlab.com/product-foundations/elevation/

## Evidence Notes

- Pajamas is focused on the GitLab product, including GitLab.com, self-managed, and dedicated instances; foundations, components, patterns, objects, directives, and data visualization serve product UI.
- The product color foundation describes five chromatic ramps with 55 colors and gives blue a current/active role. The brand color page identifies white, charcoal, orange, and purple as primary brand colors.
- GitLab Sans is the primary UI family, based on Inter, chosen for small-size legibility, character disambiguation, and balance with brand expression.
- Spacing uses an 8px system, with a documented 12px outlier reserved for horizontal padding in tabs, buttons, and form elements.
- Pajamas design tokens are organized as constant, semantic, and contextual tokens to clarify design intent and support consistent product decisions.
- Heading guidance recommends semantic heading levels by default, with contextual adjustments when a container already provides hierarchy.
- Alert guidance frames alerts as contextual system-generated events that need attention, confirmation, validation, or dynamic status. Badge guidance frames badges as metadata tied to an object.
- Elevation guidance treats large shadows as contextual overlays such as modals and drawers, not general decoration.

## Distillation Decisions

- The Open Design palette uses neutral product surfaces, GitLab charcoal text, purple action emphasis, semantic status colors, and only restrained orange label warmth.
- The component fixture focuses on merge requests, pipeline health, labels, badges, alerts, and filters because these are reusable product-workflow patterns without copying official Pajamas examples.
- The tokens use the standard Open Design schema only, with no brand-specific extension tokens.
