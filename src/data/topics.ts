import { Topic } from "../types/topic.js";

export const topics: Topic[] = [
  {
    title: "Basic Types",
    description: "TypeScript introduces strict typing to JavaScript variables, ensuring safer code.",
    example: `let name: string = "Alice";
let age: number = 30;
let isAdmin: boolean = true;`
  },
  {
    title: "Interfaces",
    description: "Interfaces define contracts for objects, improving consistency and readability.",
    example: `interface User {
  id: number;
  username: string;
  active: boolean;
}

const user: User = { id: 1, username: "JohnDoe", active: true };`
  },
  {
    title: "Classes",
    description: "TypeScript supports OOP features like classes, inheritance, and access modifiers.",
    example: `class Animal {
  constructor(public name: string) {}
  speak() { console.log(\`\${this.name} makes a sound.\`); }
}

class Dog extends Animal {
  speak() { console.log(\`\${this.name} barks.\`); }
}

const dog = new Dog("Rex");
dog.speak();`
  },
  {
    title: "Generics",
    description: "Generics allow reusable components that work with any data type.",
    example: `function identity<T>(value: T): T {
  return value;
}

let num = identity<number>(42);
let str = identity<string>("Hello");`
  },
];
