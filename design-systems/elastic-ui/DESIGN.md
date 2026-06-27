# Elastic UI

> Category: Backend & Data
> Analytic product interface language. Light-gray application shells, white panels, Elastic blue action, semantic data color, and dense but humane dashboard composition.

## 1. Visual Theme & Atmosphere

Elastic UI should feel like a well-instrumented product surface: precise, data-aware, and calm under complexity. It is suited to search, observability, security, infrastructure, and analytics workflows where users compare signals, filter records, inspect events, and recover from operational issues.

The canvas is bright and slightly cool. Panels are white, framed by blue-gray borders, with shallow elevation only when a popover, flyout, or temporary overlay needs to float above dense content. The system should feel flexible and composable, but still firm: controls align to a clear grid, headings are direct, and status color is always tied to text or icons.

The core impression is **search-and-operations clarity**: compact product chrome, confident data tables, legible charts, and enough whitespace to keep long sessions from feeling brittle.

## 2. Color Palette & Roles

Use a cool neutral shell with blue for primary action and selection.

- **Page background:** `#f6f8fb` for application shells and dashboard canvases.
- **Surface:** `#ffffff` for panels, cards, tables, forms, and flyouts.
- **Secondary surface:** `#edf2f7` for sidebars, grouped rows, and quiet panel headers.
- **Primary text:** `#1a1c21`.
- **Secondary text:** `#343741`.
- **Muted text:** `#69707d`; **metadata:** `#98a2b3`.
- **Border:** `#d3dae6`; **soft separators:** `#e6ebf2`.
- **Primary blue:** `#0b64dd` for calls to action, links, selected tabs, and focus source.
- **Semantic states:** success `#008a5e`, warning `#f5a700`, danger `#c61e25`.

Use secondary attention colors sparingly. The source system includes broader blue, teal, pink, green, yellow, red, and grayscale scales; in Open Design artifacts, keep those roles semantic rather than decorative.

## 3. Typography Rules

Use Inter when available, with system UI fallbacks. Use Roboto Mono or a system monospace for query snippets, IDs, log samples, and code.

| Role | Size | Weight | Line height | Use |
| --- | ---: | ---: | ---: | --- |
| Display | 56px | 700 | 1.14 | Rare landing or overview moments |
| Page title | 44px | 700 | 1.14 | Major dashboard or workspace headings |
| Section title | 32px | 700 | 1.14 | Page sections, report groups |
| Panel title | 24px | 700 | 1.2 | Cards, flyouts, inspector headings |
| Featured body | 18px | 400-600 | 1.5 | Empty states, summaries |
| Body | 16px | 400 | 1.5 | Default content and table cells |
| Small UI | 14px | 500-700 | 1.5 | Labels, buttons, tabs, filters |
| Caption | 12px | 500-700 | 1.5 | Badges, metadata, timestamps |

Prefer sentence case. Keep display tracking at `0`; do not tighten text for drama. Reserve monospace for technical evidence, not decorative labels.

## 4. Component Stylings

### Navigation and Chrome

Use a compact top bar with a product label, scoped search, and utility actions. Side navigation should sit on the secondary surface and use clear selected-state color, not oversized icons or heavy fills.

### Buttons and Links

Primary buttons use blue fill, white text, 4px radius, and compact height. Secondary buttons use white fill, blue-gray border, and dark text. Links use blue text and should remain readable inside body copy, tables, and callouts.

### Panels and Cards

Panels are the dominant layout primitive. Use a white surface, 1px border, 6px radius, and modest padding. Header rows can include title, metadata, badges, and right-aligned controls. Avoid stacked decorative cards when a table, chart, or structured panel would communicate faster.

### Tables and Data Grids

Tables should support sorting, selection, pagination, row actions, and inline status. Use visible row separators, compact cells, and enough column rhythm for scanning. Keep batch actions near the table and show them only when relevant.

### Forms and Filters

Use grouped filters above data surfaces: search, select, time range, and quick toggles. Form labels are explicit; helper and validation text stays close to the control. Error copy should explain the failing condition and the next step.

### Callouts and Status

Callouts are bordered panels with a clear title and short body. Pair status color with text and an icon or label. Do not rely on color alone to indicate errors, activity, or health.

### Data Visualization

Charts should sit in analytic panels with direct titles, units, and legends. Use color to distinguish series only when labels and layout also carry meaning. Prefer accurate axes and readable hover details over decorative chart styling.

## 5. Layout Principles

Elastic UI favors flexible page composition over a single rigid template.

- Use a 4px base rhythm with 8px, 12px, 16px, 24px, 32px, and 48px as the most common steps.
- Keep primary work surfaces within a wide `1280px` container unless the artifact is a full-console workspace.
- Use grid panels for summaries, then tables or charts for evidence.
- Align filters, tabs, panel headers, and action bars to the same left edge.
- On tablet, preserve filter and table affordances while stacking secondary panels below.
- On phone, collapse navigation and convert wide tables into stacked record rows or drill-in detail views.

## 6. Motion & Interaction

Motion should feel immediate and functional. Use 120ms for hover, focus, and selected-state changes; use 180ms for drawers, popovers, inline validation, and chart affordances. Avoid bouncy motion, parallax, and decorative page reveals.

Keyboard focus must be visible on every link, row action, menu item, input, tab, and button. Interaction states should be token-led and consistent across light and dark variants if the artifact adds a dark mode.

## 7. Voice & Brand

Write for technical operators and analysts. Use specific verbs: "Filter logs", "Inspect host", "Create rule", "Acknowledge alert", "Save query". Keep empty states practical: state what is missing, why it matters, and what the user can do.

## 8. Anti-patterns

- Do not turn every page into a marketing dashboard hero.
- Do not flood panels with blue; one primary action or selected state is enough.
- Do not rely on color alone for status or severity.
- Do not copy official Elastic icons, screenshots, source snippets, or brand assets.
- Do not make dense tables illegible by removing row structure.
- Do not add unstructured gradients or glass effects to analytic surfaces.

## 9. Agent Prompt Guide

Use this system for observability dashboards, security consoles, search products, analytics workspaces, event investigation flows, query builders, and enterprise admin surfaces.

Example prompts:
- "Create an Elastic-style alert investigation workspace with filters, a severity table, and timeline details."
- "Design a search analytics dashboard with white panels, Elastic blue actions, and compact chart cards."
- "Build a log explorer using an EUI-inspired layout with query controls, status callouts, and row-level actions."
