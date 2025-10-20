# Makefile Documentation

## Overview

The Makefile provides a simple and consistent way to manage the TypeScript Refresher project. Instead of remembering multiple npm and shell commands, you can use simple `make` commands.

## Quick Start

```bash
# First time setup (installs dependencies and builds)
make setup

# Start the development server
make serve
```

That's it! Open `http://localhost:8080` in your browser.

## All Available Commands

### 🚀 Setup & Installation

#### `make setup`
Complete project setup - installs dependencies and builds the project.
```bash
make setup
```
**What it does:**
1. Runs `npm install` to install dependencies
2. Runs `npm run build` to compile TypeScript
3. Displays success message

#### `make install`
Only install npm dependencies (doesn't build).
```bash
make install
```

### 🔨 Building

#### `make build`
Compile TypeScript files to JavaScript.
```bash
make build
```
**What it does:**
- Runs `npm run build` (which runs `tsc`)
- Compiles all `src/**/*.ts` files to `dist/**/*.js`

#### `make rebuild`
Clean and rebuild everything from scratch.
```bash
make rebuild
```
**What it does:**
1. Removes `dist/` folder
2. Recompiles all TypeScript files

#### `make watch`
Watch mode - automatically rebuilds when files change.
```bash
make watch
```
**Use case:** Keep this running in a terminal while developing. Save a TypeScript file and it will automatically recompile.

**Stop with:** `Ctrl+C`

### 🌐 Running

#### `make serve`
Start HTTP server on port 8080.
```bash
make serve
```
**What it does:**
- Starts Python's built-in HTTP server
- Serves the app at `http://localhost:8080`

**Stop with:** `Ctrl+C`

#### `make dev`
Build and start server (development mode).
```bash
make dev
```
**What it does:**
1. Builds the project
2. Starts the server
3. Opens app at `http://localhost:8080`

#### `make start`
Quick start - same as `make dev`.
```bash
make start
```

### 🧹 Maintenance

#### `make clean`
Remove compiled JavaScript files.
```bash
make clean
```
**What it does:**
- Deletes the `dist/` folder
- Keeps `node_modules/` and source files

#### `make clean-all`
Remove everything (compiled files AND dependencies).
```bash
make clean-all
```
**What it does:**
- Deletes `dist/` folder
- Deletes `node_modules/` folder
- Deletes `package-lock.json`

**When to use:** When you want a completely fresh start or to save disk space.

#### `make check`
Check if all required tools are installed and project is set up correctly.
```bash
make check
```
**What it displays:**
- ✅ Node.js version
- ✅ npm version
- ✅ Python3 version
- ✅ Dependencies status
- ✅ Build status
- ✅ Required files presence

### 🔍 Utilities

#### `make verify`
Verify all project files exist.
```bash
make verify
```
**What it checks:**
- All TypeScript source files
- Configuration files
- HTML and CSS files

#### `make info`
Display project information.
```bash
make info
```
**What it shows:**
- Project name, version, description
- Project location
- Number of TypeScript files
- Number of compiled JavaScript files

#### `make tree`
Show project structure as a tree.
```bash
make tree
```
**Output:** Visual tree of folders and files (excludes `node_modules` and `dist`).

#### `make format`
Format code with Prettier (if installed).
```bash
make format
```
**Note:** Requires Prettier to be installed.

#### `make size`
Show disk usage of the project.
```bash
make size
```

#### `make backup`
Create a timestamped backup of the project.
```bash
make backup
```
**Creates:** `typescript-refresher-backup-YYYYMMDD-HHMMSS.tar.gz`

### 🎯 Combined Commands

#### `make all`
Complete workflow - setup and start server.
```bash
make all
```
**What it does:**
1. Installs dependencies
2. Builds the project
3. Starts the server

**Perfect for:** First time setup or getting back to work after a break.

#### `make prod`
Production build - clean and build optimized version.
```bash
make prod
```

## Common Workflows

### Starting Fresh
```bash
make clean-all   # Remove everything
make setup       # Install and build
make serve       # Start server
```

### Daily Development
```bash
# Terminal 1: Auto-rebuild on changes
make watch

# Terminal 2: Serve the app
make serve

# Edit files in your IDE
# Browser will reload to see changes
```

### Quick Development Session
```bash
make dev   # Build and serve in one command
```

### After Pulling Changes
```bash
make rebuild   # Clean and rebuild
make serve     # Start server
```

### Checking Everything Works
```bash
make check     # Check tools
make verify    # Check files
make info      # View project info
```

## Troubleshooting

### "make: command not found"
**Problem:** Make is not installed.

**Solution (Ubuntu/Debian):**
```bash
sudo apt-get install make
```

### "npm: command not found" when running make build
**Problem:** Node.js/npm not installed.

**Solution:** Run `make check` to see what's missing.

### "Port 8080 already in use"
**Problem:** Another process is using port 8080.

**Solution:** 
1. Stop the other process
2. Or modify Makefile's serve command to use a different port:
   ```makefile
   serve:
       python3 -m http.server 8081
   ```

### Build fails but no clear error
**Solution:**
```bash
make clean      # Clean old builds
make verify     # Check all files exist
make build      # Try building again
```

### Changes not showing in browser
**Solution:**
```bash
make rebuild    # Force full rebuild
# Then hard refresh browser (Ctrl+Shift+R)
```

## Tips & Tricks

### 1. **Always use `make` commands instead of npm directly**
❌ Don't: `npm run build`  
✅ Do: `make build`

**Why:** Consistent commands across all projects, easier to remember.

### 2. **Use `make help` when you forget a command**
```bash
make help
```

### 3. **Check before building**
```bash
make check   # See if everything is set up
```

### 4. **Keep watch running while developing**
```bash
make watch   # In one terminal
make serve   # In another terminal
```

### 5. **Clean builds solve many problems**
```bash
make rebuild   # When in doubt, rebuild
```

## Environment Variables

You can customize behavior with environment variables:

```bash
# Use a different port
PORT=3000 make serve

# Use a different compiler
TSC=./node_modules/.bin/tsc make build
```

## Adding Your Own Commands

To add a new command, edit the Makefile:

```makefile
# Your custom command
my-command:
	@echo "Running my command..."
	# Add your commands here
	@echo "✅ Done!"
```

Then use it:
```bash
make my-command
```

## Comparison with npm Commands

| Make Command | npm Equivalent | Purpose |
|--------------|---------------|---------|
| `make build` | `npm run build` | Compile TypeScript |
| `make serve` | `npm run serve` | Start server |
| `make install` | `npm install` | Install dependencies |
| `make clean` | `rm -rf dist/` | Remove builds |
| `make watch` | `npx tsc --watch` | Auto-rebuild |

## Best Practices

1. **Always run `make check` after cloning the repo**
2. **Use `make setup` for first-time setup**
3. **Use `make rebuild` when something seems wrong**
4. **Use `make dev` for quick development**
5. **Run `make verify` before committing code**

## Integration with Other Tools

### Git Hooks
Add to `.git/hooks/pre-commit`:
```bash
#!/bin/bash
make verify && make build
```

### CI/CD Pipeline
```yaml
# Example GitHub Actions
steps:
  - run: make setup
  - run: make verify
  - run: make test-build
```

### Docker
```dockerfile
FROM node:14
WORKDIR /app
COPY . .
RUN make setup
CMD make serve
```

## Summary

The Makefile makes your life easier by:
- ✅ Providing consistent commands
- ✅ Hiding complexity
- ✅ Automating common tasks
- ✅ Self-documenting with `make help`
- ✅ Cross-platform compatibility

**Remember:** When in doubt, run `make help`! 🚀
