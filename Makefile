# TypeScript Refresher - Makefile
# Comprehensive build automation for the project

.PHONY: help install build clean serve dev watch test lint format check all setup rebuild

# Default target - show help
help:
	@echo "TypeScript Refresher - Available Commands"
	@echo "=========================================="
	@echo ""
	@echo "Setup & Installation:"
	@echo "  make setup        - Complete project setup (install + build)"
	@echo "  make install      - Install npm dependencies"
	@echo ""
	@echo "Building:"
	@echo "  make build        - Compile TypeScript to JavaScript"
	@echo "  make rebuild      - Clean and rebuild everything"
	@echo "  make watch        - Watch mode - auto-rebuild on changes"
	@echo ""
	@echo "Running:"
	@echo "  make serve        - Start HTTP server (Python)"
	@echo "  make dev          - Build and start server"
	@echo ""
	@echo "Maintenance:"
	@echo "  make clean        - Remove compiled files (dist/)"
	@echo "  make clean-all    - Remove dist/ and node_modules/"
	@echo "  make check        - Check project structure"
	@echo ""
	@echo "Utilities:"
	@echo "  make format       - Format code (if prettier installed)"
	@echo "  make tree         - Show project structure"
	@echo "  make info         - Display project information"
	@echo ""
	@echo "Combined:"
	@echo "  make all          - Install, build, and serve"
	@echo ""

# Complete setup
setup: install build
	@echo "✅ Setup complete! Run 'make serve' to start the server."

# Install npm dependencies
install:
	@echo "📦 Installing dependencies..."
	npm install
	@echo "✅ Dependencies installed!"

# Build TypeScript
build:
	@echo "🔨 Building TypeScript..."
	npm run build
	@echo "✅ Build complete!"

# Clean compiled files
clean:
	@echo "🧹 Cleaning compiled files..."
	rm -rf dist/
	@echo "✅ Clean complete!"

# Clean everything including dependencies
clean-all: clean
	@echo "🧹 Cleaning node_modules..."
	rm -rf node_modules/
	rm -f package-lock.json
	@echo "✅ Full clean complete!"

# Rebuild everything
rebuild: clean build
	@echo "✅ Rebuild complete!"

# Start HTTP server
serve:
	@echo "🚀 Starting server on http://localhost:8080"
	@echo "   Press Ctrl+C to stop"
	@python3 -m http.server 8080

# Development mode - build and serve
dev: build serve

# Watch mode - auto-rebuild on file changes
watch:
	@echo "👀 Watching for changes... (Ctrl+C to stop)"
	npx tsc --watch

# Check if required tools are installed
check:
	@echo "🔍 Checking project setup..."
	@echo ""
	@command -v node >/dev/null 2>&1 && echo "✅ Node.js: $$(node --version)" || echo "❌ Node.js not found"
	@command -v npm >/dev/null 2>&1 && echo "✅ npm: $$(npm --version)" || echo "❌ npm not found"
	@command -v python3 >/dev/null 2>&1 && echo "✅ Python3: $$(python3 --version)" || echo "❌ Python3 not found"
	@test -d node_modules && echo "✅ Dependencies installed" || echo "⚠️  Dependencies not installed (run 'make install')"
	@test -d dist && echo "✅ Project built" || echo "⚠️  Project not built (run 'make build')"
	@test -f tsconfig.json && echo "✅ TypeScript config found" || echo "❌ tsconfig.json missing"
	@test -f package.json && echo "✅ package.json found" || echo "❌ package.json missing"
	@test -f index.html && echo "✅ index.html found" || echo "❌ index.html missing"
	@echo ""

# Format code (requires prettier)
format:
	@echo "✨ Formatting code..."
	@command -v npx >/dev/null 2>&1 && npx prettier --write "src/**/*.ts" "styles/**/*.css" || echo "⚠️  Prettier not available"

# Show project tree structure
tree:
	@echo "📁 Project Structure:"
	@echo ""
	@tree -L 3 -I 'node_modules|dist' --dirsfirst || \
		(find . -not -path '*/node_modules/*' -not -path '*/dist/*' -not -path '*/.git/*' | head -50)

# Display project information
info:
	@echo "📋 TypeScript Refresher - Project Information"
	@echo "=============================================="
	@echo ""
	@test -f package.json && cat package.json | grep -E '"name"|"version"|"description"' || echo "package.json not found"
	@echo ""
	@echo "Project Location: $$(pwd)"
	@echo "TypeScript Files: $$(find src -name '*.ts' 2>/dev/null | wc -l)"
	@echo "JavaScript Files: $$(find dist -name '*.js' 2>/dev/null | wc -l)"
	@echo ""

# Run all steps: install, build, and serve
all: setup
	@echo ""
	@echo "🎉 All done! Starting server..."
	@echo ""
	@make serve

# Test build (compile without outputting to dist)
test-build:
	@echo "🧪 Testing TypeScript compilation..."
	npx tsc --noEmit
	@echo "✅ TypeScript compilation successful!"

# Verify all files exist
verify:
	@echo "🔍 Verifying project files..."
	@test -f index.html && echo "✅ index.html" || echo "❌ index.html missing"
	@test -f tsconfig.json && echo "✅ tsconfig.json" || echo "❌ tsconfig.json missing"
	@test -f package.json && echo "✅ package.json" || echo "❌ package.json missing"
	@test -f src/main.ts && echo "✅ src/main.ts" || echo "❌ src/main.ts missing"
	@test -f src/types/topic.ts && echo "✅ src/types/topic.ts" || echo "❌ src/types/topic.ts missing"
	@test -f src/data/topics.ts && echo "✅ src/data/topics.ts" || echo "❌ src/data/topics.ts missing"
	@test -f src/ui/dom.ts && echo "✅ src/ui/dom.ts" || echo "❌ src/ui/dom.ts missing"
	@test -f src/ui/renderer.ts && echo "✅ src/ui/renderer.ts" || echo "❌ src/ui/renderer.ts missing"
	@test -f src/ui/interactive-ui.ts && echo "✅ src/ui/interactive-ui.ts" || echo "❌ src/ui/interactive-ui.ts missing"
	@test -f src/core/examples.ts && echo "✅ src/core/examples.ts" || echo "❌ src/core/examples.ts missing"
	@test -f src/core/utils.ts && echo "✅ src/core/utils.ts" || echo "❌ src/core/utils.ts missing"
	@test -f src/core/interactive.ts && echo "✅ src/core/interactive.ts" || echo "❌ src/core/interactive.ts missing"
	@test -f styles/style.css && echo "✅ styles/style.css" || echo "❌ styles/style.css missing"
	@echo "✅ Verification complete!"

# Create backup
backup:
	@echo "💾 Creating backup..."
	@tar -czf typescript-refresher-backup-$$(date +%Y%m%d-%H%M%S).tar.gz \
		--exclude=node_modules \
		--exclude=dist \
		--exclude=.git \
		.
	@echo "✅ Backup created!"

# Show disk usage
size:
	@echo "💾 Project Size:"
	@du -sh . 2>/dev/null || echo "Unable to calculate size"
	@test -d node_modules && echo "node_modules: $$(du -sh node_modules 2>/dev/null | cut -f1)" || echo "node_modules: not installed"
	@test -d dist && echo "dist: $$(du -sh dist 2>/dev/null | cut -f1)" || echo "dist: not built"

# Quick start command
start: build serve

# Production build (same as build for now, but could be optimized)
prod: clean build
	@echo "✅ Production build complete!"
