import { form, search } from './getElements';
import { firstDayWeatherAppend, fiveDayWeatherForecastAppend } from './dom';
import { clearPreviousWeather } from './clearPreviousWeather';
import { getElementFromLocalStorage, saveToLacalStorage } from './saveToLocalStorage';
import { getElementFromSidebar } from './getWeatherFromSidebar';

export function onSubmit() {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
  });
}

export function onSearch() {
  search.addEventListener('change', (event) => {
    const searchValue = event.target.value.trim().toLowerCase();
    clearPreviousWeather();
    firstDayWeatherAppend(searchValue);
    fiveDayWeatherForecastAppend(searchValue);
    saveToLacalStorage(searchValue);
    getElementFromLocalStorage();
    getElementFromSidebar();
  });
}

export function searchOnClick() {
  search.addEventListener('click', (event) => {
    if (event.target) {
      search.value = '';
    }
  });
}
