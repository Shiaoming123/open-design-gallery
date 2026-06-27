# Codex App Usage

Design System package guide for Open Design agents and reviewers.

## Read Order

1. Read `DESIGN.md` for the agent-native workspace model and visual guardrails.
2. Paste `tokens.css` into the first artifact `<style>` block before component CSS.
3. Use `components.manifest.json` for the compact component inventory.
4. Open `components.html` when exact shell, thread, composer, and review-pane patterns matter.
5. Inspect `source/evidence.md` for public-source status before making attribution claims.

## Design Highlights

- Visual style: calm developer workspace, dense but quiet.
- Color stance: pale sidebar rail, white work canvas, semantic review accents.
- Design intent: Make agent state, file changes, review work, and follow-up actions easy to scan for long sessions.
- Primary: `#2f6feb` for focus and selection, not broad decoration.

## Do

- Preserve the three-zone shell when showing parallel task and review workflows.
- Use red/green only for diff and status semantics.
- Keep typography compact and system-native.
- Use cards only for repeated artifacts such as changed files or tool outputs.

## Avoid

- Avoid marketing-page hero composition.
- Avoid copying official Codex screenshots or private app source.
- Avoid large decorative gradients or oversized cards.
- Avoid raw hex values outside the copied `:root` token block.
