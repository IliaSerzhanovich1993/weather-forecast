import { weather, days, cities } from './getElements';

export function clearPreviousWeather() {
  const weatherElements = [...weather.children];
  weatherElements.forEach((element) => {
    element.remove();
  });

  const daysElements = [...days.children];
  daysElements.forEach((element) => {
    element.remove();
  });

  const sidebarElements = [...cities.children];
  sidebarElements.forEach((element) => {
    element.remove();
  });
}
