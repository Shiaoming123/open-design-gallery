# Design System Inspired by GitLab Pajamas

> Category: Developer Tools
> GitLab product UI language. Token-led, contribution-oriented, neutral product surfaces with purple action emphasis, orange brand warmth, and dense software workflow patterns.

## 1. Visual Theme & Atmosphere

Pajamas is the design system behind GitLab product experiences. It should feel pragmatic, collaborative, and deeply rooted in developer workflows: issues, merge requests, pipelines, repositories, environments, security findings, and admin settings.

The visual language is mostly neutral and utilitarian, with brand warmth showing through purple and orange accents. GitLab interfaces are not glossy. They are structured, inspectable, and designed around objects that move through states. The best Pajamas-inspired screens make work visible: ownership, metadata, status, review needs, history, and next actions are easy to scan.

The core impression is **collaborative DevOps clarity**: tokenized surfaces, clear status semantics, compact components, and product language that helps everyone contribute.

## 2. Color Palette & Roles

Pajamas separates brand color from product UI decisions. Use neutral surfaces for the product foundation, then apply chromatic ramps deliberately.

- **Page background**: `#f7f7f8`.
- **Container surface**: `#ffffff`.
- **Purple tint surface**: `#f4f0ff` for selected, branded, or tier-adjacent emphasis.
- **Primary text**: `#18171d`.
- **Secondary text**: `#333238`.
- **Muted metadata**: `#626168`.
- **Borders**: `#dcdcde` and `#ececef`.
- **Primary accent**: `#7759c2`, based on GitLab brand purple for product emphasis.
- **Brand warmth**: use orange sparingly in illustration-like accents or visual markers, not as the default action color.
- **Success**: `#108548`.
- **Warning**: `#ab6100`.
- **Danger**: `#dd2b0e`.

The public Pajamas product color guidance describes five chromatic ramps with many steps. Preserve that idea by using color as a system of ramps, not isolated one-off hex values.

## 3. Typography Rules

Use GitLab Sans when available, with system fallbacks. The type system should feel plainspoken and highly legible at small sizes.

| Role | Size | Weight | Line height | Use |
| --- | ---: | ---: | ---: | --- |
| Display heading | 56px | 700 | 1.16 | Promotional or major empty-state moments |
| Page heading | 40px | 700 | 1.16 | Top-level product pages |
| Section heading | 32px | 700 | 1.16 | Major work areas |
| Card heading | 24px | 600 | 1.16 | Panels and object summaries |
| Body | 16px | 400 | 1.5 | Main content |
| Small UI | 14px | 400-600 | 1.5 | Labels, metadata, table cells |
| Compact label | 12px | 600 | 1.5 | Badges, counters, and helper metadata |

Contextual heading adjustments are allowed when the container already supplies hierarchy. Do not make every card title as loud as a page heading.

## 4. Component Stylings

### Buttons

Buttons should be compact, direct, and aligned to the task. Use purple emphasis for primary product actions in this distilled system. Secondary actions are white or transparent with a gray border. Destructive actions should use danger color only when the user is in the destructive context.

### Cards and Panels

Cards have subtle borders, small radius, and clear headings. Avoid excessive shadows. A card represents a work object or a section of related tasks, not decoration.

### Badges and Labels

Badges highlight system-generated metadata such as state, count, tier, or severity. They must stay near the object they describe. User-created categorization should feel like a label: compact, editable, and clearly related to issues, merge requests, epics, or projects.

### Alerts

Alerts are for system-generated events or contextual conditions that need attention. Include short, actionable copy and optional remedy actions. Use danger, warning, success, and info meanings consistently.

### Tables and Lists

Use dense rows, clear metadata, branch/repository identifiers, and status badges. Keep actions predictable and avoid burying primary workflow steps.

### Pajamas-Specific Recipes

**Merge Request Summary**
- Title, branch pair, author/reviewer metadata, pipeline status, approvals, and discussion count.
- Primary action is context-dependent: review, approve, merge, or resolve threads.
- Use badges for draft, pipeline, approvals, labels, and security state.

**Issue Triage Board**
- Compact object cards with title, labels, assignee, weight, milestone, and activity.
- Columns should communicate workflow state without heavy color fills.
- Use labels as metadata, not decorative tags.

**Pipeline Health Panel**
- Status badge, duration, commit, stage breakdown, and retry/cancel actions.
- Use green/red/warning semantics with text labels.

**Admin Settings Form**
- Sectioned settings, help text, explicit save/cancel actions, and visible validation.
- Keep irreversible or risky settings visually separated.

## 5. Layout Principles

Pajamas uses an 8px spacing system with a deliberate 12px outlier for horizontal padding in tabs, buttons, and form elements. Use the Open Design scale as 4, 8, 12, 16, 24, 32, 48, and 72.

- Structure pages around real GitLab objects and their relationships.
- Keep metadata close to the object it describes.
- Use neutral panels and small radii for product density.
- Favor lists, boards, tables, and split-detail layouts over large marketing sections.
- On tablet, keep primary object lists visible and move details below or into drawers.
- On mobile, collapse navigation and represent tables as stacked object cards with visible status and actions.

## 6. Motion & Interaction

Motion is functional: quick hover, focus, loading, collapse, modal, and drawer transitions. Use 120ms to 200ms. Avoid playful motion that distracts from code review, incident, or planning work.

Focus states must be explicit. Hover-only controls also need keyboard and touch access.

## 7. Voice & Brand

Write in a collaborative product voice. Labels should be specific: "Review changes", "Resolve thread", "Retry pipeline", "Assign reviewer", "Create issue". Copy should explain object state and next action rather than sell the feature.

## 8. Anti-patterns

- Do not turn Pajamas into a marketing-only orange and purple page.
- Do not use brand orange as the default product action color.
- Do not create badges that float away from the object they describe.
- Do not overuse shadows or rounded corners.
- Do not hide workflow state behind icons alone.
- Do not use color without text, accessible names, or adjacent context.

## 9. Agent Prompt Guide

Use this system for GitLab-like developer collaboration, DevOps dashboards, issue triage, repository management, code review, CI/CD, security findings, and admin workflows.

Example prompts:
- "Create a Pajamas-style merge request dashboard with pipeline state, approval badges, and review actions."
- "Design an issue triage board using neutral panels, compact labels, and GitLab Sans-style hierarchy."
- "Build a DevOps admin settings page with grouped controls, validation alerts, and dense object metadata."
