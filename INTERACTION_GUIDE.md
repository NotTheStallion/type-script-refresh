# HTML ↔ TypeScript Interaction Demo

## How It Works

This project demonstrates several ways HTML and TypeScript interact:

### 1. **Event Listeners** (Button Clicks)

**TypeScript Side (interactive-ui.ts):**
```typescript
button.addEventListener("click", () => {
  const num = parseFloat(input.value);
  if (!isNaN(num)) {
    const square = calculateSquare(num);  // TypeScript function
    result.textContent = `${num}² = ${square}`;
  }
});
```

**HTML Side:** The button is created dynamically and attached to the DOM.

### 2. **Input Handling** (User Input → TypeScript Processing)

**Flow:**
1. User types in an `<input>` element
2. Button click triggers TypeScript event handler
3. TypeScript function processes the input (with type checking!)
4. Result is displayed back in the DOM

**Example:**
```typescript
const input = document.createElement("input");
input.type = "number";
input.className = "demo-input";

button.addEventListener("click", () => {
  const value = input.value;           // Get HTML input value
  const result = myFunction(value);    // Process with TypeScript
  resultDiv.textContent = result;      // Update HTML display
});
```

### 3. **Class State Management** (TypeScript Classes ↔ HTML UI)

**TypeScript Class:**
```typescript
export class TodoManager {
  private todos: Todo[] = [];
  
  addTodo(text: string): Todo {
    const todo: Todo = {
      id: this.nextId++,
      text,
      completed: false
    };
    this.todos.push(todo);
    return todo;
  }
  
  getTodos(): Todo[] {
    return [...this.todos];
  }
}
```

**HTML Interaction:**
```typescript
const todoManager = new TodoManager();

addButton.addEventListener("click", () => {
  const text = input.value.trim();
  if (text) {
    todoManager.addTodo(text);      // TypeScript method call
    renderTodos();                  // Update HTML display
  }
});

function renderTodos() {
  const todos = todoManager.getTodos();  // Get from TypeScript class
  todos.forEach(todo => {
    // Create HTML elements from TypeScript data
    const todoItem = document.createElement("div");
    todoItem.textContent = todo.text;
    todoList.appendChild(todoItem);
  });
}
```

### 4. **Type Safety Benefits**

**Before TypeScript:**
```javascript
function calculateSquare(num) {
  return num * num;  // What if num is a string? Runtime error!
}
```

**With TypeScript:**
```typescript
function calculateSquare(num: number): number {
  return num * num;  // Compile-time error if num isn't a number!
}

// This would fail to compile:
// calculateSquare("hello");  ❌ Error!
```

### 5. **DOM Element Creation with Type Safety**

**Utility Function (dom.ts):**
```typescript
export function createElement(
  tag: string, 
  className?: string, 
  content?: string
): HTMLElement {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (content) el.textContent = content;
  return el;
}
```

**Usage:**
```typescript
const title = createElement("h2", "title", "Hello");
const container = createElement("div", "container");
container.appendChild(title);
```

## Interactive Features in This App

### 🧮 Square Calculator
- **Input:** User enters a number
- **TypeScript:** `calculateSquare(num: number): number`
- **Output:** Displays the squared result

### 🔄 String Reverser
- **Input:** User enters text
- **TypeScript:** `reverseString(str: string): string`
- **Output:** Displays reversed string

### 👋 Greeting Generator
- **Input:** User enters name
- **TypeScript:** `generateGreeting(name: string): string`
- **Logic:** Uses current time to determine greeting
- **Output:** Time-aware personalized greeting

### 📊 Fibonacci Generator
- **Input:** How many numbers to generate
- **TypeScript:** `fibonacci(n: number): number[]`
- **Output:** Array of Fibonacci numbers

### ✅ Todo List
- **Input:** Todo text
- **TypeScript:** `TodoManager` class with full CRUD operations
- **State:** Managed in TypeScript, reflected in HTML
- **Features:** Add, toggle complete, delete todos

## Key Concepts Demonstrated

1. ✅ **Type Safety**: Catch errors at compile time, not runtime
2. ✅ **Event Handling**: TypeScript functions respond to user actions
3. ✅ **DOM Manipulation**: Create and modify HTML from TypeScript
4. ✅ **State Management**: TypeScript classes manage application state
5. ✅ **Data Flow**: User Input → TypeScript Processing → HTML Display
6. ✅ **Real-time Interaction**: Immediate feedback from TypeScript functions

## Benefits Over Plain JavaScript

- **Autocomplete**: IDE knows the types and suggests methods
- **Error Prevention**: Catch type mismatches before running code
- **Refactoring**: Safely rename functions/properties across files
- **Documentation**: Types serve as inline documentation
- **Confidence**: Know your code works before testing in browser

## Try It Yourself!

Open `http://localhost:8080` and:
1. Enter a number in the calculator
2. Type text to reverse
3. Generate a personalized greeting
4. Create a Fibonacci sequence
5. Manage a todo list with full CRUD operations

All powered by TypeScript's type-safe functions! 🎉
