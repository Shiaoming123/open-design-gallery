# Elastic UI Source Evidence

## Source Scope

This package distills public official Elastic UI Framework documentation and the public `elastic/eui` repository into an Open Design reusable visual language. It is inspiration-only: no official screenshots, image assets, source files, component code, or proprietary Elastic UI resources were copied.

## Official Sources Reviewed

- Elastic EUI repository: https://github.com/elastic/eui
- Elastic EUI documentation home: https://elastic.github.io/eui/ and https://eui.elastic.co/
- EUI setup and token customization: https://eui.elastic.co/docs/getting-started/setup/
- EUI color tokens: https://eui.elastic.co/docs/getting-started/theming/tokens/colors/
- EUI typography tokens: https://eui.elastic.co/docs/getting-started/theming/tokens/typography/
- EUI border tokens: https://eui.elastic.co/docs/getting-started/theming/tokens/borders/
- EUI components index: https://eui.elastic.co/docs/components/

## Evidence Notes

- The public repository describes EUI as a React component framework for building user interfaces at Elastic and as a shared source of truth for Elastic product UI.
- The documentation home emphasizes flexible composable components, accessibility, documentation, and common primitives such as layout, spacer, text, title, forms, buttons, links, tooltips, panels, callouts, cards, and tables.
- The setup docs describe token customization through base color and typography overrides and note that EUI intentionally keeps the amount of needed token override small.
- The setup docs identify Inter and Roboto Mono as default open-source font choices, with system fallback behavior.
- The color token docs describe 14-step blue, teal, and pink scales, green/yellow/red qualitative colors, and a large grayscale. The docs identify primary blue for calls to action and links, accent colors for indicators, and semantic colors for success, warning, and danger.
- The color accessibility guidance says color should not be the only carrier of state, and state should also be indicated by icons or copy.
- The border docs show thin and thick border roles, a shared border color, and small/medium radii at 4px, reinforcing a compact product surface.

## Distillation Decisions

- The Open Design package uses a cool neutral shell, white panels, blue-gray borders, Elastic blue action, and semantic success/warning/danger roles.
- The component fixture focuses on an observability/search console: top chrome, filters, metrics, alert table, callout, and timeline details. These patterns match EUI's public component categories without copying official examples.
- Tokens use only the standard Open Design schema. No brand-specific extension tokens were introduced.
