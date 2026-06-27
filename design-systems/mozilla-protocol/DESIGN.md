# Design System Inspired by Mozilla Protocol

> Category: Brand & Marketing
> Mozilla and Firefox website language: meaningful, flexible, accessible, global, and useful.

## 1. Visual Theme & Atmosphere

Mozilla Protocol should feel like a public-facing website system for a mission-driven technology organization. The surface is direct and editorial: large confident headings, clean content sections, crisp cards, and enough color to make product or brand moments clear without turning the page into decoration.

The official Protocol principles emphasize meaningful content, flexibility, accessibility, global reach, and usefulness. In Open Design captures, treat those as operating constraints: every visual choice should clarify the message, survive localization, remain responsive, and make the next action obvious.

Key characteristics:
- White and near-white canvases with dark text.
- A Mozilla-oriented black-and-white base that can accept Firefox-like color accents.
- Bright blue as the default action/link color.
- Large sans-serif headlines paired with readable body copy.
- Modular layouts: content containers, splits, cards, callouts, newsletters, forms, and navigation.
- Deliberate dark-theme sections for contrast rather than decoration.
- Rounded but restrained geometry.

## 2. Color Palette & Roles

Use a neutral Mozilla base with one or two high-signal accents.

- Page background: white.
- Surface: cool off-white for cards, bands, and callouts.
- Primary text: black.
- Secondary text: deep aubergine or neutral gray.
- Accent blue: links, primary CTAs, active navigation, focus-adjacent states.
- Dark surface: use black or deep purple for inverse hero and callout sections.
- Success: teal-green for completed states.
- Warning: warm yellow for caution.
- Danger: vivid red for validation errors.

Protocol exposes broad color scales, but reusable Open Design artifacts should avoid rainbow surfaces. Choose color because a component needs state, brand distinction, or hierarchy.

## 3. Typography Rules

Protocol documents distinct Mozilla and Firefox brand font choices. For Mozilla-branded work, use Mozilla Headline for titles and Mozilla Text for body. For Firefox-like product pages, use Metropolis for headings and Inter for body text. If those fonts are unavailable, fall back to system sans-serif.

Hierarchy:
- Display: 64px, tight line height, short editorial statements.
- H1: 48px, used once per page.
- H2: 32px, section titles.
- H3: 24px, card titles or compact section headings.
- Body: 16px with generous line height.
- Small/meta: 12px to 14px.

Rules:
- Keep display text short enough to localize.
- Avoid stacking many large headline sizes together.
- Do not italicize geometric Firefox-style display type.
- Use strong weight and size before reaching for decorative color.

## 4. Component Stylings

Buttons:
- Primary buttons use the blue accent, white text, medium radius, and sturdy padding.
- Secondary buttons are white or transparent with a clear blue or neutral border.
- Dark-theme buttons invert against black or deep purple surfaces.
- Button groups should leave one obvious next step.

Cards and feature cards:
- Use white or near-white surfaces with subtle borders.
- Prefer clear headings, short body copy, and one call-to-action link.
- Cards can scale from compact to large feature treatments, but should not become image-heavy marketing tiles unless the content calls for it.

Callouts:
- Use pale surfaces for helpful information and dark surfaces for major brand statements.
- Keep callouts content-led: headline, one paragraph, one action.

Forms:
- Inputs should have clear labels, visible borders, and inline guidance.
- Validation should use explicit text plus red state color.

Navigation:
- Use simple horizontal navigation on wide screens and compact stacked navigation on small screens.
- Preserve obvious link styling and keyboard focus.

## 5. Layout Principles

Use Protocol-like website modules: centered containers, split layouts, card grids, main-with-sidebar pages, and alternating section backgrounds.

Spacing follows a 4px base with generous website section rhythm. Desktop sections can breathe at 80px; tablet and phone reduce the gap while preserving readable line lengths.

Layout rules:
- Keep main content inside a 1200px max container.
- Use 48px desktop gutters, 32px tablet gutters, and 20px phone gutters.
- Use two-column splits for message plus supporting content, then collapse early.
- Keep body copy in comfortable reading widths.
- Use background bands to separate topics, not as decoration.

## 6. Motion & Interaction

Motion should be quick and functional. Use short transitions for hover, active, disclosure, and navigation states. Avoid ornamental movement that competes with content.

Interaction rules:
- Keyboard focus must be clearly visible.
- Links should remain recognizable as links.
- Hover states should deepen color rather than shift layout.
- Forms should report errors close to the affected field.

## 7. Voice & Brand

Voice is useful, global, and human. Write in plain language that explains what the visitor can do next. The tone can be spirited, but it should never obscure the purpose of the page.

Write:
- "Choose the browser that puts you first."
- "Get product updates in your inbox."
- "Compare privacy features."

Avoid:
- Clever but vague CTAs.
- Text that assumes one culture, idiom, or locale.
- Decoration that does not reinforce the message.

## 8. Anti-patterns

- Do not copy Mozilla or Firefox official logos, illustrations, screenshots, or source code.
- Do not use color as decoration when a border, heading, or spacing change would communicate better.
- Do not create low-contrast gray-on-gray marketing sections.
- Do not make components fixed-width in a way that breaks localization.
- Do not bury the primary action among many equal buttons.
- Do not over-round every element into pills; Protocol geometry is friendly but not bubbly.

## 9. Agent Prompt Guide

Quick reference:
- Canvas: white with cool off-white bands.
- Text: black, large sans-serif headings.
- Accent: Mozilla/Firefox blue.
- Layout: modular website sections, split panels, cards, callouts, forms.
- Mood: useful, accessible, global, content-first.

Example prompts:
- "Create a Mozilla Protocol-inspired product landing section with a large black headline, blue CTA, off-white feature cards, and a responsive split layout."
- "Design an accessible newsletter signup using Protocol-like form labels, clear helper text, blue primary action, and a compact error state."
- "Build a documentation overview page with a left sidebar, content cards, and a dark callout band using the Mozilla Protocol visual language."
