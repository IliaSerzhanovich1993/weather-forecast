import { firstDayWeatherAppend, fiveDayWeatherForecastAppend } from './dom';
import { clearPreviousWeather } from './clearPreviousWeather';
import { getElementFromLocalStorage } from './saveToLocalStorage';
import { search } from './getElements';

export function getElementFromSidebar() {
  const elementFromSidebar = document.querySelectorAll('.sidebar-city');

  elementFromSidebar.forEach((el) => {
    el.addEventListener('click', (event) => {
      let request = JSON.parse(localStorage.getItem('request'));

      const searchValue = event.target.textContent.toLowerCase().trim();
      if (event.target.classList.contains('sidebar-city')) {
        search.value = searchValue;
        firstDayWeatherAppend(searchValue);
        fiveDayWeatherForecastAppend(searchValue);
        clearPreviousWeather();
        getElementFromLocalStorage();
        getElementFromSidebar();
      }
      if (event.target.classList.contains('btn-close')) {
        const value = event.target.parentElement.textContent.trim().toLowerCase();
        const elementSidebar = event.target.parentElement;
        elementSidebar.remove();
        request = request.filter((element) => element !== value);
        localStorage.removeItem('request');
        localStorage.setItem('request', JSON.stringify(request));
      }
    });
  });
}
