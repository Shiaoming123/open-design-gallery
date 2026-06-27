# Design System Inspired by SAP Fiori

> Category: Enterprise Applications
> Enterprise product UI. Morning Horizon lightness, SAP blue highlights, dense data surfaces, and responsive cozy/compact task flows.

## 1. Visual Theme & Atmosphere

SAP Fiori is an enterprise design language for complex work made coherent. It should feel light, structured, and operationally precise. The Morning Horizon direction uses calm reduced backgrounds, white app containers, vibrant but sparing blue foreground emphasis, and clear semantic colors for business state. The interface should support high-volume tasks without feeling old-fashioned or overloaded.

The visual mood is "clean command center." Navigation, filters, object pages, lists, tables, forms, and message states are organized into predictable regions. Color creates importance and association, but neutral surfaces do most of the work. Use rounded corners and soft container boundaries to make enterprise software approachable, while keeping hierarchy and density disciplined.

**Key Characteristics:**
- Subtle light grey app background with white headers and containers
- SAP blue highlight for links, selection, key actions, and information state
- Dark blue-black text and cool blue-grey labels
- Dense but organized tables, forms, and object cards
- Cozy and compact density modes depending on touch vs. mouse/keyboard use
- Accessible keyboard focus, contrast-aware themes, and consistent icon usage
- Minimal decorative imagery; data and tasks are the visual center

## 2. Color Palette & Roles

### Primary
- **SAP Blue** (`#0070f2`): brand/highlight color, links, primary actions, selected states, and information state.
- **Selection Blue Tint** (`#ebf8ff`): selected list rows, active object context, and subtle interactive highlight.
- **Text and Titles** (`#131e29`): primary content and headings.
- **Subtitles and Labels** (`#556b82`): secondary labels, prompt text, and metadata.

### Neutral / Surface
- **App Background** (`#f5f6f7`): stable application shell and page background.
- **Container White** (`#ffffff`): cards, object page sections, popovers, and table bodies.
- **Table Group Background** (`#eff1f2`): quiet grouping and secondary container tier.
- **Header / Container Border** (`#d9d9d9`): panel boundaries.
- **List / Table Border** (`#e5e5e5`): row separators.

### Semantic
- **Negative** (`#aa0808`): errors and destructive states.
- **Critical** (`#d27700`): warnings, pending review, threshold risk.
- **Positive** (`#256f3a`): success and healthy state.
- **Information** (`#0070f2`): informational state and system guidance.

## 3. Typography Rules

### Font Family
- **Preferred**: SAP 72.
- **Fallback**: Arial, Helvetica, sans-serif.
- **Mono**: system monospace for technical IDs, short codes, and logs.

### Hierarchy

| Role | Size | Weight | Line Height | Notes |
|------|------|--------|-------------|-------|
| Object Page Title | 36px | 700 | 1.15 | Primary object identity or analytical title |
| Page Header | 28px | 700 | 1.18 | Page and floorplan heading |
| Section Heading | 22px | 700 | 1.25 | Panel and subsection titles |
| Card Title | 18px | 700 | 1.3 | Object cards and compact panels |
| Body | 16px | 400 | 1.5 | Standard app text |
| Table / Form Text | 14px | 400 | 1.45 | Dense enterprise controls |
| Label / Metadata | 12px | 400 or 700 | 1.35 | Labels, counters, status text |

### Principles
- Prefer one type family across the app for consistency.
- Use bold to establish object identity, selected context, and section titles.
- Keep body and table text compact but readable.
- Avoid editorial display typography; Fiori hierarchy comes from layout, density, and state.

## 4. Component Stylings

### Buttons

**Primary Action**
- Background: SAP Blue (`#0070f2`)
- Text: white
- Radius: soft but restrained, around 8px
- Use for the main task action in a toolbar, footer bar, or form.

**Secondary / Transparent Action**
- Background: white or transparent
- Text: SAP Blue
- Border: light blue-grey or transparent depending on surface
- Use for companion actions that should remain visible but lower emphasis.

**Footer Toolbar Actions**
- Keep action order explicit and task-based.
- Use one emphasized action in a footer or subpage flow.

### Shell / Header
- Use a clean white shell bar over the subtle app background.
- Keep title, search, notifications, and profile actions predictable.
- Header height should support compact desktop work while remaining touch-friendly in cozy density.

### Cards, Tables & Object Pages
- Cards sit on white with light borders and subtle shadow or ring.
- Tables use clear row separators, selected row tint, and visible status labels.
- Object pages should group forms, facts, tables, and related items into predictable sections.
- Use semantic color only when it communicates business meaning.

### Forms & Inputs
- Inputs are compact rectangles with soft radius and clear borders.
- Labels are close to their controls.
- Errors should appear in a message system and near the field when possible.
- Busy, validation, notification, and message patterns should appear in predefined, consistent locations.

## 5. Layout Principles

### Spacing & Grid
- Use a subtle app shell with containers that align to a wide enterprise workspace.
- Support both cozy and compact densities. Cozy uses larger controls for touch; compact reduces control dimensions for mouse and keyboard productivity.
- Use consistent 4px and 8px increments for rhythm.
- Default desktop pages can be wide, but text and forms should remain grouped into scannable sections.

### Composition
- Prefer role-based task pages: overview, list report, object page, create/edit subpage, and flexible column layouts.
- Put global navigation and task identity in predictable shell/header regions.
- Use toolbars for actions near the object or table they affect.
- Let tables and forms be dense, but preserve grouping with panels, headings, and whitespace.
- On narrow screens, collapse side-by-side regions into sequential task blocks.

### Accessibility & Responsiveness
- Design for keyboard, mouse, and touch with equal seriousness.
- Preserve visible focus across all themes.
- Do not use fixed widths or heights that break zooming, resizing, or device adaptation.
- Avoid custom controls unless an existing control cannot solve the task.
- Keep color changes compatible with theme and high-contrast modes.

## 6. Motion & Interaction

- Motion should be quiet, purposeful, and supportive of orientation.
- Use short fades, subtle slides, and state transitions for menus, selections, busy states, and message surfaces.
- Avoid playful bounce, large parallax, or animation that competes with data.
- Busy, error, notification, and focus states should be consistent across the app.

## 7. Voice & Brand

Voice is precise, professional, and task-oriented. SAP Fiori copy should help users finish enterprise work confidently: create, approve, review, reconcile, post, apply, cancel, save, and resolve.

Use object-specific labels and clear message text. Avoid consumer marketing tone inside product surfaces. Keep empty states and errors actionable.

## 8. Anti-patterns

- Do not turn SAP Fiori into a marketing landing page.
- Do not flood enterprise screens with decorative color.
- Do not hard-code custom colors that break theming or high-contrast modes.
- Do not use fixed dimensions that prevent responsive adaptation.
- Do not create custom controls before checking existing Fiori/UI5 patterns.
- Do not hide state in icons without text or accessible labels.
- Do not copy SAP screenshots, icon fonts, UI kit assets, or SAPUI5 source into generated artifacts.

## 9. Agent Prompt Guide

### Quick Color Reference
- App background: `#f5f6f7`
- Surface: `#ffffff`
- Selected tint: `#ebf8ff`
- Text: `#131e29`
- Labels: `#556b82`
- SAP Blue: `#0070f2`
- Border: `#d9d9d9`
- Row separator: `#e5e5e5`

### Example Component Prompts
- "Create a SAP Fiori-style object page with a white shell bar, pale app background, SAP Blue primary action, segmented status cards, and a dense related-items table."
- "Design a Morning Horizon list report with compact filters, selected row tint, semantic status chips, and a message strip."
- "Build an enterprise create/edit subpage with grouped form sections, footer toolbar actions, and visible validation messaging."
