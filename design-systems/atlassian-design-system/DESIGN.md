# Design System Inspired by Atlassian Design System

> Category: Productivity & SaaS
> Enterprise collaboration UI with token-led spacing, crisp hierarchy, blue actions, and layered app surfaces.

## 1. Visual Theme & Atmosphere

This system is an app-first enterprise language: calm, scannable, and practical before it is expressive. The default canvas is a very light neutral field, while white cards, panels, and tables carry the work. Color is mostly semantic and functional, with Atlassian blue reserved for primary actions, active navigation, links, and focused controls.

The mood should feel like a high-trust collaboration product: organized backlogs, knowledge bases, planning boards, admin settings, and cross-team dashboards. It has enough softness to feel friendly, but the visual structure is disciplined and dense enough for repeated daily use.

## 2. Color Palette & Roles

- Page canvas: use `--bg` for the app background and long work surfaces.
- Primary surface: use `--surface` for cards, dialogs, table bodies, and navigation panels.
- Grouped wells: use `--surface-warm` for board columns, grouped filters, and quiet status areas.
- Text: `--fg` is the main ink, `--fg-2` is secondary copy, `--muted` supports helper text, and `--meta` is for timestamps or tertiary labels.
- Borders: prefer `--border-soft` for row separation and `--border` for component outlines.
- Accent: `--accent` is the action blue. Keep it scarce and meaningful.
- Semantics: success, warning, and danger are clear but not decorative; they should support status and decision-making, not make the screen noisy.

## 3. Typography Rules

Use a product typography stack centered on Atlassian Sans. Display headings can use Charlie Display when available, but most screens should rely on Atlassian Sans for continuity between marketing, product, and documentation surfaces.

Hierarchy is compact and purposeful. Body copy sits at 16px with generous line height for readability. Small labels are never smaller than 12px. Headings should be semibold, direct, and easy to scan in information-dense layouts. Avoid all-caps labels unless the label is extremely short and paired with enough spacing.

Recommended hierarchy:

| Role | Token | Use |
| --- | --- | --- |
| Display | `--text-4xl` | Product-wide announcements and sparse hero moments |
| Page title | `--text-3xl` | Main workspace titles |
| Section title | `--text-2xl` | Major dashboard or settings groups |
| Card title | `--text-xl` | Cards, panels, and modal headings |
| Body | `--text-base` | Primary reading and form text |
| Caption | `--text-sm` / `--text-xs` | Metadata, chips, and fine print |

## 4. Component Stylings

Buttons use compact height, semibold labels, and a controlled radius. Primary buttons are blue filled with white text. Secondary buttons are white with a border or neutral fill. Icon buttons should show hover and pressed states through subtle neutral backgrounds.

Cards are usually flat white surfaces with a border, not heavy shadow. Use raised elevation only for draggable cards, popovers, floating menus, and temporary surfaces that need to sit above the work area.

Inputs are quiet: white fill, neutral border, blue focus ring, and helper text underneath. Error states should combine danger color with clear text instead of relying only on red borders.

Navigation favors a left rail or top bar with active items marked by blue text, a soft blue-tinted background, or a sturdy left indicator. Keep nav labels short and align icons consistently.

## 5. Layout Principles

Atlassian's spacing foundation is built around an 8px base unit with smaller supporting steps for compact UI. Use the token scale for predictable relationships: 4px and 8px for local spacing, 12px to 24px inside components and cards, and 32px to 48px between major groups.

Layouts should be dense but not cramped. Use whitespace to show relationships before adding dividers. Work-management screens can use multi-column grids, tables, and board lanes; documentation and setup screens should keep readable line lengths and strong section breaks.

## 6. Depth & Elevation

Use four practical layers:

| Level | Treatment | Use |
| --- | --- | --- |
| Sunken | `--surface-warm` | Board columns, grouped wells, empty states |
| Default | `--surface` plus optional border | Pages, cards, tables |
| Raised | `--elev-raised` | Draggable cards, highlighted panels |
| Overlay | Raised plus stronger focus management | Menus, dialogs, popovers |

Raised surfaces should be intentional. If a border or spacing relationship communicates the grouping, avoid shadow.

## 7. Do's and Don'ts

Do:
- Build with tokens instead of raw hex values in components.
- Use blue for action, focus, and active navigation.
- Keep dense screens readable with clear grouping and restrained dividers.
- Pair semantic color with text labels or icons.
- Keep components rectangular, aligned, and predictable.

Don't:
- Turn every panel into a shadowed card.
- Use bright accent color as decoration.
- Center-align long product text.
- Use tiny labels below 12px.
- Mix unrelated typefaces or playful display treatments into product UI.

## 8. Responsive Behavior

On desktop, prefer a stable workspace with side navigation, a constrained content column, and optional right-side details. On tablets, collapse secondary panels under the main flow or into drawers. On phones, stack controls vertically, keep primary actions visible, and turn dense tables into list rows with the most important fields first.

Touch targets should remain comfortable even when typography stays compact. Do not preserve desktop density if it makes tap areas ambiguous.

## 9. Agent Prompt Guide

When generating with this system, start by pasting `tokens.css` into the first style block. Use the canvas/card/well surface model before inventing new colors. Build practical product UI: boards, tables, issue cards, settings panels, project navigation, forms, and status summaries. Keep copy concise, action-oriented, and sentence case.
