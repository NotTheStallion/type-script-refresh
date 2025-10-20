import { Topic } from "../types/topic.js";
import { createElement } from "./dom.js";

export function renderTopics(topics: Topic[], container: HTMLElement): void {
  topics.forEach(topic => {
    const section = createElement("section", "topic");

    const title = createElement("h2", "", topic.title);
    const desc = createElement("p", "desc", topic.description);
    const pre = createElement("pre", "example", topic.example);

    section.appendChild(title);
    section.appendChild(desc);
    section.appendChild(pre);

    container.appendChild(section);
  });
}
