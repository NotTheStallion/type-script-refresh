import { calculateSquare, reverseString, generateGreeting, fibonacci, TodoManager } from "../core/interactive.js";
import { createElement } from "./dom.js";

export function createInteractiveSection(): HTMLElement {
  const section = createElement("section", "interactive-section");
  
  const title = createElement("h2", "", "🎮 Try It Yourself!");
  const subtitle = createElement("p", "desc", "Interact with TypeScript functions in real-time");
  
  section.appendChild(title);
  section.appendChild(subtitle);
  
  // Calculator Demo
  section.appendChild(createCalculatorDemo());
  
  // String Reverser Demo
  section.appendChild(createStringReverserDemo());
  
  // Greeting Generator Demo
  section.appendChild(createGreetingDemo());
  
  // Fibonacci Demo
  section.appendChild(createFibonacciDemo());
  
  // Todo List Demo
  section.appendChild(createTodoDemo());
  
  return section;
}

function createCalculatorDemo(): HTMLElement {
  const demo = createElement("div", "demo-box");
  
  const title = createElement("h3", "", "Square Calculator");
  const input = document.createElement("input");
  input.type = "number";
  input.placeholder = "Enter a number";
  input.className = "demo-input";
  
  const button = document.createElement("button");
  button.textContent = "Calculate Square";
  button.className = "demo-button";
  
  const result = createElement("div", "demo-result", "Result will appear here");
  
  button.addEventListener("click", () => {
    const num = parseFloat(input.value);
    if (!isNaN(num)) {
      const square = calculateSquare(num);
      result.textContent = `${num}² = ${square}`;
      result.style.color = "#007acc";
    } else {
      result.textContent = "Please enter a valid number";
      result.style.color = "#d32f2f";
    }
  });
  
  demo.appendChild(title);
  demo.appendChild(input);
  demo.appendChild(button);
  demo.appendChild(result);
  
  return demo;
}

function createStringReverserDemo(): HTMLElement {
  const demo = createElement("div", "demo-box");
  
  const title = createElement("h3", "", "String Reverser");
  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = "Enter text to reverse";
  input.className = "demo-input";
  
  const button = document.createElement("button");
  button.textContent = "Reverse";
  button.className = "demo-button";
  
  const result = createElement("div", "demo-result", "Result will appear here");
  
  button.addEventListener("click", () => {
    const text = input.value;
    if (text.trim()) {
      const reversed = reverseString(text);
      result.textContent = `"${text}" → "${reversed}"`;
      result.style.color = "#007acc";
    } else {
      result.textContent = "Please enter some text";
      result.style.color = "#d32f2f";
    }
  });
  
  demo.appendChild(title);
  demo.appendChild(input);
  demo.appendChild(button);
  demo.appendChild(result);
  
  return demo;
}

function createGreetingDemo(): HTMLElement {
  const demo = createElement("div", "demo-box");
  
  const title = createElement("h3", "", "Smart Greeting Generator");
  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = "Enter your name";
  input.className = "demo-input";
  
  const button = document.createElement("button");
  button.textContent = "Generate Greeting";
  button.className = "demo-button";
  
  const result = createElement("div", "demo-result", "Result will appear here");
  
  button.addEventListener("click", () => {
    const name = input.value.trim() || "Friend";
    const greeting = generateGreeting(name);
    result.textContent = greeting;
    result.style.color = "#007acc";
  });
  
  demo.appendChild(title);
  demo.appendChild(input);
  demo.appendChild(button);
  demo.appendChild(result);
  
  return demo;
}

function createFibonacciDemo(): HTMLElement {
  const demo = createElement("div", "demo-box");
  
  const title = createElement("h3", "", "Fibonacci Sequence");
  const input = document.createElement("input");
  input.type = "number";
  input.placeholder = "How many numbers?";
  input.className = "demo-input";
  input.min = "1";
  input.max = "20";
  
  const button = document.createElement("button");
  button.textContent = "Generate";
  button.className = "demo-button";
  
  const result = createElement("div", "demo-result", "Result will appear here");
  
  button.addEventListener("click", () => {
    const n = parseInt(input.value);
    if (n > 0 && n <= 20) {
      const sequence = fibonacci(n);
      result.textContent = `Fibonacci(${n}): [${sequence.join(", ")}]`;
      result.style.color = "#007acc";
    } else {
      result.textContent = "Please enter a number between 1 and 20";
      result.style.color = "#d32f2f";
    }
  });
  
  demo.appendChild(title);
  demo.appendChild(input);
  demo.appendChild(button);
  demo.appendChild(result);
  
  return demo;
}

function createTodoDemo(): HTMLElement {
  const demo = createElement("div", "demo-box");
  const todoManager = new TodoManager();
  
  const title = createElement("h3", "", "Todo List Manager (TypeScript Class)");
  
  const inputContainer = document.createElement("div");
  inputContainer.style.display = "flex";
  inputContainer.style.gap = "0.5em";
  inputContainer.style.marginBottom = "1em";
  
  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = "Enter a todo item";
  input.className = "demo-input";
  input.style.flex = "1";
  
  const addButton = document.createElement("button");
  addButton.textContent = "Add Todo";
  addButton.className = "demo-button";
  
  const todoList = createElement("div", "todo-list");
  
  function renderTodos() {
    todoList.innerHTML = "";
    const todos = todoManager.getTodos();
    
    if (todos.length === 0) {
      const emptyMsg = createElement("p", "empty-msg", "No todos yet. Add one above!");
      todoList.appendChild(emptyMsg);
      return;
    }
    
    todos.forEach(todo => {
      const todoItem = document.createElement("div");
      todoItem.className = "todo-item";
      
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = todo.completed;
      checkbox.addEventListener("change", () => {
        todoManager.toggleTodo(todo.id);
        renderTodos();
      });
      
      const text = document.createElement("span");
      text.textContent = todo.text;
      text.style.textDecoration = todo.completed ? "line-through" : "none";
      text.style.flex = "1";
      
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.className = "demo-button-small";
      deleteBtn.addEventListener("click", () => {
        todoManager.deleteTodo(todo.id);
        renderTodos();
      });
      
      todoItem.appendChild(checkbox);
      todoItem.appendChild(text);
      todoItem.appendChild(deleteBtn);
      todoList.appendChild(todoItem);
    });
  }
  
  addButton.addEventListener("click", () => {
    const text = input.value.trim();
    if (text) {
      todoManager.addTodo(text);
      input.value = "";
      renderTodos();
    }
  });
  
  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      addButton.click();
    }
  });
  
  inputContainer.appendChild(input);
  inputContainer.appendChild(addButton);
  
  demo.appendChild(title);
  demo.appendChild(inputContainer);
  demo.appendChild(todoList);
  
  renderTodos();
  
  return demo;
}
