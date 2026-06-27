# Twilio Paste

> Category: Productivity & SaaS
> Customer-engagement product system. White work surfaces, Twilio navy structure, blue primary action, red brand highlight, accessible forms, and explicit semantic feedback.

## 1. Visual Theme & Atmosphere

Twilio Paste should feel inclusive, direct, and operationally polished. It is a design language for communication products, support tooling, messaging workflows, account administration, billing, and developer-facing SaaS surfaces. The interface should be friendly without becoming playful and structured without becoming cold.

The visual language is mostly white and light neutral, with navy for brand structure, blue for primary interaction, and red only as a sharp brand highlight or destructive signal. Components need clear affordances, generous focus states, readable labels, and accessible contrast.

## 2. Color Palette & Roles

- **Background:** `#ffffff` - default body and page canvas.
- **Surface:** `#f9f9fa` - elevated product surfaces and cards.
- **Warm surface:** `#f4f9ff` - primary-tinted contextual regions.
- **Foreground:** `#121c2d` - Twilio navy body text and high-emphasis structure.
- **Secondary foreground:** `#394762` - headings inside panels and strong secondary text.
- **Muted:** `#606b85` - helper copy and descriptions.
- **Metadata:** `#8b93aa` - tertiary labels and inactive content.
- **Border:** `#8b93aa` - visible default edges where contrast matters.
- **Soft border:** `#e1e3ea` - low-emphasis separators.
- **Accent:** `#006dfa` - primary action, focus, links, selected states.
- **Brand highlight:** Twilio red appears through content accents, not as a global Open Design token.
- **Semantic:** success `#14b053`, warning `#f47c22`, danger `#c72323`.

Use blue for actions and navigation state. Use navy for branded structure. Use red sparingly so alerts and destructive states remain unambiguous.

## 3. Typography Rules

- **Display:** `"TwilioSansDisplay", "Inter var", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`.
- **Body:** `"TwilioSansText", "Inter var", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`.
- **Mono:** `"TwilioSansMono", Courier, monospace`.
- **Scale:** 12, 14, 16, 18, 20, 24, 32, 40, 48px.
- **Body line-height:** 1.5.
- **Heading line-height:** 1.22.
- **Display tracking:** 0em.
- **Weights:** 400 for body, 500 for emphasis, 600 for labels, buttons, and headings.

Favor readable product type with obvious labels. Keep long-form support and messaging content comfortable to scan.

## 4. Component Stylings

- **Primary buttons:** blue fill, white text, 4px radius, strong focus ring, clear hover/active blue states.
- **Secondary buttons:** white surface, neutral border, navy text, blue border/text on hover.
- **Cards and panels:** light surface on white or white on tinted backgrounds, 1px border, 8px radius, low shadow.
- **Forms:** labels are required, helper/error text is visible, controls have 4px radius and high-contrast focus.
- **Messages and timelines:** left-aligned structured cards, metadata tiers, status badges, and clear ownership.
- **Alerts:** semantic color with text, icon space, and action area; avoid relying on color alone.
- **Navigation:** navy headers or rails can anchor the product, but content surfaces remain bright and spacious.

## 5. Layout Principles

- Use a 4px spacing basis with 8, 12, 16, 20, 24, 32, and 48px as common UI steps.
- Prefer page shells with compact mastheads, content toolbars, metric rows, message lists, and side panels.
- Desktop container max: 1180px for documentation or narrow workflows; operational apps can use wider panes.
- Section rhythm: 80px desktop, 56px tablet, 36px phone.
- Give forms enough vertical rhythm for labels, helper text, and errors. Accessibility clarity is more important than maximum density.

## 6. Depth & Elevation

Depth is clean and product-oriented. Use border shadows for field focus and low shadows for cards, menus, and drawers. High shadows are reserved for modals and important overlays. Avoid glassmorphism, dramatic gradients, and decorative blur.

## 7. Motion & Interaction

Motion is crisp and accessible: 120ms for hover/focus, 180ms for component state changes, and direct ease-out curves. Keep animated changes predictable. Respect reduced-motion contexts and avoid large content shifts in messaging or support workflows.

## 8. Do's and Don'ts

- Do use clear labels, helper text, and focus states.
- Do keep blue as the main action color.
- Do reserve red for brand highlights, destructive actions, or urgent status.
- Do combine semantic color with text and structure.
- Do not copy Twilio screenshots, logos, icons, fonts, package CSS, or component source.
- Do not turn the UI into a red-heavy brand poster.
- Do not hide form requirements or validation behind subtle color alone.

## 9. Agent Prompt Guide

Use this system for communications dashboards, customer support tools, messaging flows, account settings, billing workflows, API consoles, and accessible SaaS UI. Start with bright surfaces, navy hierarchy, blue actions, semantic feedback, and enough helper text to make each workflow self-explanatory.
