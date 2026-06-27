# Design System Inspired by NHS Design System

> Category: Public Sector & Health
> Public health service UI. NHS Blue recognition, off-white reading canvas, direct task flows, and uncompromising accessible focus states.

## 1. Visual Theme & Atmosphere

The NHS design system is built for trust, clarity, and safe completion of public health tasks. It should feel official without becoming ceremonial: clear blue headers, dark readable text, large plain-language headings, and a calm grey page tint that reduces glare. The visual language is utilitarian in the best sense. It avoids decorative flourish so users can understand symptoms, appointments, forms, eligibility, and next steps without distraction.

The dominant atmosphere is a white or pale grey content area anchored by NHS Blue. Green appears for primary completion actions, red only for errors or urgent pathways, and yellow is reserved for focus and warnings. Interfaces should be linear, forgiving, and visibly accessible. A user should always know where they are, what is being asked, and how to continue.

**Key Characteristics:**
- NHS Blue as the recognition and navigation anchor
- Off-white page canvas with white content cards and panels
- Dark blue-black body text with strong contrast
- Large, plain, non-editorial typography
- Yellow and black focus treatment for keyboard certainty
- Mobile-first single-column journeys that widen only when content benefits
- Minimal shadows, square practical geometry, and clear borders

## 2. Color Palette & Roles

### Primary
- **NHS Blue** (`#005eb8`): brand anchor, header background, links, secondary borders, and navigation active state.
- **Button Green** (`#007f3b`): primary action color for continue, submit, and confirm flows.
- **Focus Yellow** (`#ffeb3b`): keyboard focus background and visible attention cue.
- **Focus Text** (`#212b32`): dark text over yellow focus.

### Neutral / Surface
- **Page Tint** (`#f0f4f5`): body background that reduces glare and lets callouts stand out.
- **Surface White** (`#ffffff`): content panels, cards, forms, and table cells.
- **NHS Text** (`#212b32`): primary readable copy.
- **Secondary Text** (`#4c6272`): captions, secondary data, and supporting labels.
- **Border** (`#d8dde0`): default edge and section separator.

### Semantic
- **Success** (`#007f3b`): completed, confirmed, available, or positive status.
- **Warning** (`#ffeb3b`): caution callouts and focus-related warning emphasis.
- **Error** (`#d5281b`): validation errors, urgent care cards, destructive or critical states.

## 3. Typography Rules

### Font Family
- **Preferred**: NHS Frutiger when available.
- **Fallback**: Frutiger, Arial, Helvetica, sans-serif.
- **Mono**: a generic system mono only for reference codes, IDs, and technical labels.

### Hierarchy

| Role | Size | Weight | Line Height | Notes |
|------|------|--------|-------------|-------|
| Hero / Page Title | 64px | 700 | 1.05 | Rare, for major service entry pages |
| Large Heading | 48px | 700 | 1.08 | Start pages and major sections |
| H1 / Question | 36px | 700 | 1.12 | Transactional page headings |
| H2 | 26px | 700 | 1.2 | Section headings and large legends |
| H3 | 22px | 700 | 1.25 | Card titles and subheadings |
| Body | 19px | 400 | 1.55 | Default paragraph size on larger screens |
| Body Small | 16px | 400 | 1.5 | Support text, summaries, metadata |
| Micro | 14px | 400 | 1.45 | Compact labels only |

### Principles
- Use bold for headings, labels, and short emphasis; avoid decorative type treatments.
- Do not use italics. Underlining belongs to links.
- Keep body copy large and direct, especially for medical, eligibility, and form content.
- Long words, addresses, and references must wrap safely in narrow layouts.

## 4. Component Stylings

### Buttons

**Primary Button**
- Background: Button Green (`#007f3b`)
- Text: white
- Shape: squared practical rectangle with a small radius
- Padding: large enough for clear touch targets
- Hover: darker green
- Focus: yellow background or yellow outer treatment with thick black boundary
- Use for the main continue, confirm, or submit action.

**Secondary Button**
- Background: white or transparent
- Text / border: NHS Blue
- Use for lower-priority alternatives such as saving for later.

**Warning / Destructive Button**
- Use sparingly. Red must signal risk, error, or urgent care, not normal emphasis.

### Header
- Use a full-width NHS Blue header.
- Include a clear service name when the service is distinct from the main NHS website.
- Search, account links, and navigation should only appear when the journey needs them.
- Avoid fixed sticky headers that could obscure focused content.

### Cards & Panels
- Cards are white on the pale page tint with a visible light border.
- Prefer left-aligned content, obvious headings, and simple body copy.
- Warning panels use yellow accents; error panels use red accents; informational panels can use blue.
- Shadows should be minimal or absent. Let contrast, spacing, and borders carry structure.

### Forms
- Labels and legends should be explicit and close to their controls.
- Inputs use clear dark borders and a thicker black/yellow focus treatment.
- Validation errors must include text and visible red structure near the affected field.
- Group related radio and checkbox choices in a vertical rhythm.

## 5. Layout Principles

### Spacing & Grid
- Design mobile first with a single-column layout before expanding into wider grids.
- Default content width should stay around 960px.
- Text line length should remain comfortable, roughly 70 to 80 characters.
- Use a simple grid with obvious rows and columns rather than dense dashboard composition.
- Section spacing should be generous enough for scanning but never ceremonial.

### Composition
- Transactional flows should read top-to-bottom: heading, explanatory text, form/control, primary action.
- Avoid placing unrelated actions near each other.
- Use callouts only when they help users prioritize risk or next steps.
- On mobile, stack all major content and keep the primary action easy to reach after the form.

### Accessibility & Responsiveness
- Every interactive element needs a highly visible focus state.
- Do not rely on color alone for state; pair color with text and structure.
- Preserve contrast for text, borders, and focus indicators.
- Avoid sticky overlays that hide focused content.

## 6. Motion & Interaction

- Motion should be fast, plain, and task-supportive.
- Use short hover and focus transitions only when they do not weaken contrast.
- Avoid animated decoration, parallax, spring physics, and dramatic page reveals.
- Validation feedback should appear immediately near the source of the problem.
- Respect reduced motion by keeping state changes direct and non-animated.

## 7. Voice & Brand

The voice is plain, calm, and helpful. Write for people who may be stressed, tired, using assistive technology, or trying to complete a health task quickly. Use direct verbs, familiar words, and concrete next steps.

Good NHS-style copy sounds like:
- "Continue"
- "Check your answers"
- "Book an appointment"
- "Enter your NHS number"
- "There is a problem"

Avoid cleverness, promotional claims, ambiguous labels, and unexplained clinical language.

## 8. Anti-patterns

- Do not turn NHS Blue into a decorative gradient or hero wash.
- Do not use red for general emphasis.
- Do not reduce body text to generic SaaS sizes.
- Do not hide focus rings, rely on hover-only controls, or make sticky UI cover focused content.
- Do not use disabled buttons as the default way to guide users.
- Do not create dense multi-panel dashboards for simple transactional services.
- Do not copy the NHS logo, official screenshots, or official frontend source into generated artifacts.

## 9. Agent Prompt Guide

### Quick Color Reference
- Page tint: `#f0f4f5`
- Surface: `#ffffff`
- Text: `#212b32`
- NHS Blue: `#005eb8`
- Primary action green: `#007f3b`
- Focus yellow: `#ffeb3b`
- Error red: `#d5281b`

### Example Component Prompts
- "Create an NHS-style appointment booking form with a pale grey canvas, white form panel, NHS Blue header, large 36px question heading, and a green Continue button."
- "Design a public health results page with clear summary cards, blue links, red validation messaging, and yellow/black keyboard focus states."
- "Build a mobile-first NHS transactional flow with one primary action, plain copy, and no decorative imagery."
