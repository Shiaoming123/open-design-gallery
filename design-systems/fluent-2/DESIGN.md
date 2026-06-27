# Design System Inspired by Fluent 2

> Category: Design & Creative
> Microsoft productivity UI with neutral surfaces, Segoe UI typography, 4px spacing, rounded controls, material-aware layers, and natural motion.

## 1. Visual Theme & Atmosphere

Fluent 2 is a calm, platform-aware productivity language. It should feel familiar across Microsoft-style work tools: document hubs, dashboards, copilots, settings, side panels, and collaboration surfaces. The system relies on neutral surfaces, crisp text, rounded controls, subtle shadows, and clear focus states rather than decorative styling.

The emotional tone is useful, approachable, and quietly polished. It supports complex work without making screens feel heavy. Interface objects should appear close to the surface by default, then lift with shadow, material, or overlays only when hierarchy or interaction requires it.

## 2. Color Palette & Roles

- Neutral palette: use white, gray, and near-black to ground most of the interface.
- Brand palette: use Microsoft blue for primary actions, links, selected navigation, and focus.
- Shared and semantic colors: use sparingly for status, avatars, badges, alerts, and reusable recognition moments.
- Surface model: `--bg` is the app canvas, `--surface` is the primary card or pane, and `--surface-warm` is a quiet secondary layer.
- Text hierarchy: `--fg` is standard text, `--fg-2` supports secondary labels, `--muted` is for lower-emphasis copy, and `--meta` is for timestamps and small support text.

## 3. Typography Rules

Use Segoe UI Variable where available, with Segoe UI and system sans fallbacks. Fluent's web type ramp is compact and legible: 14px body text, 18px large body, 20px subtitle, 28px title, 40px large title, and 68px display. Weights should stay mostly regular and semibold.

Use sentence case. Avoid all-caps attention grabs. Align text to the left for English interfaces, with centered text reserved for short empty states or focused moments. Text color can emphasize or de-emphasize hierarchy, but contrast must stay accessible.

## 4. Component Stylings

Buttons are rounded rectangles with clear filled, outline, subtle, and transparent variants. Filled buttons use blue only for primary actions. Secondary buttons stay neutral and should remain easy to scan in toolbars.

Cards are containers for one concept or object. They usually use white fill, small radius, a border, and optional low shadow. Popovers, menus, dialogs, and tooltips should feel elevated but not theatrical.

Inputs, comboboxes, checkboxes, switches, and sliders should read as practical controls. Pair labels with fields, keep helper text nearby, and show error or validation states through both color and words.

Navigation can be a left rail, tree, tab list, breadcrumb, or toolbar depending on the product. Current location should be obvious through blue, weight, or a selected background.

## 5. Layout Principles

Fluent uses spacing and hierarchy to create relationships. The base spacing system is a 4px ramp, with 2px, 6px, and 10px available for icon alignment and component details. Use spacing to group related information before adding lines or extra containers.

The grid is made from columns, gutters, and margins. A 12-column model is flexible for desktop, while mobile and narrow panes should stack panels and preserve touch targets. Empty space should guide focus without making enterprise screens feel sparse.

## 6. Depth, Material & Elevation

Fluent depth comes from shadow, light, and material. Use low elevation for cards and raised buttons, medium elevation for popovers and command surfaces, and higher elevation for dialogs or blocking overlays.

Solid material is the default. Acrylic and mica are platform-specific inspirations for translucent or system-tinted surfaces; in portable web artifacts, translate them into subtle translucency, neutral tint, and clear contrast. Smoke is for modal backdrops and should dim the background without becoming decoration.

## 7. Do's and Don'ts

Do:
- Use neutral surfaces as the foundation.
- Build from global and alias-style token thinking.
- Keep labels in sentence case.
- Use spacing to express relationships.
- Use motion only to clarify change, continuity, or completion.
- Keep focus states visible and keyboard friendly.

Don't:
- Fill screens with brand blue.
- Use shadow when a border or spacing relationship is enough.
- Center long text blocks.
- Make decorative glass effects that reduce readability.
- Treat platform-specific materials as mandatory on every surface.
- Hide hierarchy behind overly subtle contrast.

## 8. Responsive Behavior

Desktop experiences can use persistent navigation, command bars, content panes, and detail panels. Tablet layouts should reduce secondary panes or convert them to drawers. Mobile layouts should stack content, preserve 44px touch targets for iOS and web, and keep the primary action easy to find.

Responsive spacing should adapt to the size and density of the experience. Do not apply the same spacer mechanically if it breaks alignment or weakens a component pattern.

## 9. Agent Prompt Guide

When generating with this system, paste `tokens.css` first, then compose a practical Microsoft-style productivity surface. Use Segoe UI, neutral panes, small rounded controls, low elevation, clear labels, and blue only for important interactive state. Prefer real app components: cards, nav, command bars, lists, tabs, fields, message bars, dialogs, and dashboards.
