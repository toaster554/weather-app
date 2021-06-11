// const APIKey = 'd54a3a55691b212756394d0086be7503';

// let query = 'London';

// let url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&APPID=${APIKey}`;

// fetch(url)
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((error) => console.error(error));

// function logInput() {
//   let input = document.querySelector('#inputFocus');
//   if (input.value === '') {
//     console.log('No input');
//   } else {
//     console.log(input.value);
//   }
// }

import handleSearch from './searchHandler.js';

document.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    handleSearch();
  }
});
