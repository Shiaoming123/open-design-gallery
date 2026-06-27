# MiMo Code

> Category: Terminal UI · CLI Agent
> A dark-terminal-first design system for the MiMo Code CLI agent. Monospace
> typography, keyboard-driven interaction, Xiaomi Cat mascot (ASCII art, 6
> states), and 5 switchable color themes unified by MiMo orange (#FF6900) as
> the primary accent. Built on Ink (React for terminals) and designed for
> developer productivity at the command line.

## 1. Visual Theme & Atmosphere

MiMo Code renders inside a terminal. Every pixel is a character cell. The
visual language borrows from retro terminal emulators and modern IDE
tooling — deep dark backgrounds, crisp monospace type, and a single bold
accent color (MiMo orange) that cuts through the muted palette like a
cursor blink.

- **Visual style:** terminal UI, monospace grid, ASCII art mascot.
- **Posture:** left-aligned, prompt-driven, status-bar footer.
- **Reading rhythm:** prompt `> ` → user input → response → status line.
- **Mood:** focused, technical, friendly (the cat helps), fast.

### Design principles

1. **Terminal-native.** No mouse. All interaction via keyboard. Tab toggles
   between input and output focus.
2. **Theme-aware.** Five complete palettes; every color is a semantic token.
   Switch themes at runtime without restarting.
3. **Mascot-driven personality.** The Xiaomi Cat is the brand anchor — a
   7-line ASCII sprite with 6 emotional states that animate during agent
   work.
4. **Information density.** Every line earns its space. Status lines show
   elapsed time. Spinners show progress. No decorative whitespace.
5. **Accessible in monochrome.** Semantic meaning is never conveyed by color
   alone — symbols (●, ◠, ◉, ⠋, ✓) reinforce state.

## 2. Color

All values are tokens. Five themes, nine semantic slots each. The primary
accent in every theme is called `primary` (aliased to `accent`).

### Theme Palettes

#### mimo-dark (default)

| Token      | Hex       | Role                                    |
|------------|-----------|-----------------------------------------|
| background | `#1a1b2e` | Deep navy-black terminal bg             |
| foreground | `#e0e0e0` | Default text                            |
| primary    | `#FF6900` | MiMo orange — prompts, CTAs, mascot     |
| secondary  | `#7c3aed` | Purple — secondary actions, links       |
| success    | `#10b981` | Green — completion, passing tests       |
| warning    | `#f59e0b` | Amber — caution, pending                |
| error      | `#ef4444` | Red — errors, failures                  |
| muted      | `#6b7280` | Gray — dimmed text, placeholders        |
| accent     | `#FF6900` | Alias of primary                        |

#### mimo-light

| Token      | Hex       | Role                                    |
|------------|-----------|-----------------------------------------|
| background | `#ffffff` | White terminal bg                       |
| foreground | `#1f2937` | Near-black text                         |
| primary    | `#2563eb` | Blue — prompts, CTAs                    |
| secondary  | `#7c3aed` | Purple — secondary actions              |
| success    | `#059669` | Green — completion                      |
| warning    | `#d97706` | Amber — caution                         |
| error      | `#dc2626` | Red — errors                            |
| muted      | `#9ca3af` | Gray — dimmed text                      |
| accent     | `#2563eb` | Alias of primary                        |

#### dracula

| Token      | Hex       | Role                                    |
|------------|-----------|-----------------------------------------|
| background | `#282a36` | Dracula background                      |
| foreground | `#f8f8f2` | Dracula foreground                      |
| primary    | `#bd93f9` | Purple — prompts, CTAs                  |
| secondary  | `#ff79c6` | Pink — secondary actions                |
| success    | `#50fa7b` | Green — completion                      |
| warning    | `#f1fa8c` | Yellow — caution                        |
| error      | `#ff5555` | Red — errors                            |
| muted      | `#6272a4` | Comment gray — dimmed text              |
| accent     | `#8be9fd` | Cyan — highlights                       |

#### nord

| Token      | Hex       | Role                                    |
|------------|-----------|-----------------------------------------|
| background | `#2e3440` | Nord Polar Night                         |
| foreground | `#eceff4` | Nord Snow Storm                          |
| primary    | `#88c0d0` | Frost — prompts, CTAs                   |
| secondary  | `#b48ead` | Aurora purple                            |
| success    | `#a3be8c` | Aurora green                             |
| warning    | `#ebcb8b` | Aurora yellow                            |
| error      | `#bf616a` | Aurora red                               |
| muted      | `#4c566a` | Dimmed Polar Night                       |
| accent     | `#81a1c1` | Frost accent                              |

#### solarized-dark

| Token      | Hex       | Role                                    |
|------------|-----------|-----------------------------------------|
| background | `#002b36` | Solarized base03                        |
| foreground | `#839496` | Solarized base0                          |
| primary    | `#2aa198` | Cyan — prompts, CTAs                    |
| secondary  | `#6c71c4` | Violet                                   |
| success    | `#859900` | Green                                    |
| warning    | `#b58900` | Yellow                                   |
| error      | `#dc322f` | Red                                      |
| muted      | `#586e75` | base01                                   |
| accent     | `#268bd2` | Blue                                     |

### Color rules

- `primary` is the dominant interactive color per theme. In mimo-dark it is
  MiMo orange `#FF6900`; in other themes it adapts to the palette.
- `accent` always equals `primary` in MiMo Code; both tokens exist for
  compatibility with upstream Open Design contracts.
- Status semantics: success/warning/error are used for status indicators,
  never for decorative fills.
- `muted` is for secondary information — timestamps, placeholder text,
  disabled states.
- The mascot is always rendered in the current theme's `primary` color.

## 3. Typography

### Families

- **Monospace:** `JetBrains Mono`, `Fira Code`, `Cascadia Code`,
  `SF Mono`, `Consolas`, `monospace` (system fallback).
- All text is monospace. No sans-serif, no serif. The terminal grid is
  sacred.

### Sizes

| Token          | Value     | Use                        |
|----------------|-----------|----------------------------|
| `--font-xs`    | `0.7rem`  | Muted labels, timestamps   |
| `--font-sm`    | `0.8rem`  | Status line, spinners      |
| `--font-base`  | `0.875rem`| Body text, prompt input    |
| `--font-lg`    | `1.1rem`  | Card titles, section heads |
| `--font-xl`    | `1.4rem`  | Welcome banner             |

### Weights

- `400` — default body, prompt input.
- `700` — bold emphasis, card titles, button labels.

## 4. Spacing & Layout

### Grid

All layout is character-cell based. A typical terminal is 80–120 columns
wide. The design assumes:

- **Min width:** 80 columns.
- **Comfortable:** 120 columns.
- **Max content:** no hard limit, but status lines and spinners assume ≤120.

### Spacing tokens

| Token            | Value   | Use                              |
|------------------|---------|----------------------------------|
| `--space-1`      | `4px`   | Inline padding, icon gaps        |
| `--space-2`      | `8px`   | Small gaps, list indentation     |
| `--space-3`      | `12px`  | Card padding, prompt padding     |
| `--space-4`      | `16px`  | Section gaps                     |
| `--space-6`      | `24px`  | Large section separation         |

## 5. Components

### 5.1 Xiaomi Cat Mascot

An ASCII art cat built from the MI logo deconstructed into cat anatomy:
M = ears (two arches), I = tail (vertical line), super-ellipse = face.

**Sprite dimensions:** 7 lines × ~14 characters wide.

**Six states:**

| State     | Frames | Tick (ms) | Description                          |
|-----------|--------|-----------|--------------------------------------|
| idle      | 4      | 500       | Resting, occasional look/blink       |
| thinking  | 2      | 400       | Tail swishes, ∪ mouth               |
| coding    | 2      | 300       | Faster tail, focused eyes            |
| success   | 1      | 0 (static)| Happy eyes ◠, smile                 |
| error     | 1      | 0 (static)| Shocked eyes ◉, open mouth ○        |
| reading   | 1      | 0 (static)| Half-closed eyes ─, reading pose    |

**ASCII art (idle, frame 0):**
```
   ╱╲    ╱╲
  ╱  ╲──╱  ╲
  │  ●    ● │
  │    ω    │
   ╲      ╱
    ╰────╯│
           │
```

### 5.2 PromptInput

The primary interaction surface. A single-line text input with:

- `>` prompt prefix in `primary` color, bold.
- Blinking cursor `_` in `muted` color.
- Help text: "Enter to submit, Shift+Enter for newline" (dimmed).
- Command history: ↑/↓ arrows cycle through previous inputs.
- Slash commands: `/help`, `/clear`, `/theme`, `/model` trigger special
  actions.
- Abort: Escape clears input; Ctrl+C / Ctrl+D exits.

### 5.3 StatusLine

A contextual status indicator below the prompt. Three modes:

| Status     | Display                              | Color     |
|------------|--------------------------------------|-----------|
| idle       | *(hidden)*                           | —         |
| thinking   | "Thinking … 1.2s"                    | `primary` |
| executing  | "Executing … 0.8s" + tool name       | `accent`  |

Includes a live elapsed-time counter (updates every 100ms).

### 5.4 Spinner

Three animation styles using Braille/Unicode characters:

| Style | Frames                          | Characters                    |
|-------|---------------------------------|-------------------------------|
| dots  | 10 frames                       | ⠋ ⠙ ⠹ ⠸ ⠼ ⠴ ⠦ ⠧ ⠇ ⠏       |
| line  | 4 frames                        | - \ | /                      |
| arc   | 6 frames                        | ◜ ◠ ◝ ◞ ◡ ◟                  |

Default: `dots` at 80ms per frame. Optional trailing text.

### 5.5 Button

Terminal-native buttons with rounded border style:

| Variant    | Color     | Use                        |
|------------|-----------|----------------------------|
| primary    | `#FF6900` | Main actions, confirm      |
| secondary  | `gray`    | Cancel, back               |
| danger     | `red`     | Destructive actions        |

Style: `borderStyle: "round"`, `paddingX: 1`.

### 5.6 Card

Content container with rounded border:

- Optional `title` (bold text).
- `borderStyle: "round"`, `borderColor: "gray"`.
- `paddingX: 1`, vertical column layout.

### 5.7 Table

Simple columnar data display:

- Headers: bold, joined with `  |  ` separator.
- Separator: `─` repeated to header line width.
- Rows: same column width as headers.

## 6. Interaction Patterns

### Keyboard-driven

| Key              | Action                              |
|------------------|-------------------------------------|
| Enter            | Submit input                        |
| Shift+Enter      | Insert newline                      |
| ↑ / ↓            | Command history navigation          |
| Escape           | Clear input / abort running task    |
| Ctrl+C / Ctrl+D  | Exit application                    |
| Tab              | Toggle focus between input/output   |

### Slash commands

| Command      | Action                              |
|--------------|-------------------------------------|
| `/help`      | Show available commands             |
| `/clear`     | Clear terminal output               |
| `/theme <n>` | Switch to theme `n`                 |
| `/model <m>` | Switch AI model                     |

### Theme switching

Themes are applied via `data-theme` attribute on the root element. CSS
custom properties cascade from `[data-theme="..."]` selectors. Runtime
switching is instant — no restart required.

## 7. Architecture

MiMo Code is built on **Ink** (React for CLIs). Components are standard
React functional components rendered to terminal stdout via Ink's
 reconciler.

```
src/
  components/
    Mimo/MimoAvatar.tsx        ← Cat mascot (6 states, animated)
    PromptInput/PromptInput.tsx← Text input with history
    StatusLine/StatusLine.tsx  ← Status indicator with timer
    Spinner/Spinner.tsx        ← 3 spinner styles
    design-system/
      Button.tsx               ← 3 variants
      Card.tsx                 ← Rounded container
      Table.tsx                ← Columnar data
  utils/
    themes.ts                  ← 5 themes, 9 tokens each
```
