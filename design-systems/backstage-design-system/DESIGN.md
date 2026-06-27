# Design System Inspired by Backstage

> Category: Developer Tools
> Developer portal UI language for software catalogs, templates, plugins, and platform engineering workflows.

## 1. Visual Theme & Atmosphere

Backstage combines two visual instincts: the open-source product's practical Material UI foundation and Spotify for Backstage's dark, high-energy developer-portal marketing language. The reusable Open Design interpretation should feel like a powerful internal developer portal: dark stage, aqua highlights, modular cards, dense catalog surfaces, and trustworthy theme-aware components.

The system is not a generic black SaaS page. It should show real platform content: services, templates, ownership, docs, quality checks, plugins, and onboarding steps. Visual energy comes from sharp contrast, aqua/green accent moments, and a strong information architecture rather than heavy decoration.

Key traits:
- Near-black canvas with aqua highlight for discovery and selected state.
- Material UI-informed building blocks: container, grid, paper/card, palette-aware typography.
- Developer portal density: catalog rows, plugin cards, ownership metadata, code snippets.
- Spotify-flavored product polish: rounded modules, large display type, crisp dark surfaces.
- Theme-aware behavior: components should read from tokens and adapt cleanly.

## 2. Color Palette & Roles

Use `#0c0c0c` for the primary stage and `#121212` for card surfaces. Aqua `#9bf0e1` is the core Backstage highlight for hero emphasis, active filters, links, and selected states. Use Spotify green `#1ad760` as success or completion, not as the primary brand accent.

The dark palette should maintain a layered surface system: black background, dark cards, warmer raised panels, and soft white borders. Use purple or yellow only sparingly through semantic states or illustrations; the shared Open Design token set keeps the reusable accent centered on aqua.

## 3. Typography Rules

Use `"SpotifyMix"` when available, falling back to Inter, Helvetica Neue, Arial, and sans-serif. Pair large, compressed display headings with practical body text for dashboards and docs.

Hierarchy:
- Display: 76px, 700-800, tight leading.
- H1: 56px, 700.
- Section title: 40px, 700.
- Card heading: 28px, 650-700.
- Body: 16px, 400-500.
- Metadata and labels: 12-14px, 600, short uppercase labels allowed for filters and status.
- Code and entity refs: monospace, 13-14px, compact line-height.

## 4. Component Stylings

Primary buttons and selected tabs use aqua fill with black text. Secondary buttons use dark fills, soft borders, and white or muted text. Success states use green; warnings use warm yellow; errors use red.

Cards are dark, rounded, and bordered. Catalog cards should show entity kind, owner, lifecycle, score, and last activity. Plugin cards should pair an icon placeholder or initials with category, capability, and install state. Avoid asset-dependent iconography; use simple generated marks.

Tables and lists should feel like developer tools: compact rows, monospace identifiers, filters, chips, and clear ownership metadata. Code panels use `--surface-warm`, bordered containers, and aqua syntax accents.

## 5. Layout Principles

Backstage pages should reveal the portal structure immediately. Use a left navigation rail or top product navigation, then a main work area with filters, grid/list toggles, and content cards. The default content width is 1240px.

Use grids for plugin and template discovery, tables for catalogs, and split panels for detail pages. On mobile, collapse navigation first and keep catalog metadata readable through stacked rows.

## 6. Depth & Elevation

Depth is strong enough to separate panels on a dark canvas but should not create glossy glassmorphism. Use border rings for ordinary cards and deep shadows only for modals, selected feature panels, or marketing-style callouts.

## 7. Do's and Don'ts

Do:
- Treat Backstage as a developer portal, not a generic landing page.
- Use theme-aware cards, grids, typography, and palette roles.
- Show software catalog, templates, plugins, docs, and quality signals.
- Use aqua for navigation, discovery, and selected state.
- Keep copy concise and technical where the UI is operational.

Don't:
- Copy Backstage or Spotify logos, screenshots, icons, or source assets.
- Use large dark gradients as a substitute for product structure.
- Make the portal feel empty or marketing-only.
- Hard-code colors in components when tokens can express the role.
- Overuse the green success color as the primary accent.

## 8. Accessibility Notes

Dark UI needs clear contrast. Use high-contrast white text for primary copy, keep muted text large enough to read, and provide visible focus rings in aqua. Chips and status marks should include text labels. Data tables need row headers or clear entity titles.

## 9. Best-Fit Use Cases

Use this system for developer portals, internal platform dashboards, software catalogs, plugin marketplaces, service ownership pages, scorecards, onboarding flows, and template launchers.
