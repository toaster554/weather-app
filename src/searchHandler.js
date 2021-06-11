import { getQuery, upsertMain, fetchInfo } from './utils.js';
import createWeatherCard from './weatherCard.js';
import createError from './error.js';
import createLoadingElement from './loading.js';
import APIKey from './apiKey.js';

async function showCard(location) {
  let mainElement = document.querySelector('.s128');
  location = encodeURIComponent(location);
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${APIKey}`;
  let weatherCard;

  // show loading
  upsertMain(mainElement, createLoadingElement());

  let info = await fetchInfo(url);

  if (info === undefined) {
    return;
  } else if (info.cod !== 200) {
    weatherCard = createError(info.message);
  } else {
    weatherCard = createWeatherCard(info);
  }

  upsertMain(mainElement, weatherCard);
}

function handleSearch() {
  let location = getQuery();

  showCard(location);
}

export default handleSearch;
