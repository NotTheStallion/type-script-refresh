# 🎯 Complete Build & Development Guide

## Overview

This guide covers all the ways to build, develop, and run the TypeScript Refresher project.

## 🚀 Quickest Way to Get Started

### Option 1: Using Makefile (Recommended)

```bash
cd /home/the_watcher/type-script-refresh
make setup    # Install dependencies and build
make serve    # Start server
```

Open browser to: `http://localhost:8080`

### Option 2: Using npm

```bash
cd /home/the_watcher/type-script-refresh
npm install
npm run build
npm run serve
```

Open browser to: `http://localhost:8080`

---

## 📋 All Build Methods

### Method 1: Makefile Commands (Easiest)

#### Complete Setup
```bash
make setup
```
**What it does:**
1. Installs npm dependencies
2. Compiles TypeScript to JavaScript
3. Ready to run!

#### Individual Steps
```bash
# Install only
make install

# Build only
make build

# Clean and rebuild
make rebuild

# Check everything
make check
```

### Method 2: npm Scripts

```bash
# Install dependencies
npm install

# Build TypeScript
npm run build

# Start server
npm run serve
```

### Method 3: Direct Commands

```bash
# Install
/usr/bin/npm install

# Build with TypeScript compiler
npx tsc

# Or use the installed version
./node_modules/.bin/tsc

# Start server
python3 -m http.server 8080
```

---

## 🔨 Building the Project

### What Happens During Build

```
TypeScript Source (src/)
        ↓
TypeScript Compiler (tsc)
        ↓
JavaScript Output (dist/)
```

**Input:** `src/**/*.ts` files  
**Output:** `dist/**/*.js` files  
**Config:** `tsconfig.json`

### Build Options

#### 1. Standard Build
```bash
make build
# or
npm run build
```

#### 2. Clean Build (from scratch)
```bash
make rebuild
# or
rm -rf dist/ && npm run build
```

#### 3. Watch Mode (auto-rebuild)
```bash
make watch
# or
npx tsc --watch
```

**Watch mode:** Automatically recompiles when you save a `.ts` file.

#### 4. Test Build (check for errors)
```bash
make test-build
# or
npx tsc --noEmit
```

**Test build:** Checks for TypeScript errors without creating output files.

---

## 🖥️ Running the Development Server

### Method 1: Using Makefile

```bash
make serve
```
**Serves on:** `http://localhost:8080`  
**Stop with:** `Ctrl+C`

### Method 2: Using npm

```bash
npm run serve
```

### Method 3: Using Python directly

```bash
python3 -m http.server 8080
```

### Method 4: Different Port

```bash
python3 -m http.server 3000
# Then open http://localhost:3000
```

---

## 🔄 Development Workflows

### Workflow 1: Two Terminal Setup (Recommended)

**Terminal 1 - Auto-rebuild:**
```bash
make watch
```
Leave this running. It will automatically recompile when you save files.

**Terminal 2 - Server:**
```bash
make serve
```
Leave this running. It serves your files to the browser.

**Your Editor:** Make changes to TypeScript files  
**Your Browser:** Refresh to see changes

### Workflow 2: Manual Build Loop

```bash
# Edit files in your editor
# Then build:
make build

# Refresh browser to see changes
```

### Workflow 3: One Command Development

```bash
make dev
```
**What it does:**
1. Builds the project
2. Starts the server
3. Ready to view in browser

**Note:** You'll need to stop and run this again after making changes.

---

## 🧹 Cleaning & Maintenance

### Clean Compiled Files Only
```bash
make clean
# or
rm -rf dist/
```
**Removes:** `dist/` folder  
**Keeps:** `node_modules/`, source files

### Clean Everything
```bash
make clean-all
# or
rm -rf dist/ node_modules/ package-lock.json
```
**Removes:** Everything except source files  
**Then:** Run `make setup` to reinstall

### When to Clean

**Clean (`make clean`)** when:
- Build seems broken
- Want to ensure fresh compilation
- Clearing disk space (a little)

**Clean all (`make clean-all`)** when:
- Dependency issues
- Want completely fresh start
- Clearing disk space (a lot)

---

## ✅ Verification & Checking

### Check Project Setup
```bash
make check
```
**Shows:**
- ✅ Node.js installed and version
- ✅ npm installed and version
- ✅ Python3 installed and version
- ✅ Dependencies status
- ✅ Build status
- ✅ Required files present

### Verify All Files Exist
```bash
make verify
```
**Checks:**
- All TypeScript source files
- Configuration files
- HTML, CSS files

### View Project Info
```bash
make info
```
**Displays:**
- Project name and version
- Number of source files
- Number of compiled files

---

## 🐛 Troubleshooting Builds

### Problem: "make: command not found"

**Solution:** Install make
```bash
sudo apt-get install make
```

### Problem: "npm: command not found"

**Solution:** Check Node.js installation
```bash
make check
```
If Node.js isn't installed, install it.

### Problem: TypeScript compilation errors

**Solution 1:** Check for errors
```bash
make test-build
```

**Solution 2:** Clean and rebuild
```bash
make rebuild
```

**Solution 3:** Check specific file
```bash
npx tsc src/main.ts --noEmit
```

### Problem: Changes not showing in browser

**Solutions:**
```bash
# 1. Rebuild
make rebuild

# 2. Hard refresh browser
# Chrome/Firefox: Ctrl+Shift+R
# Safari: Cmd+Shift+R

# 3. Clear browser cache
# Or open in incognito/private mode
```

### Problem: Port 8080 already in use

**Solution 1:** Stop the other process
```bash
# Find what's using port 8080
lsof -i :8080
# or
netstat -tulpn | grep 8080

# Kill it
kill <PID>
```

**Solution 2:** Use a different port
```bash
python3 -m http.server 8081
# Then open http://localhost:8081
```

### Problem: Module not found errors

**Solution:** Reinstall dependencies
```bash
make clean-all
make setup
```

---

## 📊 Build Process Details

### What Gets Compiled

```
Input (src/)                    Output (dist/)
─────────────────────────────────────────────────
src/main.ts              →      dist/main.js
src/types/topic.ts       →      dist/types/topic.js
src/data/topics.ts       →      dist/data/topics.js
src/ui/dom.ts            →      dist/ui/dom.js
src/ui/renderer.ts       →      dist/ui/renderer.js
src/ui/interactive-ui.ts →      dist/ui/interactive-ui.js
src/core/utils.ts        →      dist/core/utils.js
src/core/examples.ts     →      dist/core/examples.js
src/core/interactive.ts  →      dist/core/interactive.js
```

### TypeScript Compiler Settings

From `tsconfig.json`:
```json
{
  "compilerOptions": {
    "target": "es6",           // Output ES6 JavaScript
    "module": "es6",           // Use ES6 modules
    "outDir": "dist",          // Output directory
    "rootDir": "src",          // Source directory
    "strict": true,            // Strict type checking
    "esModuleInterop": true,   // Better module compatibility
    "moduleResolution": "node" // Node-style resolution
  }
}
```

### Build Output Structure

```
dist/
├── main.js
├── core/
│   ├── examples.js
│   ├── interactive.js
│   └── utils.js
├── data/
│   └── topics.js
├── types/
│   └── topic.js
└── ui/
    ├── dom.js
    ├── interactive-ui.js
    └── renderer.js
```

---

## 🎯 Common Tasks Quick Reference

### First Time Setup
```bash
make setup
```

### Daily Development
```bash
# Terminal 1
make watch

# Terminal 2
make serve
```

### Quick Test
```bash
make dev
```

### After Git Pull
```bash
make rebuild
```

### Before Git Commit
```bash
make verify
make build
```

### Check Everything Works
```bash
make check
make verify
make build
```

### Create Backup
```bash
make backup
```

---

## 📝 Build Scripts Explained

### package.json Scripts

```json
{
  "scripts": {
    "build": "tsc",                    // Compile TypeScript
    "start": "npx serve .",            // Alternative server
    "serve": "python3 -m http.server 8080"  // Development server
  }
}
```

### Makefile Targets

See `MAKEFILE.md` for complete documentation of all make targets.

**Most used:**
- `make setup` - First time setup
- `make build` - Compile TypeScript
- `make serve` - Start server
- `make dev` - Build and serve
- `make clean` - Remove builds
- `make check` - Verify setup

---

## 🔐 Best Practices

### 1. Always Use Clean Builds When In Doubt
```bash
make rebuild
```

### 2. Check Before Building
```bash
make check    # See if everything is ready
```

### 3. Verify After Changes
```bash
make verify   # Check all files exist
make build    # Ensure it compiles
```

### 4. Use Watch Mode During Development
```bash
make watch    # Auto-rebuild on save
```

### 5. Use Consistent Commands
✅ Use: `make build`  
❌ Not: `npm run build`, `npx tsc`, etc.

**Why:** Consistency makes it easier for everyone.

---

## 🚀 Production Deployment

### Build for Production
```bash
make prod
```

### What to Deploy
Deploy these files/folders:
- `dist/` (compiled JavaScript)
- `styles/` (CSS)
- `index.html`

**Don't deploy:**
- `src/` (TypeScript source)
- `node_modules/`
- `.git/`
- Development files

---

## 📚 Additional Resources

- **Makefile Commands:** See `MAKEFILE.md`
- **Architecture:** See `ARCHITECTURE.md`
- **Features:** See `FEATURES.md`
- **Quick Start:** See `QUICKSTART.md`
- **Main Docs:** See `README.md`

---

## 🎓 Learning Path

1. **Start:** Use `make setup` and `make serve`
2. **Learn:** Read this guide to understand the build process
3. **Practice:** Make changes and rebuild
4. **Explore:** Try different build methods
5. **Master:** Create your own build workflows

---

## Summary

### Essential Commands
```bash
make setup     # First time
make build     # Compile
make serve     # Run server
make dev       # Build + serve
make watch     # Auto-rebuild
make clean     # Clean builds
make check     # Verify setup
make help      # See all commands
```

**Remember:** When in doubt, run `make help`! 🎉
