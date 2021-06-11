import { kelvinToCelsius, celsiusToFahrenheit } from './utils.js';

function createInfoList(info) {
  let infoList = document.createElement('ul');
  infoList.setAttribute('class', 'infoList');

  let temp = document.createElement('li');
  let celsius = kelvinToCelsius(info.main.temp);
  let fahrenheit = celsiusToFahrenheit(celsius);
  temp.setAttribute('id', 'temp');
  temp.innerHTML = `Temp: ${celsius}&#176;C | ${fahrenheit}&#176;F`;

  let humidity = document.createElement('li');
  humidity.setAttribute('id', 'humidity');
  humidity.innerHTML = `Humidity: ${info.main.humidity}%`;

  let cloudiness = document.createElement('li');
  cloudiness.setAttribute('id', 'cloudiness');
  cloudiness.innerHTML = `Cloudiness: ${info.clouds.all}%`;

  infoList.appendChild(temp);
  infoList.appendChild(humidity);
  infoList.appendChild(cloudiness);

  return infoList;
}

function createWeatherImage(info) {
  let weatherImage = document.createElement('img');

  let imageLink = `http://openweathermap.org/img/wn/${info.weather[0].icon}@2x.png`;
  weatherImage.setAttribute('src', imageLink);
  weatherImage.setAttribute('alt', info.weather[0].description);

  return weatherImage;
}

function createWeatherCard(info) {
  let weatherCard = document.createElement('div');
  weatherCard.setAttribute('class', 'weatherCard');

  let locationName = document.createElement('h1');
  locationName.innerText = `${info.name}, ${info.sys.country}`;
  weatherCard.appendChild(locationName);

  let weatherDesc = document.createElement('h3');
  weatherDesc.innerText = `${info.weather[0].main}: ${info.weather[0].description}`;
  weatherCard.appendChild(weatherDesc);

  let weatherInfo = document.createElement('div');
  weatherInfo.setAttribute('class', 'weatherInfo');

  let infoList = createInfoList(info);
  weatherInfo.appendChild(infoList);

  let weatherImage = createWeatherImage(info);
  weatherInfo.appendChild(weatherImage);

  weatherCard.appendChild(weatherInfo);

  return weatherCard;
}

export default createWeatherCard;
