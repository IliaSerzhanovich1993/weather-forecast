import { getFirstWeather, everyElement } from './server';
import { createElement, appendElement } from './createElement';

export async function firstDayWeatherAppend(searchValue) {
  try {
    const data = await getFirstWeather('weather', searchValue);
    const { icon } = data.weather[0];
    const city = data.name;
    const { country } = data.sys;

    const { temp } = data.main;
    const tempMax = data.main.temp_max;
    const tempMin = data.main.temp_min;
    const feelsLike = data.main.feels_like;
    const weatherType = data.weather[0].description;
    const weatherImage = await fetch(`https://openweathermap.org/img/wn/${icon}@2x.png`);

    const cityCountry = createElement({
      tag: 'div',
      classList: ['temperature'],
      textContent: `${city}, ${country}`,
    }); //

    const cityTemperature = createElement({
      tag: 'div',
      classList: ['city-temperature'],
      textContent: `${temp}℃ `,
    });

    const image = createElement({
      tag: 'img',
      classList: ['image'],
      attributes: [{ prop: 'src', value: weatherImage.url }],
    });

    const feel = createElement({
      tag: 'div',
      classList: ['feels-like'],
      textContent: `Feel's Like ${feelsLike}℃`,
    });

    const maxMin = createElement({
      tag: 'div',
      classList: ['feels-like'],
      textContent: `Min Temperature ${tempMin}℃ Max Temperature ${tempMax}℃`,
    });

    const characterWeather = createElement({
      tag: 'div',
      classList: ['feels-like'],
      textContent: `${weatherType}`,
    });

    const weatherHtml = document.getElementById('weather');
    appendElement(weatherHtml, cityCountry);
    appendElement(weatherHtml, cityTemperature);
    appendElement(weatherHtml, feel);
    appendElement(weatherHtml, maxMin);
    appendElement(weatherHtml, characterWeather);
    appendElement(cityTemperature, image);
  } catch (error) {
    const request = JSON.parse(localStorage.getItem('request'));
    if (request.includes(searchValue)) {
      localStorage.removeItem('request');
      request.pop();
      localStorage.setItem('request', JSON.stringify(request));
      const city = document.getElementById(`${searchValue}`);
      city.remove();
    }
    setTimeout(() => {
      alert('Enter valid city in English language');
    }, 1000);
  }
}

export async function fiveDayWeatherForecastAppend(searchValue) {
  const data = await getFirstWeather('forecast', searchValue);
  const dataListArray = [...data.list];
  const newArr = everyElement(dataListArray, 8);
  newArr.forEach(async (element) => {
    const { temp } = element.main;
    const { icon } = element.weather[0];
    const timeData = new Date(element.dt_txt);
    const timeDay = timeData.getDate();
    const timeMonth = timeData.toLocaleString('en', {
      month: 'long',
    });

    const daysWeatherHtml = document.getElementById('days');
    const weatherImageDays = await fetch(`https://openweathermap.org/img/wn/${icon}@2x.png`);

    const dayContainer = createElement({
      tag: 'div',
      classList: ['day-container'],
    });

    const time = createElement({
      tag: 'div',
      classList: ['days-time'],
      textContent: `${timeDay} ${timeMonth}`,
    });

    const day = createElement({
      tag: 'div',
      classList: ['day-temperature'],
      textContent: `${temp}℃`,
    });

    const image = createElement({
      tag: 'img',
      classList: ['image'],
      attributes: [{ prop: 'src', value: weatherImageDays.url }],
    });
    appendElement(daysWeatherHtml, dayContainer);
    appendElement(dayContainer, time);
    appendElement(dayContainer, day);
    appendElement(day, image);
  });
}
