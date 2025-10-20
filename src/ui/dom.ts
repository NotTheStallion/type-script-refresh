export function createElement(tag: string, className?: string, content?: string): HTMLElement {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (content) el.textContent = content;
  return el;
}
