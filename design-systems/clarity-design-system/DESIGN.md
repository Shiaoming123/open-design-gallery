# Clarity Design System

> Category: Enterprise
> Enterprise application system. Cool construction neutrals, blue operational emphasis, compact typography, explicit states, and web-component-like structure.

## 1. Visual Theme & Atmosphere

Clarity should feel like a dependable enterprise control surface: calm, structural, compact, and technically precise. It is built for dashboards, administration, infrastructure workflows, settings, security views, data grids, and forms where status and scannability matter more than flourish.

The strongest impression is cool neutrality with deliberate blue interaction. Surfaces are white or near-white against a faint blue-gray app canvas. Text is dark construction gray. Borders are visible enough to define data and forms. Components should look modular, reusable, and accessible, with clear labels, validation, and state feedback.

## 2. Color Palette & Roles

- **Background:** `hsl(198, 33%, 99%)` - very light blue-gray application canvas.
- **Surface:** `#ffffff` - primary panels, forms, cards, and overlays.
- **Warm surface:** `hsl(198, 36%, 96%)` - shaded sidebars, selected containers, and quiet grouped regions.
- **Foreground:** `hsl(198, 30%, 15%)` - primary content.
- **Secondary foreground:** `hsl(198, 19%, 28%)` - dense headings and strong labels.
- **Muted:** `hsl(198, 14%, 36%)` - helper text and secondary descriptions.
- **Metadata:** `hsl(198, 10%, 46%)` - timestamps, metadata, inactive affordances.
- **Border:** `hsl(198, 14%, 82%)` - controls and container edges.
- **Soft border:** `hsl(198, 20%, 91%)` - internal dividers and row lines.
- **Accent:** `hsl(198, 100%, 34%)` - primary action, selected state, links, and info status.
- **Semantic:** success `hsl(93, 80%, 28%)`, warning `hsl(40, 100%, 42%)`, danger `hsl(9, 100%, 44%)`.

Use blue as an operational state marker. Keep most of the screen neutral and let status colors appear only when they explain system state.

## 3. Typography Rules

- **Display and body:** `"Clarity City", "Avenir Next", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`.
- **Mono:** `ui-monospace, Consolas, Menlo, Monaco, monospace`.
- **Scale:** 10, 12, 13, 14, 16, 20, 24, 32, 40px.
- **Body line-height:** 1.43.
- **Heading line-height:** 1.14.
- **Display tracking:** 0em in Open Design output. Preserve readability instead of reproducing tight source letter spacing.
- **Weights:** 400 for body, 500 or 600 for headings, labels, and buttons.

Favor compact, information-dense typography. Headings should clarify page structure, not create a marketing hero unless explicitly requested.

## 4. Component Stylings

- **Buttons:** compact 36px minimum target, 4px radius, blue primary fill, neutral secondary outline, clear hover and active states.
- **Cards and panels:** white with 1px construction border, 4-6px radius, and minimal shadow. Use section headers and dividers for organization.
- **Forms:** label-first layout, visible required and helper states, gray borders, blue focus ring, and semantic validation messages.
- **Data grids:** sticky-feeling headers, strong column labels, soft row separators, status badges, and dense row rhythm.
- **Alerts and badges:** semantic but restrained; status color should be paired with text and neutral structure.
- **Navigation:** left rails or top bars with selected state backgrounds; avoid decorative oversized tabs.

## 5. Layout Principles

- Use a compact 4px base rhythm with 8, 12, 16, 24, 32, and 48px steps for most product layouts.
- Structure screens as app shells: masthead, side navigation, content toolbar, primary panel, and secondary inspector.
- Desktop content can span to 1200px for documentation-style pages; operational consoles may use full width with gutters.
- Section rhythm: 72px desktop, 48px tablet, 32px phone.
- Align forms and tables rigorously. Dense does not mean cramped: reserve enough inline space for labels, errors, and actions.

## 6. Depth & Elevation

Depth is practical, not expressive. Most separation comes from borders and tinted surfaces. Use a low ring for selected panels and a small raised shadow only for overlays, popovers, and modals. Avoid glass effects, glow, large soft cards, and immersive decorative backgrounds.

## 7. Motion & Interaction

Interactions should feel immediate and stable. Use 120ms for hover and focus feedback and 180ms for larger state changes. Keep transitions linear enough for enterprise tooling: no bounce, no theatrical entrance choreography, and no motion that makes data shift unpredictably.

## 8. Do's and Don'ts

- Do build clear operational hierarchy with borders, labels, and status.
- Do keep controls compact and accessible.
- Do use blue for active, primary, link, focus, and information states.
- Do pair semantic color with readable text.
- Do not use official Clarity screenshots, icons, source markup, or package CSS in generated artifacts.
- Do not turn the system into a blue marketing page.
- Do not soften the interface with large pill cards or playful gradients.

## 9. Agent Prompt Guide

Use this system for infrastructure consoles, enterprise SaaS, admin workflows, configuration UIs, data tables, monitoring views, and technical documentation. Begin with a cool neutral app shell, add compact controls, make status explicit, and keep every visual decision useful for task completion.
