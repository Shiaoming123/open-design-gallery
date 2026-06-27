# Palantir Blueprint

> Category: Backend & Data
> Desktop application UI language. Data-dense enterprise surfaces, compact controls, crisp blue interactions, small radii, and workflows built for analysts and operators.

## 1. Visual Theme & Atmosphere

Blueprint is for complex web applications that behave more like desktop software than marketing pages. It should feel structured, serious, and efficient: many controls, many records, many states, but with enough hierarchy that users can keep their place.

The visual language is compact and pragmatic. Light mode uses a cool off-white application canvas, white content panels, gray-blue borders, and direct blue interactions. Dark mode is a natural extension for control rooms and data operations, but this Open Design package defaults to the light theme for broad readability.

The core impression is **enterprise desktop density**: toolbars, panels, dialogs, menus, editable tables, and inspection surfaces composed into one coherent workspace.

## 2. Color Palette & Roles

Use neutral blue-grays with a clear interactive blue.

- **Page background:** `#f5f8fa`.
- **Surface:** `#ffffff` for cards, tables, menus, dialogs, and forms.
- **Secondary surface:** `#ebf1f5` for sidebars, toolbar bands, grouped rows, and subtle headers.
- **Primary text:** `#1c2127`; **secondary text:** `#383e47`.
- **Muted text:** `#5f6b7a`; **metadata:** `#738091`.
- **Border:** `#c5cbd3`; **soft separator:** `#d8e1e8`.
- **Primary blue:** `#2d72d2` for primary buttons, selected tabs, links, and focus source.
- **Semantic states:** success `#238551`, warning `#c87619`, danger `#c23030`.

Keep color functional. Use semantic fills or left bars only when an item carries a meaningful state. Avoid wide decorative color blocks.

## 3. Typography Rules

Use the system UI stack. Blueprint-style interfaces should look native to the operating system while staying consistent in the browser.

| Role | Size | Weight | Line height | Use |
| --- | ---: | ---: | ---: | --- |
| Display | 48px | 600 | 1.12 | Rare overview screens |
| H1 | 36px | 600 | 1.12 | Top-level workspace headings |
| H2 | 28px | 600 | 1.14 | Major sections |
| H3 | 22px | 600 | 1.18 | Panels and dialogs |
| H4 | 18px | 600 | 1.22 | Subsections |
| Body | 16px | 400 | 1.45 | Forms, table cells, panel copy |
| Small UI | 14px | 400-600 | 1.45 | Labels, buttons, menus |
| Micro | 12px | 500-600 | 1.35 | Tags, timestamps, metadata |

Use concise headings. Running text is secondary to data and controls, so long paragraphs should be broken into scannable rows, notes, or callouts.

## 4. Component Stylings

### App Shell

Compose desktop-like workspaces: left navigation, top toolbar, main table or canvas, right inspector, and contextual drawers. Keep chrome compact and avoid oversized hero areas.

### Buttons and Control Groups

Buttons have small radii, firm borders, and compact heights. Primary buttons use blue fill and white text. Secondary controls are white with visible borders. Group related controls tightly in segmented groups, input groups, and toolbar clusters.

### Tables and Grids

Tables are a first-class Blueprint pattern. Use sticky headers where appropriate, column resizing affordances when needed, row selection, inline tags, and visible numeric alignment. Spreadsheet-like surfaces may use denser row heights than normal cards.

### Menus, Popovers, and Dialogs

Menus and popovers should be crisp, shadowed, and close to their trigger. Dialogs use strong headings, short explanatory copy, and action bars. Destructive actions belong in explicit confirmation flows.

### Forms and Inputs

Inputs are rectangular, bordered, and aligned to labels. Use helper text for constraints and inline validation for mistakes. Complex filters should live in control groups above the result surface, not hidden in decorative drawers.

### Tags, Intent, and Status

Tags communicate state, type, ownership, or count. Pair semantic color with visible text. Intent colors should be restrained and consistent across buttons, callouts, tags, and alerts.

### Code, IDs, and Technical Evidence

Use monospace for identifiers, schema fields, SQL, JSON snippets, and command output. Keep code surfaces bordered and compact.

## 5. Layout Principles

- Build for desktop-first density, then simplify for smaller screens.
- Use a 4px spacing base; common steps are 8, 12, 16, 20, 24, 32, and 48.
- Keep major workspaces within a `1180px` container when page-like, or use full-width panes for true desktop tools.
- Prefer split views and inspector panels over unrelated card grids.
- Align toolbar controls, table columns, and panel headers precisely.
- On tablet, collapse the inspector below the main surface or into a drawer.
- On mobile, replace multi-column desktop workspaces with focused lists and drill-in detail views.

## 6. Motion & Interaction

Interactions should be quick and utilitarian: 100ms for hover and pressed states, 160ms for popovers, dialogs, and validation. Avoid playful motion. A control-heavy UI should feel stable when users move quickly.

Focus indicators must be visible and consistent. Keyboard interaction is essential for menus, inputs, dialogs, table rows, and command-like workflows.

## 7. Voice & Brand

Write like enterprise software for people under pressure: specific, brief, and consequence-aware. Prefer "Apply filter", "Open record", "Export selection", "Resolve conflict", and "Re-run query" over abstract marketing language.

## 8. Anti-patterns

- Do not make Blueprint mobile-first at the expense of desktop workflow density.
- Do not use giant rounded cards or soft consumer-app styling.
- Do not hide core controls behind decorative icon-only buttons without labels or tooltips.
- Do not copy official Blueprint screenshots, icons, source snippets, or assets.
- Do not use status color without labels or structural meaning.
- Do not turn data tables into sparse presentation cards unless the user specifically asks for an editorial artifact.

## 9. Agent Prompt Guide

Use this system for data tools, operational admin, internal dashboards, developer utilities, command centers, case management, audit workflows, and spreadsheet-like enterprise applications.

Example prompts:
- "Create a Blueprint-style data investigation app with a toolbar, table, selected row inspector, and action menu."
- "Design a compact enterprise admin console with segmented filters, intent tags, and a confirmation dialog."
- "Build a desktop-first workflow for reviewing records, editing fields, and exporting selected rows."
