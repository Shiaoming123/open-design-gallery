# Clarity Design System Source Evidence

## Source Scope

This package distills public official Clarity design documentation and the official open-source Clarity Core package into an Open Design reusable visual language. It is inspiration-only: no official screenshots, icons, source markup, package CSS, or repository source files were copied into the package.

## Official Sources Reviewed

- Clarity home: https://clarity.design/
- Clarity Core repository: https://github.com/vmware-clarity/core
- Clarity Core package: `@cds/core@6.17.0`
- Clarity City package: `@cds/city@1.1.0`
- Clarity Core packaged token and typography CSS: `styles/module.tokens.css`, `styles/module.typography.css`, `styles/theme.dark.css`

## Evidence Notes

- The official GitHub repository identifies Clarity Core as the home for Clarity Core web components. The repository is archived as of February 17, 2026, so this capture treats it as historical public evidence rather than a living implementation target.
- Clarity Core exposes broad token families for space, color ramps, typography, object borders, interaction backgrounds, focus outlines, statuses, and visualization.
- Public package evidence shows a construction/cool-gray neutral stack, a prominent blue ramp for links and information states, green success, ochre/yellow warning, and red danger.
- Typography evidence centers on Clarity City with Avenir Next as fallback, compact UI sizes, moderate heading weights, and monospace fallbacks for code-like contexts.
- Object evidence emphasizes small radii, visible 1px borders, compact 36px interaction targets, selected backgrounds, and low practical shadows.
- Component coverage in the package includes enterprise primitives such as buttons, forms, alerts, badges, navigation, grids, pagination, modals, selection panels, and tree views.

## Distillation Decisions

- The Open Design tokens map Clarity's construction neutrals into the required schema and keep blue as the primary interaction and information accent.
- The fixture focuses on an infrastructure console because that best expresses Clarity's enterprise density, status communication, forms, and data-grid strengths without copying official examples.
- The Open Design type tracking is set to `0em` to satisfy this repository's readability guidance while preserving compact scale and hierarchy.
