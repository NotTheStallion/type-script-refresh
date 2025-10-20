# TypeScript Refresher 🚀

An interactive educational web app that teaches core TypeScript concepts with live examples and hands-on demos.

## Features

### 📚 Learning Content
- **Basic Types**: Learn about string, number, and boolean types
- **Interfaces**: Understand object contracts and type checking
- **Classes**: Explore OOP features with inheritance
- **Generics**: Master reusable type-safe components

### 🎮 Interactive Demos
Try out TypeScript functions in real-time:

1. **Square Calculator** - Calculate squares of numbers with type-safe functions
2. **String Reverser** - Reverse text using TypeScript string manipulation
3. **Smart Greeting Generator** - Time-aware greetings with conditional logic
4. **Fibonacci Sequence** - Generate Fibonacci numbers with arrays
5. **Todo List Manager** - Full-featured todo app using TypeScript classes

## Project Structure

```
typescript-refresher/
├── src/
│   ├── main.ts              # Application entry point
│   ├── types/
│   │   └── topic.ts         # Type definitions
│   ├── data/
│   │   └── topics.ts        # Learning content data
│   ├── ui/
│   │   ├── dom.ts           # DOM utilities
│   │   ├── renderer.ts      # Topic rendering
│   │   └── interactive-ui.ts # Interactive demos UI
│   └── core/
│       ├── examples.ts      # Example functions
│       ├── utils.ts         # Utility functions
│       └── interactive.ts   # Interactive demo logic
├── styles/
│   └── style.css            # Application styles
├── dist/                    # Compiled JavaScript output
├── index.html              # HTML entry point
├── tsconfig.json           # TypeScript configuration
├── Makefile                # Build automation
└── package.json            # Dependencies and scripts
```

## Getting Started

### Prerequisites
- Node.js (v10+)
- npm
- make (optional, but recommended)
- Python 3 (for development server)

### Quick Start with Makefile (Recommended)

```bash
# Complete setup (install + build)
make setup

# Start development server
make serve
```

Then open `http://localhost:8080` in your browser.

**See all available commands:**
```bash
make help
```

### Alternative: Manual Installation

```bash
# Install dependencies
npm install

# Build TypeScript files
npm run build

# Start development server
npm run serve
# or
python3 -m http.server 8080
```

Then open `http://localhost:8080` in your browser.

## Development

### Using Makefile (Recommended)

```bash
# Build the project
make build

# Watch mode (auto-rebuild on changes)
make watch

# Start development server
make serve

# Build and serve
make dev

# Clean and rebuild
make rebuild

# Check project setup
make check

# See all commands
make help
```

**Full documentation:** See [MAKEFILE.md](MAKEFILE.md) for detailed Makefile documentation.

### Using npm Commands

```bash
# Build
npm run build

# Watch mode
npx tsc --watch

# Start server
npm run serve
# or
python3 -m http.server 8080
```

## TypeScript Configuration

The project uses strict TypeScript settings:
- Target: ES6
- Module: ES6
- Strict mode enabled
- ES Module interop

## What You'll Learn

### Type Safety
See how TypeScript catches errors at compile time:
```typescript
function calculateSquare(num: number): number {
  return num * num;
}
```

### Interfaces
Define clear contracts for objects:
```typescript
interface Todo {
  id: number;
  text: string;
  completed: boolean;
}
```

### Classes
Build reusable, object-oriented code:
```typescript
class TodoManager {
  private todos: Todo[] = [];
  addTodo(text: string): Todo { ... }
}
```

### Generics
Create flexible, type-safe functions:
```typescript
function identity<T>(value: T): T {
  return value;
}
```

## Interactive Features

All interactive demos demonstrate:
- ✅ Event handling with TypeScript
- ✅ Type-safe function calls
- ✅ DOM manipulation
- ✅ State management with classes
- ✅ Real-time user interaction

## Technologies Used

- **TypeScript 4.9.5** - Static typing for JavaScript
- **ES6 Modules** - Modern module system
- **Vanilla JavaScript** - No frameworks, pure TS/JS
- **CSS3** - Modern styling with gradients and transitions

## Browser Support

Works in all modern browsers supporting ES6:
- Chrome/Edge 51+
- Firefox 54+
- Safari 10+

## License

MIT

## Contributing

Feel free to submit issues or pull requests to improve the learning experience!

---

Made with ❤️ in TypeScript
