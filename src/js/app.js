import { onSearch, onSubmit, searchOnClick } from './addListeners';
import { firstDayWeatherAppend, fiveDayWeatherForecastAppend } from './dom';
import { getDate } from './getDate';
import { getElementFromLocalStorage } from './saveToLocalStorage';
import { getElementFromSidebar } from './getWeatherFromSidebar';

export function appRun() {
  const searchValue = 'minsk';
  onSubmit();
  searchOnClick();
  firstDayWeatherAppend(searchValue);
  fiveDayWeatherForecastAppend(searchValue);
  onSearch();
  getDate();
  getElementFromLocalStorage();
  getElementFromSidebar();
}
