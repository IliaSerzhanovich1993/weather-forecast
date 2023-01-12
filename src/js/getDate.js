import { createElement, appendElement } from './createElement';
import { dateHtml } from './getElements';

const dateToday = createElement({
  tag: 'div',
  classList: ['date-today'],
});

const timeToday = createElement({
  tag: 'div',
  classList: ['time-today'],
});
export function getDate() {
  setInterval(() => {
    const date = new Date();
    const day = date.getDate();
    const month = date.toLocaleString('en', {
      month: 'long',
    });

    const hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    if (seconds < 10) {
      seconds = `0${seconds}`;
    }
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    dateToday.textContent = `${day} ${month}`;

    timeToday.textContent = `${hours}:${minutes}:${seconds}`;
  }, 100);

  appendElement(dateHtml, dateToday);
  appendElement(dateHtml, timeToday);
}
