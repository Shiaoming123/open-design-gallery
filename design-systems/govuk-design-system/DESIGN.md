# Design System Inspired by GOV.UK Design System

> Category: Government & Public Sector
> UK public-service interface language: direct, accessible, form-first, and deliberately plain.

## 1. Visual Theme & Atmosphere

This system should feel like a trustworthy government transaction rather than a brand campaign. The canvas is white, the text is near black, and decoration is almost absent. Visual authority comes from clarity: large left-aligned headings, compact paragraphs, strong labels, obvious borders, and a single primary action.

Use the official language as inspiration for reusable Open Design artifacts, not as a copied frontend. The captured style is public-service plainness: the interface should help someone complete a task, understand a status, or correct a mistake with the least possible ambiguity.

Key characteristics:
- White page canvas with blue-tinted support surfaces.
- Near-black text and explicit input borders.
- GOV.UK blue for links, header identity, and service navigation.
- Green for the main forward action.
- Yellow focus rings that are impossible to miss.
- Square geometry, strong edges, and almost no shadow.
- Sentence-case writing, plain verbs, and left alignment.

## 2. Color Palette & Roles

Use color functionally. GOV.UK guidance emphasizes predictable color use, WCAG contrast, and avoiding reassignment of color meanings.

- Page background: white.
- Text: near black.
- Secondary text: dark grey, never low-contrast pale grey.
- Link and brand blue: use for links, active navigation, and selected service affordances.
- Primary action green: use for the single main submit or continue action.
- Focus yellow: use only for keyboard focus and active attention states.
- Error red: use only for errors and destructive validation.
- Success green: use only for completed or positive status.
- Pale blue surface: use for panels, summary blocks, and service-chrome contrast.

Do not create soft pastel variants for decorative use. If a color does not communicate purpose, keep the surface white and use spacing or a border.

## 3. Typography Rules

Prefer `GDS Transport` when appropriate for a GOV.UK-like service; otherwise use Arial-compatible fallbacks. Type should be large enough to read under real public-service conditions.

Hierarchy:
- Display: 80px on large screens, only for exceptional service-start moments.
- H1: 48px with 50px-like line height.
- H2: 36px with 40px-like line height.
- H3 and lead body: 24px with generous line height.
- Body: 19px with 25px-like line height.
- Small body: 16px with 20px-like line height.

Rules:
- Use sentence case.
- Keep headings short and factual.
- Do not use display type as decoration.
- Keep paragraphs narrow enough to scan.
- Use bold weight for labels, headings, and form legends rather than for broad emphasis.

## 4. Component Stylings

Buttons:
- Primary buttons are green, square, and visually heavy.
- Use one primary button per task step.
- Align the main action with the left edge of the form.
- Use button text that describes the action: "Continue", "Save and continue", "Confirm and send".
- Avoid multiple primary buttons on one page.

Links:
- Use blue underlined text for navigation and contextual help.
- Do not style ordinary links as buttons unless the destination starts or advances a transaction.

Inputs:
- Inputs use thick black borders, white fill, clear labels, and visible error messages.
- Error state adds a red left rule or red border treatment plus explicit text.
- Required task explanation should sit near the label, not hidden in placeholder text.

Panels and summaries:
- Use pale blue support surfaces for important but non-error information.
- Use strong headings and short body copy.
- Avoid cards as marketing tiles; public-service content should usually be a list, form section, or summary block.

## 5. Layout Principles

Use a narrow, content-first grid. A typical desktop service page should keep its main reading column around 640px to 760px, with a maximum content container around 960px.

Spacing follows a 5px rhythm with larger responsive jumps: 5, 10, 15, 20, 25, 30, 40, 50, and 60px. Leave more space above a new task section than inside a component. Forms should be stacked vertically; do not split related questions into decorative side-by-side cards.

Responsive rules:
- Collapse to one column early.
- Preserve large touch targets.
- Keep labels above inputs on small screens.
- Avoid dense dashboards unless the task genuinely requires comparison.

## 6. Motion & Interaction

Motion should be almost invisible. Use short color, border, and slight pressed-state changes only. Keyboard focus is the main interaction signal and must use a strong yellow ring.

Avoid:
- Parallax, reveal animations, and playful transitions.
- Delayed validation feedback.
- Hover-only disclosure.
- Any motion that distracts from completing a government service task.

## 7. Voice & Brand

Voice is direct, plain, and task-oriented. Prefer everyday words over institutional phrasing. Tell users what will happen next and what they need to do.

Write:
- "Check your answers before sending."
- "Enter your National Insurance number."
- "There is a problem."

Avoid:
- Marketing claims.
- Clever microcopy.
- Vague CTAs like "Explore" or "Learn more" in transactional flows.

## 8. Anti-patterns

- Do not use gradients, floating cards, or decorative illustrations as the main design language.
- Do not make the system feel like a startup SaaS dashboard.
- Do not replace underlined links with subtle low-contrast text.
- Do not reduce focus visibility.
- Do not use placeholder text as the only instruction.
- Do not assign new meanings to functional colors.
- Do not create rounded, pill-heavy UI except for small status badges where needed.

## 9. Agent Prompt Guide

Quick reference:
- Canvas: white.
- Text: near black.
- Links and navigation: GOV.UK blue.
- Main action: green.
- Focus: yellow.
- Geometry: square, explicit, plain.

Example prompts:
- "Create a GOV.UK-style service form with a narrow content column, large factual heading, black-bordered inputs, and one green primary action."
- "Design a public-service status page using white canvas, blue support panels, direct headings, and strong yellow focus states."
- "Build a check-answers summary with plain rows, blue edit links, and a single left-aligned confirmation button."
