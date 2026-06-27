# Workday Canvas

> Category: Enterprise
> Workday enterprise design language. Airy task surfaces, Roboto typography, blue primary actions, semantic workflow states, rounded-but-controlled shape, and purposeful depth.

## 1. Visual Theme & Atmosphere

Workday Canvas should feel like a polished enterprise operating surface: trustworthy, calm, and helpful for complex HR, finance, planning, and employee workflows. It is less dense than a developer console and more structured than a marketing page. The design language uses open spacing, rounded controls, white cards on pale neutral canvas, and blue as a dependable primary action color.

The system is approachable but still formal. Components should make procedural work feel clear: review panels, task cards, approvals, data summaries, forms, banners, side panels, and guided next steps. Avoid loud decoration; confidence comes from predictable layout, clean state language, and visible hierarchy.

## 2. Color Palette & Roles

- **Background:** `#f4f6f8` for the page shell and workflow canvas.
- **Surface:** `#ffffff` for cards, dialogs, task panels, and input groups.
- **Warm surface:** `#edf4ff` for selected rows, info callouts, and primary-tinted highlights.
- **Foreground:** `#1f2933` for primary text.
- **Secondary foreground:** `#334155` for section headings and emphasis within cards.
- **Muted:** `#5f6b7a` for descriptive text and secondary metadata.
- **Metadata:** `#7b8794` for timestamps, secondary labels, and placeholders.
- **Border:** `#d7dde5` for control outlines and card edges.
- **Soft border:** `#e7ebf0` for row separators and quiet dividers.
- **Accent:** `#005cb9` for primary action, selected state, links, and focus.
- **Semantic:** success `#16803c`, warning `#a15c00`, danger `#c7291c`.

Use neutral and blue states before adding extra colors. Semantics should mean real workflow state, not decoration.

## 3. Typography Rules

- **Display and body:** `Roboto`, `Noto Sans`, system sans fallbacks.
- **Mono:** `Roboto Mono`, `SF Mono`, `Consolas`, `Menlo`, monospace.
- **Scale:** 12, 14, 16, 18, 22, 28, 40, 56px.
- **Body line-height:** 1.5 for readable enterprise content.
- **Heading line-height:** 1.18.
- **Display tracking:** 0.
- **Weights:** 400 for body, 500 for controls, 600 for headings, 700 only for high-priority metrics.

Canvas typography should support long labels, field help, and mixed data. Keep headings clear but not editorial.

## 4. Component Stylings

- **Primary buttons:** blue fill, white label, medium weight, pill or 8px radius depending on density.
- **Secondary buttons:** white surface, gray border, dark text, blue hover/focus.
- **Cards:** white, 8-16px radius, subtle border or standard card depth. Use clear headers and action slots.
- **Inputs:** white fill, neutral border, 8px radius, strong focus ring, helper and validation text nearby.
- **Banners and toasts:** surface card with semantic edge, icon, title, body, and action.
- **Pills and status indicators:** rounded, concise, and paired with accessible labels.
- **Tables and task lists:** roomy rows, soft dividers, status chips, and clear row-level actions.
- **Side panels and modals:** stronger depth than cards, stable header/footer actions, and restrained overlay.

## 5. Layout Principles

- Use an 8px baseline grid; reserve 4px for tiny icon or text gaps.
- Prefer task-led enterprise structures: dashboard summary, review queue, detail panel, form sections, and approval footer.
- Desktop content can reach 1280px, with 40px gutters for broad workspaces.
- Section rhythm: 80px desktop, 56px tablet, 36px phone.
- Give complex workflows breathing room. Do not compress every field into a dense table unless the task truly demands it.
- On mobile, stack cards, keep primary actions sticky or immediately visible, and collapse secondary metadata.

## 6. Depth & Elevation

Use elevation as a hierarchy signal. Standard cards can use a soft two-layer shadow or a border. Menus, floating action areas, banners, side panels, and modal dialogs can use stronger depth. Avoid dramatic glow or glass effects.

## 7. Motion & Interaction

Canvas motion should feel purposeful and stable: 150ms for hover and 200ms for common transitions. Use standard easing, avoid bounce, and preserve user orientation when panels open or task states change. Focus states must remain obvious.

## 8. Do's and Don'ts

- Do build trustworthy HR, finance, planning, employee-service, and approval workflows.
- Do use Roboto-like typography and blue primary actions.
- Do give forms and task cards enough spacing to reduce cognitive load.
- Do reserve strong depth for overlays and high-priority surfaces.
- Do not copy Workday screenshots, icons, fonts, brand assets, or source code into artifacts.
- Do not turn Canvas into a marketing landing-page style with oversized hero sections.
- Do not use multiple chromatic accents when workflow state can be expressed with neutral structure.

## 9. Agent Prompt Guide

Use Workday Canvas when the user needs an enterprise workflow that should feel dependable, human, and easy to complete: approvals, employee records, payroll reviews, onboarding tasks, planning dashboards, procurement, and case management. Start with a pale app canvas, white rounded panels, calm blue actions, and semantic status language.
