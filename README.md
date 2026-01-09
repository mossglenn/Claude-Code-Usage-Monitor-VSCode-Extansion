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

# Start watch mode
npm run watch

# Run extension - Press F5 in VS Code
```

### Available Scripts

- **`npm run watch`** - Watch mode with both esbuild and TypeScript type checking (use this during development)
- **`npm run compile`** - Compile the extension once
- **`npm run check-types`** - Type check without emitting files
- **`npm run lint`** - Lint source files
- **`npm run lint:fix`** - Fix linting issues automatically
- **`npm run format`** - Format code with Prettier
- **`npm run format:check`** - Check if code is formatted correctly
- **`npm run package`** - Create production build (minified, no sourcemaps)
- **`npm run package-extension`** - Package extension as `.vsix` file for distribution

### Development Workflow

1. **Start watch mode**: Press `Cmd+Shift+B` (Mac) or `Ctrl+Shift+B` (Windows/Linux)
2. **Launch extension**: Press `F5` to open Extension Development Host
3. **Make changes**: Edit files in `src/` - changes automatically rebuild
4. **Reload extension**: Press `Cmd+R` (Mac) or `Ctrl+R` (Windows/Linux) in Extension Development Host

### Tools & Configuration

- **TypeScript**: Strict mode enabled for type safety
- **esbuild**: Fast bundler that compiles extension into a single file (~10-100x faster than webpack)
- **ESLint**: Code linting with TypeScript support
- **Prettier**: Automatic code formatting (formats on save)
- **vsce**: VS Code Extension packaging and publishing tool

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
