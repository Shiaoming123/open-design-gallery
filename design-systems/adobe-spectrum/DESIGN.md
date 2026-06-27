# Adobe Spectrum

> Category: Design & Creative
> Product design system. Neutral gray canvases, precise blue action, compact components, and token-led consistency.

## 1. Visual Theme & Atmosphere

Adobe Spectrum is calm, precise, and application-first. It should feel like a durable creative-work surface: quiet gray hierarchy, exact controls, clear affordances, and very little decorative noise. The system is not a marketing poster; it is a product language for dense tools, panels, editors, media browsers, and account workflows.

The strongest visual move is restraint. Most surfaces sit in a neutral gray stack. Blue marks the current action, selected state, focus, or link. Borders are subtle but visible. Radius is small. Typography is clean and utilitarian. Components should read as carefully engineered, not playful.

## 2. Color Palette & Roles

- **Background:** `#f8f8f8` - neutral application canvas.
- **Surface:** `#ffffff` - cards, menus, forms, and raised panels.
- **Warm surface:** `#f3f3f3` - secondary panels and quiet toolbar bands.
- **Foreground:** `#222222` - primary text and icons.
- **Secondary foreground:** `#4b4b4b` - headings inside dense panels and secondary labels.
- **Muted:** `#6e6e6e` - descriptions, helper text, timestamps.
- **Metadata:** `#8a8a8a` - tertiary labels and low-emphasis text.
- **Border:** `#d6d6d6` - card edges and control outlines.
- **Soft border:** `#eaeaea` - row separators and quiet dividers.
- **Accent:** `#1473e6` - primary action, active control, link, and focus source.
- **Accent hover:** `#0d66d0`; **accent active:** `#095aba`.
- **Semantic:** success `#12805c`, warning `#d97706`, danger `#d31510`.

Use accent blue as a signal, not as decoration. The page should still read as Spectrum if blue is removed from everything except one CTA and focus states.

## 3. Typography Rules

- **Display and body:** `"Adobe Clean", "Source Sans 3", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`.
- **Mono:** `"Source Code Pro", ui-monospace, SFMono-Regular, Menlo, Consolas, monospace`.
- **Scale:** 12, 14, 16, 18, 22, 28, 36, 48px.
- **Body line-height:** 1.5.
- **Heading line-height:** 1.18.
- **Display tracking:** 0em. Do not tighten letter spacing.
- **Weights:** 400 for body, 600 for headings and button labels.

Typography should be legible under product density. Avoid oversized hero type unless the artifact is explicitly a landing page.

## 4. Component Stylings

- **Primary buttons:** blue fill, white label, 4px radius, compact vertical padding, clear hover and active states.
- **Secondary buttons:** white or transparent fill, gray border, dark label, blue border or text on hover.
- **Cards and panels:** white or warm gray, 1px border, 6px radius, no heavy shadow. Use panel labels and sections instead of decorative card stacks.
- **Inputs:** white fill, gray border, 4px radius, blue focus ring. Helper text stays muted.
- **Tabs and segmented controls:** active state uses blue text or a blue bottom edge; inactive states remain neutral.
- **Status badges:** small, precise, and text-led. Use semantic colors only for actual state.

## 5. Layout Principles

- Use an 8px rhythm with 4px available for tight control gaps.
- Prefer dense but organized product layouts: sidebars, toolbars, inspector panels, tables, and split views.
- Desktop container max: 1200px for documentation-like pages; product surfaces can span wider.
- Section rhythm: 72px desktop, 48px tablet, 32px phone.
- Use dividers when they clarify information architecture. Do not use oversized spacing to hide weak hierarchy.
- On mobile, collapse multi-panel tools into a primary stack with secondary panels below or behind drawers.

## 6. Depth & Elevation

Depth is minimal. Most separation comes from surface contrast and borders. Use a ring for focused or selected panels. Reserve raised shadows for overlays, menus, and floating sheets. Avoid glass, glow, and dramatic layered shadows.

## 7. Motion & Interaction

Motion is short and purposeful: 130ms for hover/focus, 180ms for state changes. Use a standard ease-out curve. Interactions should feel immediate and stable. Avoid bouncy transitions, parallax, or ornamental entrance choreography.

## 8. Do's and Don'ts

- Do use neutral hierarchy before reaching for color.
- Do keep controls compact and aligned.
- Do use blue for primary action, active state, links, and focus.
- Do keep focus visible on every interactive element.
- Do not flood backgrounds with blue.
- Do not use large rounded cards or bubbly controls.
- Do not use official Adobe screenshots, icons, or assets in generated artifacts.
- Do not invent decorative gradients or expressive illustration unless the user asks for a marketing concept.

## 9. Agent Prompt Guide

Use this system for creative tooling, admin consoles, asset management, review workflows, documentation pages, and professional product surfaces. Start with a neutral canvas, compose clear panel hierarchy, use small-radius controls, and let one blue action carry the screen.
