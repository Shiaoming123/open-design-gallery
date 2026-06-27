# Zendesk Garden

> Category: Productivity & SaaS
> Zendesk product UI language. Crisp service-work surfaces, compact controls, blue action emphasis, small radii, and calm operational hierarchy.

## 1. Visual Theme & Atmosphere

Zendesk Garden should feel like a composed customer-support workspace: clear, friendly, and intensely practical. It is built for tickets, conversations, help-center tools, reporting surfaces, and admin configuration. The visual language favors light neutral canvases, white raised surfaces, compact controls, and a single confident blue action color.

The tone is humane but not whimsical. Use clean hierarchy, generous enough spacing for scanability, and small-radius components that feel engineered. Avoid decorative illustrations, soft marketing gradients, and oversized card stacks unless the artifact is explicitly brand storytelling rather than product UI.

## 2. Color Palette & Roles

- **Background:** `#f8f9f9` for the page or app shell.
- **Surface:** `#ffffff` for cards, panels, menus, and forms.
- **Warm surface:** `#edf7ff` for selected rows, quiet info panels, and active side navigation.
- **Foreground:** `#293239` for primary text.
- **Secondary foreground:** `#39434b` for panel headings and compact labels.
- **Muted:** `#5c6970` for helper text and descriptions.
- **Metadata:** `#848f99` for timestamps, counters, placeholders, and tertiary labels.
- **Border:** `#d8dcde` for control outlines and container edges.
- **Soft border:** `#e8eaec` for row dividers and low-emphasis separators.
- **Accent:** `#1f73b7` for primary action, selected state, links, and focus.
- **Semantic:** success `#037f52`, warning `#ac5918`, danger `#cd3642`.

Use blue sparingly and functionally. Most screen structure should come from text, spacing, and fine dividers.

## 3. Typography Rules

- **Display and body:** system UI stack with `Segoe UI`, `Roboto`, `Helvetica Neue`, and `Arial` fallbacks.
- **Mono:** `SFMono-Regular`, `Consolas`, `Liberation Mono`, `Menlo`, `Courier`, monospace.
- **Scale:** 10, 12, 14, 18, 22, 26, 36, 44px.
- **Body line-height:** 1.43, matching compact product copy.
- **Heading line-height:** 1.2.
- **Display tracking:** 0. Do not tighten letters.
- **Weights:** 400 for body, 600 for labels and controls, 700 only for strong headings or critical counts.

Keep copy legible at dense sizes. Garden-like screens often rely on 12-14px labels and compact row content.

## 4. Component Stylings

- **Primary buttons:** blue fill, white text, 4px radius, compact height, immediate hover and active states.
- **Secondary buttons:** white fill, gray border, dark text; blue border or text only on hover/focus.
- **Icon buttons:** square, compact, neutral by default, and blue only when selected.
- **Cards and panes:** white surfaces, 1px border, 4px radius, little to no shadow.
- **Inputs:** white fill, gray border, 4px radius, blue focus ring, helper text below.
- **Tables and lists:** fine dividers, clear timestamps, tags, status indicators, and selected-row tint.
- **Tags and badges:** small pill or low-radius chips. Use semantic color only when it communicates state.
- **Notifications:** inline or panel-level, with a colored left edge or icon but restrained background.

## 5. Layout Principles

- Use a 4px base with 8px as the visible rhythm for gaps and padding.
- Favor operational layouts: side navigation, split panes, ticket queues, detail drawers, forms, tables, and timeline panels.
- Keep desktop content near 1184px unless building a full-width application shell.
- Use 64px desktop section rhythm, 48px tablet, 32px phone.
- Let dense controls align precisely. Uneven vertical rhythm makes the system feel less Garden-like.
- On mobile, collapse sidebars into top filters or drawers and keep primary action accessible.

## 6. Depth & Elevation

Most separation is border-led. Use `--elev-ring` for selected panels and focus-adjacent emphasis. Reserve raised shadows for menus, popovers, drawers, modals, and tooltips. Avoid floating decorative cards and heavy shadows.

## 7. Motion & Interaction

Motion is short and utilitarian: 100ms for hover/focus and 160ms for state changes. Components should feel responsive, not animated. Preserve visible focus states, clear disabled states, and stable layout during loading.

## 8. Do's and Don'ts

- Do build practical support, admin, reporting, and knowledge-base interfaces.
- Do use the blue accent for action and selection rather than decoration.
- Do rely on small radii, fine borders, and compact spacing.
- Do keep status and validation messages close to the relevant object.
- Do not copy Zendesk screenshots, logos, icons, or source code into artifacts.
- Do not create bubbly, oversized, or marketing-heavy UI when the task is product work.
- Do not overuse green, orange, or red outside real state communication.

## 9. Agent Prompt Guide

Use Zendesk Garden when the user needs an approachable but serious SaaS product surface: ticket management, support operations, settings, moderation queues, help-center authoring, customer profiles, and analytics. Start from a white-and-gray workspace, organize information with small controls and clear dividers, then use one blue action to anchor the workflow.
