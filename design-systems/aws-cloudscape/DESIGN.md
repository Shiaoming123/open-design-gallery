# Design System Inspired by AWS Cloudscape

> Category: Backend & Data
> Cloud operations interface language. Dense, accessible, white-and-gray surfaces with blue action focus, status clarity, and 4px-grid discipline.

## 1. Visual Theme & Atmosphere

AWS Cloudscape is a system for serious cloud applications: consoles, service dashboards, resource inventories, configuration flows, and operational review surfaces. The visual language is quiet, structured, and practical. It avoids marketing drama in favor of task clarity, scale, and trust.

The dominant canvas is light neutral gray with white containers. Color is used as a signpost rather than decoration: blue points to actions, links, selected states, and interactive focus; green, red, and amber carry resource status. Interfaces should feel built for long sessions where users compare values, scan tables, change configuration, and recover from errors.

The core impression is **cloud-console precision**: compact but not cramped, explicit hierarchy, restrained radius, and every panel serving a clear operational job.

## 2. Color Palette & Roles

Use a white container system over a cool gray page background.

- **Page background**: `#f2f3f3` for the console shell.
- **Container surface**: `#ffffff` for cards, tables, drawers, and form panels.
- **Secondary surface**: `#f9fafa` for nested rows and grouped areas.
- **Primary text**: `#16191f`.
- **Secondary text**: `#414d5c`.
- **Muted metadata**: `#5f6b7a`.
- **Border**: `#d5dbdb`; use `#eaeded` for quiet row separators.
- **Action blue**: `#0972d3`.
- **Hover / active blue**: `#033160` and `#001a37`.
- **Success**: `#037f0c`.
- **Warning**: `#b35c00`.
- **Danger**: `#d91515`.

Color must not be the only carrier of meaning. Pair status color with text, icons, labels, or structural position.

## 3. Typography Rules

Use the Amazon Ember family when available, with practical system fallbacks. Typography should be readable, direct, and optimized for scan-heavy administrative work.

| Role | Size | Weight | Line height | Use |
| --- | ---: | ---: | ---: | --- |
| Page title | 36px | 700 | 1.18 | Top-level console views |
| Section title | 28px | 700 | 1.18 | Resource sections and page groups |
| Card title | 22px | 700 | 1.18 | Container headings |
| Body | 16px | 400 | 1.5 | Default copy and table text |
| Small UI | 14px | 400-700 | 1.5 | Labels, controls, metadata |
| Caption | 12px | 700 | 1.5 | Status labels and compact counters |

Use sentence case. Use monospace only for identifiers, ARNs, regions, policy snippets, code, and metrics where alignment matters.

## 4. Component Stylings

### Buttons

Primary buttons use blue fill, white text, compact padding, and a 4px radius. Secondary buttons are white with a clear border. Destructive actions should remain secondary until the user enters a confirmation context.

### Cards and Containers

Containers are white with fine gray outlines. Use header rows with compact metadata and optional action slots. Elevation is subtle and should only appear for overlays, drawers, popovers, or temporarily lifted panels.

### Tables and Resource Lists

Tables are a first-class surface. Use high information density, visible row separators, sticky headers when useful, status chips, and clear selection affordances. Avoid decorative zebra striping unless it materially improves scanning.

### Forms and Configuration Panels

Forms should use clear labels, helper text, and validation that appears near the failing control. Group complex configuration into sections with summary headers. For destructive or irreversible settings, place warning copy near the action.

### Status Chips

Status chips should combine color, icon/text, and a restrained border. Use success, warning, danger, and neutral states consistently. Do not flood an entire card with status color.

### Cloudscape-Specific Recipes

**Resource Inventory**
- Search/filter controls above a sortable table.
- Resource name, type, region, account, status, and last updated columns.
- Batch action bar appears only after selection.

**Service Health Panel**
- Summary metrics at the top.
- Status chips with explanatory text.
- Links to logs, events, or affected resources.

**Configuration Review**
- Two-column key/value layout.
- Inline warnings for risky settings.
- Footer actions fixed to the current review context.

**Split Console Layout**
- Left navigation or service rail.
- Main content column with sectioned cards.
- Optional side drawer for details without losing the table context.

## 5. Layout Principles

Cloudscape uses a 4px-based spacing model. The Open Design token scale maps that rhythm into common tiers: 4, 8, 12, 16, 20, 24, 32, and 48.

- Keep page content inside a wide operational container.
- Prefer dense grids and tables over oversized presentation cards.
- Align form controls, table columns, and panel actions precisely.
- Use section spacing to show hierarchy, not decorative dividers everywhere.
- On tablet, preserve primary tables and move secondary details to stacked panels.
- On mobile, collapse navigation into a drawer and turn wide tables into stacked resource rows or drill-in lists.

## 6. Motion & Interaction

Motion should be barely noticeable. Use 120ms to 180ms transitions for hover, focus, drawer reveal, inline validation, and status feedback. Avoid bouncing, oversized transforms, and scroll-jacking. Respect reduced-motion settings by removing nonessential movement.

Keyboard focus must be obvious. Every row action, control, tab, and menu item needs a visible blue focus ring.

## 7. Voice & Brand

Write like an operations product: specific, action-oriented, and calm. Prefer "Create alarm", "Review policy", and "Retry deployment" over promotional copy. Explain consequences and recovery paths clearly.

## 8. Anti-patterns

- Do not turn Cloudscape into a dark cyber dashboard by default.
- Do not use gradients or brand illustration as primary UI structure.
- Do not rely on color alone for status.
- Do not make giant hero sections for operational tools.
- Do not hide critical actions behind decorative icon-only controls without labels or tooltips.
- Do not create bespoke spacing outside the 4px rhythm.

## 9. Agent Prompt Guide

Use this system for AWS-like consoles, cloud admin tools, resource dashboards, data-plane configuration, incident response workflows, and enterprise infrastructure management.

Example prompts:
- "Create a Cloudscape-style resource inventory with filters, status chips, and table actions."
- "Design an AWS-console-like configuration review page with white cards, compact sections, and blue primary actions."
- "Build an operational health dashboard using neutral surfaces, resource metrics, and restrained semantic status colors."
