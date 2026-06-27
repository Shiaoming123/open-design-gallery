# Zendesk Garden Source Evidence

## Source Scope

This package distills public official Zendesk Garden documentation and the open-source Garden React repository into an Open Design reusable visual language. It is inspiration-only: no official screenshots, image assets, icons, source code, or Zendesk implementation files were copied.

## Official Sources Reviewed

- Garden home: https://garden.zendesk.com/
- Components overview: https://garden.zendesk.com/components/
- Typography component docs: https://garden.zendesk.com/components/typography/
- Buttons component docs: https://garden.zendesk.com/components/button/
- Forms and inputs docs: https://garden.zendesk.com/components/input/
- Tables docs: https://garden.zendesk.com/components/table/
- Garden React repository: https://github.com/zendeskgarden/react-components
- Garden React theming package: https://github.com/zendeskgarden/react-components/tree/main/.packages/theming

## Evidence Notes

- Garden identifies itself as Zendesk's source of truth for tools, standards, and best practices for building Zendesk products.
- The public components catalogue emphasizes product UI coverage: buttons, forms, tables, notifications, tabs, tags, tiles, timeline, tooltips, typography, and related foundations.
- Garden React exposes a default theme with a 4px base unit, small radii, 1px and 3px border widths, compact font sizes from 10px to 36px, and system/monospace font stacks.
- Garden's palette includes neutral gray, blue, red, yellow, green, and kale ramps. The default light theme maps background, raised surfaces, borders, foreground, primary, success, warning, and danger through semantic color variables.
- The open-source README describes Garden React as providing consistent styling and behavior for Garden components through individually packaged React packages.

## Distillation Decisions

- The Open Design palette uses Garden's neutral gray roles, blue primary emphasis, green/warning/danger semantics, and a pale blue selected surface.
- The token scale keeps the 4px base, small 2/4/8px radii, compact type, and border-first depth.
- The component fixture focuses on support queue, ticket metadata, forms, timeline, status, and tags because those patterns are reusable Garden-like product workflows without copying official examples.
- The package uses only the standard Open Design token schema and no brand-specific extension tokens.
