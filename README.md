# Claude Code Usage Monitor Extension

Display Claude AI usage statistics in your VS Code status bar.

## Features

- 📊 Real-time message count (used/limit)
- ⏱️ Countdown timer to reset
- 💰 Token and cost tracking
- 🔔 Notifications when approaching limits

## Prerequisites

This extension requires [claude-monitor](https://github.com/Maciek-roboblog/Claude-Code-Usage-Monitor) running with state file enabled:

```bash
# Install claude-monitor
uv tool install claude-monitor

# Run with state file writing enabled
claude-monitor --write-state


## State File Documentation

This extension consumes `~/.claude-monitor/reports/current.json`.

**Complete documentation**: [STATE_FILE.md](https://github.com/Maciek-roboblog/Claude-Code-Usage-Monitor/blob/main/STATE_FILE.md)

Includes:

- JSON schema and TypeScript types
- Field descriptions
- Integration examples
- Best practices

## Development

### Setup

```bash

# Install dependencies
npm install

# Compile TypeScript
npm run compile

# Run extension
# Press F5 in VS Code

```

### Type Definitions

Copy the TypeScript types from [STATE_FILE.md](https://github.com/Maciek-roboblog/Claude-Code-Usage-Monitor/blob/main/STATE_FILE.md#typescript) into `src/types.ts`.

## Architecture

```bash
    src/
    ├── extension.ts        # Entry point
    ├── types.ts           # Type definitions from STATE_FILE.md
    ├── statusBar.ts       # Status bar item management
    ├── fileWatcher.ts     # Monitor current.json for changes
    └── formatter.ts       # Format data for display

```

## License

MIT EOF

## Extension Settings

Include if your extension adds any VS Code settings through the `contributes.configuration` extension point.

For example:

This extension contributes the following settings:

- `myExtension.enable`: Enable/disable this extension.
- `myExtension.thing`: Set to `blah` to do something.

## Known Issues

Calling out known issues can help limit users opening duplicate issues against your extension.

## Release Notes

Users appreciate release notes as you update your extension.

### 1.0.0

Initial release of ...

### 1.0.1

Fixed issue #.

### 1.1.0

Added features X, Y, and Z.

---

## Following extension guidelines

Ensure that you've read through the extensions guidelines and follow the best practices for creating your extension.

- [Extension Guidelines](https://code.visualstudio.com/api/references/extension-guidelines)

## Working with Markdown

You can author your README using Visual Studio Code. Here are some useful editor keyboard shortcuts:

- Split the editor (`Cmd+\` on macOS or `Ctrl+\` on Windows and Linux).
- Toggle preview (`Shift+Cmd+V` on macOS or `Shift+Ctrl+V` on Windows and Linux).
- Press `Ctrl+Space` (Windows, Linux, macOS) to see a list of Markdown snippets.

## For more information

- [Visual Studio Code's Markdown Support](http://code.visualstudio.com/docs/languages/markdown)
- [Markdown Syntax Reference](https://help.github.com/articles/markdown-basics/)

**Enjoy!**
