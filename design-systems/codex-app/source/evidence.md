# Codex App Evidence

Captured on 2026-06-10.

## Public Sources

- OpenAI Developers Codex App page: https://developers.openai.com/codex/app
- OpenAI Codex repository: https://github.com/openai/codex
- GitHub discussion confirming desktop app source availability: https://github.com/openai/codex/discussions/16538

## Source Status

The public `openai/codex` repository is Apache-2.0 and contains the CLI, TUI, app server, SDKs, and documentation. The Codex Desktop App frontend source itself is not public according to the linked maintainer answer, so this package is an inspired design-system fixture rather than a source-derived port.

## Visual Evidence

The public Codex App documentation describes the app as a focused desktop experience for parallel Codex threads, with worktrees, automations, Git functionality, review and shipping flows, terminal/actions, in-app browser, skills, sidebar, and artifacts.

Public screenshots on the docs page show:

- a pale left sidebar with navigation, pinned threads, projects, and settings
- a white central thread canvas with compact top controls
- a bottom composer with model/work mode chips
- changed-file cards and task summaries inside the thread
- an optional right review pane with file headers, code rows, and red/green diff states
- small Git delta counters in the top-right app chrome

## Distillation Notes

This fixture deliberately avoids copying official bitmap screenshots or private app source. It extracts reusable UI language: three-zone desktop shell, pale rail, dense review surface, compact controls, semantic diff colors, and quiet agent status affordances.
