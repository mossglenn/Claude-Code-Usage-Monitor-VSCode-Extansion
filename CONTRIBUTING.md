# Contributing to Claude Code Usage Monitor Extension

## Development Environment Setup

1. **Install VS Code** (version 1.108.0 or higher)

2. **Install recommended extensions** - VS Code will prompt you to install these when you open the project:
   - ESLint (`dbaeumer.vscode-eslint`)
   - Prettier (`esbenp.prettier-vscode`)
   - Extension Test Runner (`ms-vscode.extension-test-runner`)

3. **Install dependencies**:
   ```bash
   npm install
   ```

## Code Style

### Automatic Formatting

Prettier is configured to format on save. Your code will automatically be formatted when you save files.

To manually format:
```bash
npm run format
```

To check formatting without modifying files:
```bash
npm run format:check
```

### Linting

ESLint runs automatically as you type. Fix issues with:
```bash
npm run lint:fix
```

### TypeScript

- **Strict mode enabled** - All TypeScript strict checks are on
- **No implicit any** - All types must be explicit
- **No unused parameters** - Keep code clean

Run type checking:
```bash
npm run check-types
```

## Development Workflow

### Starting Development

1. Open the project in VS Code
2. Press `Cmd+Shift+B` (Mac) or `Ctrl+Shift+B` (Windows/Linux) to start watch mode
3. Press `F5` to launch the Extension Development Host

### Making Changes

1. Edit files in `src/`
2. Save - Prettier will auto-format
3. Watch mode automatically rebuilds
4. In Extension Development Host, press `Cmd+R` / `Ctrl+R` to reload

### Debugging

- Set breakpoints in your TypeScript source files
- Use `Debug Console` in VS Code to inspect variables
- Check `Debug Console` for console.log output

## Build System

We use **esbuild** for fast compilation:

- **Development builds**: Include sourcemaps for debugging
- **Production builds**: Minified, no sourcemaps, optimized

### Why esbuild?

- **10-100x faster** than webpack/tsc
- **Single file output** - Faster extension activation
- **Better user experience** - Smaller bundle size

## Testing

Run tests:
```bash
npm test
```

Run tests in watch mode:
```bash
npm run watch
```

## Pre-commit Checklist

Before committing:

- [ ] `npm run check-types` passes
- [ ] `npm run lint` shows no errors
- [ ] `npm run format:check` passes
- [ ] Extension works in Extension Development Host
- [ ] No console errors in Debug Console

## Pull Request Process

1. Create a feature branch
2. Make your changes
3. Run the pre-commit checklist
4. Write clear commit messages
5. Submit PR with description of changes

## Common Tasks

### Adding New Dependencies

```bash
# Runtime dependency
npm install <package>

# Dev dependency
npm install --save-dev <package>
```

### Creating a Release Build

```bash
# Build
npm run package

# Package as .vsix
npm run package-extension
```

### Publishing

```bash
# Login (first time only)
npx vsce login <publisher-name>

# Publish
npx vsce publish
```

## Project Structure

```
src/
├── extension.ts        # Extension entry point, activation
├── types.ts           # TypeScript type definitions
├── statusBar.ts       # Status bar item management (planned)
├── fileWatcher.ts     # Watch current.json (planned)
└── formatter.ts       # Format data for display (planned)
```

## VS Code API Resources

- [Extension API](https://code.visualstudio.com/api)
- [Extension Guides](https://code.visualstudio.com/api/extension-guides/overview)
- [UX Guidelines](https://code.visualstudio.com/api/ux-guidelines/overview)
- [API Reference](https://code.visualstudio.com/api/references/vscode-api)

## Troubleshooting

### "Extension host terminated unexpectedly"
- Check Debug Console for error messages
- Ensure all dependencies are installed
- Try cleaning: `rm -rf out/ && npm run compile`

### TypeScript errors not showing
- Run `npm run check-types` manually
- Restart TS server: `Cmd+Shift+P` → "TypeScript: Restart TS Server"

### Extension not updating
- Make sure watch mode is running
- Reload Extension Development Host: `Cmd+R` / `Ctrl+R`
- Check terminal for build errors

## Getting Help

- Check [VS Code Extension API docs](https://code.visualstudio.com/api)
- Search [VS Code Extension samples](https://github.com/microsoft/vscode-extension-samples)
- Review [existing issues](https://github.com/your-repo/issues)
