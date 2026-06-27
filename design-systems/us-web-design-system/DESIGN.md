# Design System Inspired by U.S. Web Design System

> Category: Government & Public Sector
> U.S. federal service language: tokenized, accessible, civic, modular, and practical.

## 1. Visual Theme & Atmosphere

This system should feel like a dependable U.S. federal digital service. It is more modular and componentized than GOV.UK, with visible banners, alerts, cards, tags, and grid-based content blocks, but it still prioritizes clarity over expression.

USWDS is built around design tokens: color, typography, spacing, line height, and related choices are treated as named reusable decisions. Capture that discipline in Open Design artifacts by using the schema tokens consistently and by keeping every component grounded in a purpose.

Key characteristics:
- White and cool-gray canvas.
- Dark ink text, strong blue primary actions, and clear semantic status colors.
- Public Sans-style sans typography with normalized type scale.
- 8px spacing rhythm with smaller 4px and 12px intermediates.
- Modular cards, alerts, banners, and grid rows.
- Rounded but restrained geometry.
- Accessible status language and official-service trust cues.

## 2. Color Palette & Roles

USWDS color is organized into role-based families: base, primary, secondary, accent-warm, and accent-cool. The captured package maps that into the Open Design schema:

- Base ink: primary reading text.
- Base grays: backgrounds, borders, helper text, and low-emphasis structure.
- Primary blue: main action, links, active navigation, and selected states.
- Secondary red: urgent secondary emphasis or destructive status.
- Accent warm: highlights and non-critical emphasis.
- Accent cool: informational highlights.
- Semantic green, gold, and red: success, warning, and error only.

Use the 60/30/10 color idea as a composition guardrail: base neutrals should dominate, primary and secondary colors should structure the interface, and accent colors should remain sparing.

## 3. Typography Rules

Use `Public Sans` or a compatible system sans stack. Typography should be stable across components, with sizes chosen from a limited scale rather than arbitrary values.

Hierarchy:
- Display: 64px for large civic or campaign-like service headers.
- H1: 56px.
- H2: 40px.
- H3: 32px.
- Lead: 22px.
- Body: 16px.
- Small UI: 15px.
- Micro metadata: 13px.

Line-height:
- Tight headings use approximately 1.15.
- Short body and cards can use 1.35 to 1.5.
- Extended body copy should use approximately 1.62.

Rules:
- Favor one sans family across the interface.
- Use mono type only for codes, identifiers, and technical metadata.
- Keep headings informative, not ornamental.
- Let type tokens do the work; avoid custom one-off sizes.

## 4. Component Stylings

Buttons:
- Primary buttons are blue with white text and a substantial selectable surface.
- Use secondary, accent-cool, accent-warm, base, outline, and larger variants only when the hierarchy needs them.
- Use outline buttons for actions that happen on the current page.
- Use text links for regular navigation between pages.

Alerts:
- Alerts communicate status, validation, warnings, success, errors, and emergency notices.
- Give alerts concise headings and human-readable body copy.
- Do not blame the user in error messages.
- Use status color as a left edge or background signal, not as decorative fill everywhere.

Cards:
- Cards summarize one subject and act as an entry point to more detail.
- Cards usually belong in a group, not in isolation.
- Use borders or modest shadow to separate cards from the page.
- Do not use cards for tabular data, simple CTAs, or sequential long-form reading.

Banners and identifiers:
- Official-service cues should be compact, factual, and easy to dismiss or expand.
- Avoid turning banners into promotional strips.

## 5. Layout Principles

Use grid-based layouts with clear gutters and responsive wrapping. USWDS spacing units are based on multiples of 8px, with extra small 1px, 2px, and 4px options plus large named layout widths.

Open Design scale:
- 4, 8, 12, 16, 20, 24, 32, and 48px component spacing.
- 48, 64, and 80px section rhythm.
- Maximum content width around 1200px.

Responsive rules:
- Let card groups wrap rather than squeeze.
- Keep alerts full width within their content region.
- Preserve button touch targets.
- Maintain readable line lengths inside cards and prose blocks.

## 6. Motion & Interaction

Motion is utilitarian and short. Use fast hover, focus, and disclosure transitions. Avoid expressive page choreography unless it directly clarifies state.

Focus must be visible and consistent across buttons, links, form controls, and alert actions. State changes should be color plus shape or text, never color alone.

## 7. Voice & Brand

Voice is helpful, civic, and plain. It should sound like a federal service that respects the visitor's time.

Write:
- "Your application was submitted."
- "Review the required documents."
- "Official websites use .gov."

Avoid:
- Marketing superlatives.
- Jargon-heavy system messages.
- Error copy that blames the user.

## 8. Anti-patterns

- Do not use token names in prose while ignoring tokens in CSS.
- Do not flood the page with all color families at once.
- Do not use cards as a substitute for tables.
- Do not make every action a button.
- Do not hide official-service trust cues behind decorative treatment.
- Do not reduce alerts to icon-only messages.
- Do not introduce arbitrary spacing values outside the scale.

## 9. Agent Prompt Guide

Quick reference:
- Canvas: white and cool gray.
- Primary action: federal blue.
- Structure: tokenized grid, cards, alerts, and banners.
- Typography: Public Sans-style sans.
- Spacing: 8px rhythm.
- Voice: plain civic service guidance.

Example prompts:
- "Create a USWDS-style federal service dashboard with an official banner, blue primary action, alert stack, and modular card grid."
- "Design a document-status page using Public Sans-style type, cool-gray surfaces, tokenized spacing, and accessible alert variants."
- "Build a responsive agency landing section with a compact government banner, clear H1, primary blue CTA, and grouped cards."
