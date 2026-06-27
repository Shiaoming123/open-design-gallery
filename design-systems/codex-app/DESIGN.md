# Design System Inspired by Codex App

> Category: Developer Tools
> Agent-native desktop workspace with pale project rails, a white task canvas, compact Git controls, review-side diff surfaces, and quiet AI status states.

## 1. Visual Theme & Atmosphere

Codex App reads as a calm command center rather than a chat app. The shell is split into durable work zones: a cool-tinted project rail, a large white thread canvas, and an optional review pane that carries code, diffs, and file state. The visual language is intentionally quiet so long agent turns, file changes, and approvals can stay readable for hours.

The main canvas uses near-white surfaces, fine grey borders, and small-radius controls. The left rail is slightly blue to separate project navigation from task content. Status and Git accents are tiny but vivid: green for net additions or successful handoffs, red for deletions, blue for selected rows and active review state, and violet only for AI/model affordances.

This system is best for agent workspaces, code review tools, automation consoles, local-dev dashboards, and multi-thread command centers where users scan state more than they admire decoration.

**Key characteristics:**
- Three-zone app shell: navigation rail, thread canvas, optional review pane
- Pale blue sidebar against white work surfaces
- Compact top bars with icon buttons, pills, and Git controls
- Soft card clusters for changed files, tool outputs, and summaries
- Code review pane with blue selection bands and red/green diff rows
- Small typography, high density, and generous blank space inside the active thread
- Accent color used as state, not as decoration

## 2. Color Palette & Roles

### Surfaces
- **App White** (`#fbfbf8`): primary application canvas.
- **Panel White** (`#ffffff`): message cards, review panes, popovers.
- **Rail Blue** (`#eaf1fb`): persistent project/thread sidebar.
- **Soft Blue Row** (`#edf4ff`): selected file, review row, or active navigation.
- **Muted Grey** (`#f2f2ef`): composer, changed-file blocks, neutral cards.

### Text
- **Ink** (`#1f2328`): primary UI text.
- **Text Secondary** (`#3f454c`): labels and filenames.
- **Muted** (`#6b727c`): metadata, timestamps, inactive controls.
- **Meta** (`#9aa1ab`): disabled controls, quiet counters.

### Accent & State
- **Codex Blue** (`#2f6feb`): focus, selected row, review affordance.
- **AI Violet** (`#7c5cff`): model chips, agent mode, spark states.
- **Added Green** (`#1a7f37`): additions, successful checks, positive deltas.
- **Deleted Red** (`#cf222e`): deletions, failing checks, destructive deltas.
- **Warning Amber** (`#bf8700`): waiting or approval-needed states.

## 3. Typography Rules

Use a system sans stack for all app UI. This is an operating surface, not an editorial site.

| Role | Size | Weight | Line height | Use |
|---|---:|---:|---:|---|
| Window title | 14px | 600 | 1.25 | active task title, project names |
| Body | 13px | 400 | 1.55 | messages, summaries |
| Small body | 12px | 400 | 1.45 | sidebars, filenames |
| Label | 11px | 500 | 1.3 | section labels, toolbar text |
| Code | 12px | 400 | 1.55 | code review, terminal snippets |

Keep text compact and readable. Avoid large hero typography, decorative display fonts, and wide marketing copy. Use tabular numbers in counters, diffs, durations, and token/status readouts.

## 4. Component Styling

### App Shell
- Left rail: `240px` desktop width, pale blue background, 1px right border.
- Main thread: white background, centered content column, top toolbar fixed to the app frame.
- Review pane: 34-40% desktop width, separate border, code-first scroll region.
- Keep panels unframed when they are structural zones; reserve cards for repeated changed files and tool output groups.

### Sidebar Items
- Height: 30-34px.
- Radius: 6px.
- Active state: soft blue row with ink text.
- Status chips sit right-aligned and stay tiny.

### Toolbar Controls
- Icon buttons are 28-32px square.
- Text pills use 6px radius, 1px borders, and small labels.
- Git/status deltas use semantic colors and tabular numerals.

### Message Cards
- Use white or muted grey blocks with 8px radius.
- File-change cards should read as compact rows, not large dashboard cards.
- Prefer disclosure rows and subtle borders over heavy shadows.

### Composer
- Full-width rounded rectangle anchored to the bottom of the thread canvas.
- Use muted background, quiet border, and small inline tool chips.
- Primary send action is a circular ink or muted icon button, not a large CTA.

### Review / Diff Pane
- Use monospace 12px type.
- Header rows can be blue-tinted for file grouping.
- Added lines use a green wash; deleted lines use a red wash.
- Line numbers should be muted and visually subordinate.

## 5. Spacing & Layout

- Base spacing: 4px grid.
- Sidebar groups: 12-16px vertical separation.
- Toolbar height: 44-48px.
- Message column: 640-760px preferred readable width.
- Diff pane: dense, full-height, with row height around 24px.
- Radius: 6px for navigation rows, 8px for cards, 12px for composer.

## 6. Motion

Motion should feel like desktop UI, not a landing page.

- Hover and selection: 120-150ms.
- Pane open/close: 180-220ms.
- Use opacity and subtle translate only.
- Avoid bouncing, parallax, large-scale transforms, or decorative loading motion.

## 7. Usage Guardrails

- Do not turn this into a marketing page. The system is for repeated work and dense state.
- Use color only for state: selection, review, model affordance, additions, deletions, warnings.
- Keep controls compact and recognizable. Use icons where possible, labels only where ambiguity would slow the user down.
- Preserve the three-zone workspace model whenever the product involves parallel tasks or review.
- If official Codex assets are unavailable, write inspired fixtures from scratch and cite public source material instead of copying screenshots.

## 8. Good Fit

- AI coding workspace
- Multi-agent task console
- Code review dashboard
- Worktree manager
- Local development assistant
- Automation monitor with logs and approvals
