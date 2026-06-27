# Design System Inspired by Pinterest Gestalt

> Category: Design & Creative
> Pinterest's open-source product component language: tokenized, accessible, rounded, and interaction-dense.

## 1. Visual Theme & Atmosphere

Gestalt should feel like a mature product UI system rather than a consumer inspiration feed. It is crisp, accessible, and component-first: white surfaces, neutral text, systematic spacing, clear controls, compact documentation patterns, and Pinterest red used as a high-confidence brand/action signal.

This capture is intentionally separate from the broader Pinterest visual brand package. Use it when building product screens, docs, settings panels, moderation tools, shopping surfaces, or component-heavy workflows that need Pinterest's product language without copying Pinterest.com.

Key characteristics:
- White and light-gray surfaces.
- Near-black text with subtle gray secondary tiers.
- Pinterest red for primary/brand action.
- Tokenized color roles for text, icon, background, border, and state.
- 4px spacing ladder up through large layout increments.
- Rounded controls from 8px to 28px, plus pill and circle shapes.
- Subtle elevation: rings and small shadows, not glossy depth.
- Accessibility-minded focus rings, labels, and state messaging.

## 2. Color Palette & Roles

Use Gestalt's semantic approach rather than arbitrary brand color sampling.

- Page background: white.
- Surface: gray 50/100-like fills for cards, docs panels, controls, and grouped areas.
- Primary text: near-black.
- Subtle text: mid gray for helper copy and metadata.
- Brand/action red: primary buttons, brand icons, and destructive-adjacent attention only when appropriate.
- Link/info blue: links, shopping/info states, and focus-adjacent UI.
- Success green: completed or positive status.
- Warning orange/yellow: caution states.
- Error red: validation and destructive feedback.
- Borders: gray, with softer borders inside grouped UI.

The public token package separates base color scales from semantic light/dark mappings and component tokens. Preserve that mental model: map raw colors into roles before applying them.

## 3. Typography Rules

Gestalt's public tokens use a system sans stack with broad platform fallbacks and a separate code stack. The type scale is compact and product-oriented.

Hierarchy:
- Display: 56px for rare page-level storytelling.
- H1: 44px for major product or documentation pages.
- H2: 36px for section-level headings.
- H3/card title: 28px.
- Large UI/body: 20px.
- Body: 16px.
- Small UI: 14px.
- Caption: 12px.

Rules:
- Prefer semibold and bold weights for hierarchy.
- Keep body line height around 1.4 and compact UI line height around 1.2 to 1.5 depending on density.
- Use the code stack only for tokens, props, keyboard hints, and developer-facing examples.
- Do not over-track display type; let the clean sans stack stay neutral.

## 4. Component Stylings

Buttons:
- Primary buttons use Pinterest red, white text, 16px radius, and clear hover/active red steps.
- Secondary buttons use light gray surfaces with black text.
- Icon buttons can be circular or pill-like, but must keep large hit targets.
- Disabled states should visibly reduce contrast and remove pointer affordance.

Cards and containers:
- Use white or light-gray surfaces with quiet borders.
- Prefer 16px radius for ordinary cards and 28px radius for larger panels.
- Shadows are subtle and functional; rings often communicate structure better than depth.

Fields:
- Inputs, search fields, comboboxes, text areas, and selects need visible labels, helper text, border state, and focus ring.
- Error state should pair red border or message color with explicit copy.

Status and feedback:
- Use compact badges, tags, toasts, callouts, and status rows.
- State color should carry meaning, not decoration.

Navigation:
- Side navigation, tabs, segmented controls, and tables should favor scanability and predictable row spacing.

## 5. Layout Principles

Gestalt's base spacing scale moves in 4px increments from 4px through 64px. In Open Design work, use 4, 8, 12, 16, 20, 24, 32, and 48px as the shared compact subset.

Layout rules:
- Keep product containers around 1180px max width.
- Use 32px desktop gutters, 24px tablet gutters, and 16px phone gutters.
- Use compact rows for dense settings and tables.
- Use larger 48px to 64px gaps only between major page regions.
- Keep controls aligned to the same left edge as their labels.
- Collapse multi-column product layouts before text becomes cramped.

## 6. Motion & Interaction

Gestalt interactions should be immediate and legible. Use short transitions for hover, active, focus, popover, toast, and disclosure states. The focus ring is a dedicated blue-tinted signal, not a red brand flourish.

Rules:
- Use hover and pressed states that deepen or lighten within the same semantic family.
- Do not shift layout on hover.
- Keep popovers, tooltips, and overlays visually anchored.
- Make loading and disabled states explicit.

## 7. Voice & Brand

Voice is product-helpful and plain. Labels should be short, action-oriented, and specific. Documentation surfaces can be warm, but product UI should prioritize clarity over wit.

Write:
- "Save changes."
- "Create board."
- "No pins match these filters."
- "Fix the highlighted fields."

Avoid:
- Vague CTA text.
- Playful copy inside error states.
- Dense helper text where a label can be clearer.

## 8. Anti-patterns

- Do not copy Pinterest screenshots, icons, logos, or source implementation.
- Do not turn every page into a masonry feed; Gestalt is the component system, not the consumer homepage.
- Do not use red for ordinary emphasis when neutral hierarchy is enough.
- Do not invent new spacing increments when the 4px ladder already works.
- Do not use heavy shadows or glass effects.
- Do not hide labels in placeholders.
- Do not reduce focus visibility to match brand color.

## 9. Agent Prompt Guide

Quick reference:
- Canvas: white and light gray.
- Text: near-black with gray subtle tiers.
- Accent: Pinterest red.
- Radius: 16px workhorse, 28px large panels, pill/circle for compact controls.
- Layout: dense product UI, docs panels, forms, tables, navigation, feedback components.

Example prompts:
- "Create a Pinterest Gestalt-inspired settings page with white panels, 16px rounded controls, red primary action, gray helper text, and strong blue focus states."
- "Design a component documentation page using Gestalt-like side navigation, token callouts, code rows, and compact examples."
- "Build a moderation table with clear statuses, neutral row dividers, compact filters, and one red primary action."
