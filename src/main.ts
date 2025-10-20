import { topics } from "./data/topics.js";
import { renderTopics } from "./ui/renderer.js";
import { greetUser } from "./core/utils.js";
import { logExample } from "./core/examples.js";
import { createInteractiveSection } from "./ui/interactive-ui.js";

const content = document.getElementById("content");

if (content) {
  const greeting = document.createElement("h3");
  greeting.textContent = greetUser("Developer");
  content.appendChild(greeting);

  // Add interactive demo section first
  content.appendChild(createInteractiveSection());

  renderTopics(topics, content);
  logExample();
}
