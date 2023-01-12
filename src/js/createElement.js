export function createElement({ tag, classList, attributes, textContent }) {
  const element = document.createElement(tag);

  if (classList?.length) {
    element.classList.add(...classList);
  }

  if (attributes?.length) {
    attributes.forEach(({ prop, value }) => {
      element.setAttribute(prop, value);
    });
  }

  if (textContent) {
    element.textContent = textContent;
  }

  return element;
}

export function appendElement(element, appendedElement) {
  element.append(appendedElement);
}
