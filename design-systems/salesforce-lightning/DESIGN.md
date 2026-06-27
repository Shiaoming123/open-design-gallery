# Salesforce Lightning

> Category: Productivity & SaaS
> Enterprise application system. White workspace, Salesforce blue action, dense records, cards, tabs, and data-first clarity.

## 1. Visual Theme & Atmosphere

Salesforce Lightning is an enterprise workspace language for records, workflows, dashboards, setup screens, and service operations. It should feel productive, bright, structured, and dependable. The interface is denser than a marketing page but friendlier than a bare database admin.

The core mood is "business data made navigable." White and very light blue-gray surfaces carry most of the UI. Salesforce blue marks primary actions, selected navigation, links, focus, and progress. Cards separate units of work. Tables, forms, tabs, badges, and path-like steps are natural first-class components.

## 2. Color Palette & Roles

- **Background:** `#f3f6fb` - soft Lightning workspace canvas.
- **Surface:** `#ffffff` - cards, record panels, forms, tables.
- **Warm surface:** `#f8fbff` - subtle page sections and selected row tint.
- **Foreground:** `#181818` - primary text.
- **Secondary foreground:** `#2e3a59` - headings, record names, dense labels.
- **Muted:** `#5f6a7d` - descriptions and helper text.
- **Metadata:** `#747d8c` - timestamps and table metadata.
- **Border:** `#d8dde6` - card edges, table lines, form controls.
- **Soft border:** `#e8edf4` - inner dividers and row separators.
- **Accent:** `#0176d3` - primary action, link, selected state, focus source.
- **Accent hover:** `#014486`; **accent active:** `#032d60`.
- **Semantic:** success `#2e844a`, warning `#fe9339`, danger `#ba0517`.

Use blue confidently for action and navigation state, but keep large backgrounds neutral. Reserve semantic colors for real business status.

## 3. Typography Rules

- **Display and body:** `"Salesforce Sans", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`.
- **Mono:** `ui-monospace, "SF Mono", Menlo, Consolas, monospace`.
- **Scale:** 12, 13, 16, 20, 24, 32, 44, 56px.
- **Body line-height:** 1.5.
- **Heading line-height:** 1.2.
- **Display tracking:** 0em.
- **Weights:** 400 for body, 600 for headings and compact labels.

Apply heading styles consistently to guide users through complex records and workflows. Keep body text practical and scannable.

## 4. Component Stylings

- **Primary buttons:** Salesforce blue fill, white label, 4px radius, minimum 32px desktop height and 44px touch targets where possible.
- **Secondary buttons:** white fill, gray border, blue label. Hover with light blue-gray fill.
- **Cards:** white fill, 1px border, 4px radius, compact header and body regions.
- **Record panels:** clear title, key metadata, badge/status row, and action group.
- **Inputs:** white fill, gray border, 4px radius, blue focus ring, visible labels.
- **Tables:** strong header labels, quiet row separators, selected-row tint from warm surface.
- **Tabs and path steps:** active state uses blue text, blue border, or filled progress marker.
- **Badges and pills:** small, rounded, status-specific, and text-first.

## 5. Layout Principles

- Use a 4px/8px spacing rhythm for enterprise density.
- Place content in cards and panels that map to business objects or tasks.
- Desktop layouts can use a 12-column grid with a 1280px content max.
- Section rhythm: 64px desktop, 48px tablet, 32px phone.
- Dashboards and record pages should emphasize scan order: page header, summary, tabs, related lists, activity.
- On mobile, record cards stack vertically, table rows become cards, and action groups collapse into menus or fixed bottom action bars.

## 6. Depth & Elevation

Depth is shallow. Default cards use borders instead of shadows. Use a subtle raised shadow for popovers, menus, and modals. Avoid glossy panels and dramatic shadow stacks.

## 7. Motion & Interaction

Motion should support clarity: 140ms for hover/focus, 200ms for menus, drawers, and tab transitions. Use a crisp ease-out curve. Avoid playful physics. State changes should be visible, accessible, and predictable.

## 8. Do's and Don'ts

- Do structure pages around records, lists, actions, and status.
- Do keep card headers compact and useful.
- Do make selected navigation and focus states unmistakable.
- Do use semantic color only when it communicates actual status.
- Do not build a marketing landing page when the brief asks for an app surface.
- Do not replace all business hierarchy with decorative cards.
- Do not use official Salesforce screenshots, icons, or assets in generated artifacts.
- Do not hide required actions behind hover-only controls.

## 9. Agent Prompt Guide

Use this system for CRM views, sales/service dashboards, record detail pages, approval flows, setup tools, admin screens, and enterprise workflows. Start from a bright app canvas, use cards to organize business objects, keep actions blue, and make record status easy to scan.
