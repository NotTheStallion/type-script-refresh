// Interactive TypeScript functions that demonstrate HTML/TS interaction

export function calculateSquare(num: number): number {
  return num * num;
}

export function reverseString(str: string): string {
  return str.split('').reverse().join('');
}

export function generateGreeting(name: string): string {
  const hour = new Date().getHours();
  let timeOfDay: string;
  
  if (hour < 12) timeOfDay = "morning";
  else if (hour < 18) timeOfDay = "afternoon";
  else timeOfDay = "evening";
  
  return `Good ${timeOfDay}, ${name}! 👋`;
}

export function fibonacci(n: number): number[] {
  if (n <= 0) return [];
  if (n === 1) return [0];
  
  const sequence: number[] = [0, 1];
  for (let i = 2; i < n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence;
}

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export class TodoManager {
  private todos: Todo[] = [];
  private nextId: number = 1;

  addTodo(text: string): Todo {
    const todo: Todo = {
      id: this.nextId++,
      text,
      completed: false
    };
    this.todos.push(todo);
    return todo;
  }

  toggleTodo(id: number): void {
    const todo = this.todos.find(t => t.id === id);
    if (todo) {
      todo.completed = !todo.completed;
    }
  }

  getTodos(): Todo[] {
    return [...this.todos];
  }

  deleteTodo(id: number): void {
    this.todos = this.todos.filter(t => t.id !== id);
  }
}
