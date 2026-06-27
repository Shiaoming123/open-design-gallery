# Design System Inspired by ServiceNow Horizon

> Category: Productivity & SaaS
> Enterprise workflow design language for clear, configurable, AI-aware work experiences.

## 1. Visual Theme & Atmosphere

ServiceNow Horizon reads as calm enterprise orchestration: bright surfaces, restrained green accents, confident product typography, and modular layouts that can hold dense workflow information without feeling heavy. The public Horizon site frames the system as the source of truth for ServiceNow experience design and emphasizes better enterprise experiences, AI guidelines, app frameworks, and platform-wide consistency.

The atmosphere should be optimistic and operational rather than decorative. Use white and near-white surfaces, soft blue-gray borders, and green as a trusted action color. The design should feel like a configurable workspace where every panel has a job: guide a workflow, compare options, or surface the next best action.

Key traits:
- Clean enterprise canvas with crisp cards and low-contrast structural dividers.
- Green accent for progress, confirmation, primary actions, and wayfinding.
- Rounded but disciplined geometry: soft cards, pill status, readable tables.
- AI modules are helpful and contextual, not sci-fi or overly luminous.
- Platform language is modular: workspace, native mobile, service portal, and core UI patterns can sit side by side.

## 2. Color Palette & Roles

Use `#f6f8fb` as the page canvas and `#ffffff` for working surfaces. Keep content grounded with `#0b1620` primary text and `#5e6b78` secondary copy. The green accent `#2f7d5f` carries trustworthy action, success, and selected state semantics.

The palette should avoid loud gradients and high-saturation novelty. Horizon-inspired UI should reserve color for decision points: active tabs, selected framework cards, AI recommendation chips, and confirmation states. Borders do much of the structure work, so `#dce3ea` and `#edf1f5` are as important as the accent.

## 3. Typography Rules

Use a modern enterprise sans stack, preferring `"ServiceNow Sans"` when available and falling back to Inter, Segoe UI, Roboto, and Arial. Headings are confident but not oversized. Body copy should be readable for long implementation guidance and administrator workflows.

Hierarchy:
- Display: 64px, 700, tight leading for first-screen statements.
- H1: 48px, 700, compact but approachable.
- Section title: 34px, 650-700.
- Card title: 24px, 650.
- Body: 16px, 400-500, 1.56 line-height.
- Metadata: 12-14px, 500-600, often uppercase only for labels or status.

Avoid condensed fonts, novelty display faces, and negative letter spacing beyond subtle display tightening.

## 4. Component Stylings

Buttons are medium radius and practical. Primary actions use green fill with white text; secondary actions use white fill, green text, and a soft border. Destructive actions should never reuse the accent.

Cards are white, bordered, and lightly elevated only when they need to float above the main canvas. Prefer clear headings, short explanatory copy, and structured affordances such as status pills, metric rows, tabs, or checklist items. Use soft green-tinted panels for AI assistance and next-step guidance.

Navigation should be stable and quiet: a white top bar, active indicator in green, and dense menu groups. Framework or resource tiles should show title, short purpose, metadata, and one explicit action.

## 5. Layout Principles

Build on a 4px/8px spacing system with generous section rhythm. The default content width is 1180px with 32px desktop gutters. Enterprise pages should be scan-friendly: intro band, task rail, card grid, and detail panel are more appropriate than marketing-heavy layouts.

Good Horizon-inspired layouts make complexity approachable. Use grids to compare frameworks, side panels for implementation guidance, and stacked content for mobile. Keep the visual center on the work to be done.

## 6. Depth & Elevation

Depth is mostly created by borders and tonal contrast. Use `--elev-ring` for ordinary cards and `--elev-raised` for popovers, AI recommendation panels, or selected workspace modules. Shadows should be soft and cool, never dramatic.

## 7. Do's and Don'ts

Do:
- Make enterprise work feel guided, modular, and calm.
- Use green sparingly for action, success, and selected states.
- Preserve accessibility with clear contrast and visible focus rings.
- Give AI experiences plain-language labels and explicit user control.
- Use cards to organize real tasks, resources, and framework decisions.

Don't:
- Copy ServiceNow screenshots, illustrations, or proprietary component source.
- Turn the system into a generic green marketing page.
- Overuse gradients, glass effects, or neon AI motifs.
- Hide dense workflow information behind oversized hero compositions.
- Use color alone to indicate state.

## 8. Accessibility Notes

Interactive controls need visible focus rings and text labels. Status pills should include text, not only color. Use high-contrast text on green fills and keep muted text above WCAG contrast thresholds on the light canvas.

## 9. Best-Fit Use Cases

Use this system for enterprise dashboards, workflow builders, administrative configuration, internal AI-assist tools, resource hubs, and product documentation experiences where clarity and trust matter more than spectacle.
