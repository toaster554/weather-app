function kelvinToCelsius(kelvin) {
  return Math.round(kelvin - 273.15);
}

function celsiusToFahrenheit(celsius) {
  return Math.round(celsius * 1.8 + 32);
}

function getQuery() {
  return document.querySelector('#inputFocus').value;
}

async function fetchInfo(url) {
  try {
    let response = await fetch(url);
    let info = await response.json();
    return info;
  } catch (error) {
    console.error(error);
    return;
  }
}

// append target to main element if it has 2 children else update the third child
function upsertMain(mainElement, target) {
  if (mainElement.childElementCount === 2) {
    mainElement.appendChild(target);
  } else {
    let currentCard = mainElement.children[2];
    mainElement.replaceChild(target, currentCard);
  }
}

export {
  kelvinToCelsius,
  celsiusToFahrenheit,
  getQuery,
  fetchInfo,
  upsertMain,
};
