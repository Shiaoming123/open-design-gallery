# Workday Canvas Source Evidence

## Source Scope

This package distills public official Workday Canvas documentation, the open-source Canvas Kit repository, and the public Canvas Tokens repository into an Open Design reusable visual language. It is inspiration-only: no official screenshots, image assets, icons, fonts, source code, or Workday implementation files were copied.

## Official Sources Reviewed

- Workday Canvas home: https://canvas.workday.com/
- Canvas Kit repository: https://github.com/Workday/canvas-kit
- Canvas Kit Storybook/docs: https://workday.github.io/canvas-kit/
- Canvas Kit Button README: https://github.com/Workday/canvas-kit/tree/master/modules/react/button
- Canvas Kit Card README: https://github.com/Workday/canvas-kit/tree/master/modules/react/card
- Canvas Tokens repository: https://github.com/Workday/canvas-tokens
- Canvas Tokens docs: https://workday.github.io/canvas-tokens/

## Evidence Notes

- Workday describes Canvas as an adaptable system of guidelines, components, and tools supporting user interface design best practices.
- Canvas Kit provides React components for implementing user experiences consistent with Workday design principles.
- Canvas Kit installation pairs `@workday/canvas-kit-react` with `@workday/canvas-tokens-web`; the README notes that theming should use CSS tokens globally rather than CanvasProvider.
- Canvas Kit references Roboto and Roboto Mono font packages for applications that do not already provide those fonts.
- Canvas Tokens exposes system concepts for depth, motion, shape, breakpoints, color, and spacing. Its base token file identifies the baseline as the 8pt sizing grid.
- Shape tokens map roundedness to component roles, with small and medium shapes for controls and stronger rounding for prominent containers.
- Depth tokens distinguish standard card depth from navigation, menus, banners, side panels, and modal dialogs.

## Distillation Decisions

- The Open Design palette uses a pale enterprise app canvas, white cards, Workday-like blue primary action, neutral slate text, and restrained semantic states.
- The token scale uses Roboto-first typography, 8px rhythm, medium radii, and soft two-layer depth for card and overlay hierarchy.
- The component fixture focuses on approvals, employee task cards, form review, status pills, and side-panel-like summaries because those patterns are reusable enterprise workflows without copying official examples.
- The package uses only the standard Open Design token schema and no brand-specific extension tokens.
