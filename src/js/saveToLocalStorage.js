import { createElement, appendElement } from './createElement';
import { cities } from './getElements';

export function saveToLacalStorage(searchValue) {
  let request = JSON.parse(localStorage.getItem('request'));

  if (request === null) {
    request = [];
  }
  if (!request.includes(searchValue)) {
    request.push(searchValue);
  }
  if (request.length > 10) {
    request.shift();
  }

  localStorage.setItem('request', JSON.stringify(request));
}

export function getElementFromLocalStorage() {
  const request = JSON.parse(localStorage.getItem('request'));

  request.forEach((element) => {
    const sidebarCity = createElement({
      tag: 'button',
      classList: ['sidebar-city', 'position-relative'],
      textContent: element.toUpperCase(),
      attributes: [{ prop: 'id', value: element }],
    });

    const buttonClose = createElement({
      tag: 'button',
      classList: ['btn-close', 'display-none', 'position-absolute'],
    });
    appendElement(cities, sidebarCity);
    appendElement(sidebarCity, buttonClose);
  });
}
