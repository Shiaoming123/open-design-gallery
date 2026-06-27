# Evidence: Fluent 2

Captured for Open Design Worker A on 2026-06-10.

## Official public sources reviewed

- https://fluent2.microsoft.design/
- https://fluent2.microsoft.design/design-tokens
- https://fluent2.microsoft.design/color
- https://fluent2.microsoft.design/typography
- https://fluent2.microsoft.design/layout
- https://fluent2.microsoft.design/elevation
- https://fluent2.microsoft.design/material
- https://fluent2.microsoft.design/motion
- https://fluent2.microsoft.design/components/web/react/

## Distilled observations

- Fluent 2 frames tokens as stored values for color, typography, spacing, and elevation, split into global and alias layers.
- The color system distinguishes neutral, shared, and brand palettes. Neutrals ground surfaces and text; brand color supports identity and selected action; shared colors are used sparingly for reusable recognition.
- Fluent's web type ramp uses Segoe UI with compact productivity sizes: 12px caption, 14px body, 18px body large, 20px subtitle, 28px title, 40px large title, and 68px display.
- Layout guidance uses spacing and hierarchy to show relationships. The global spacing ramp is based on 4px and includes 2px, 6px, and 10px for icon/component alignment details.
- Elevation uses shadow and light to imply distance. Fluent combines sharper key shadows and softer ambient shadows; Windows can use strokes instead of key shadows.
- Material guidance separates solid, acrylic, mica, and smoke. Solid is the common portable default; acrylic/mica are platform-aware inspirations; smoke is for modal dimming.
- Motion should be functional, natural, consistent, and appealing, with quick durations that remain noticeable and interpretable.
- The React/Web component catalog emphasizes reusable building blocks: buttons, cards, dialogs, fields, nav, tabs, lists, popovers, progress, toolbars, and tooltips.

## Open Design translation

- `--bg`, `--surface`, and `--surface-warm` model neutral app canvas, primary pane, and secondary pane.
- `--accent` maps to Fluent web blue for primary actions, focus, links, and selected navigation.
- The typography stack uses Segoe UI Variable where available, with Segoe UI and system fallbacks.
- The component fixture uses original markup and no official screenshots, logos, icons, source code, fonts, or assets.

## License and attribution note

This package is an original design-language distillation from public official documentation. It is inspiration only and does not vendor Microsoft assets or claim affiliation.
