/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/apiKey.js":
/*!***********************!*\
  !*** ./src/apiKey.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst APIKey = 'd54a3a55691b212756394d0086be7503';\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (APIKey);\n\n\n//# sourceURL=webpack://weather-app/./src/apiKey.js?");

/***/ }),

/***/ "./src/error.js":
/*!**********************!*\
  !*** ./src/error.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createError(errorMessage) {\n  let errorElement = document.createElement('h1');\n  errorElement.setAttribute('class', 'error');\n\n  errorElement.innerText = errorMessage;\n\n  return errorElement;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createError);\n\n\n//# sourceURL=webpack://weather-app/./src/error.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _searchHandler_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./searchHandler.js */ \"./src/searchHandler.js\");\n// const APIKey = 'd54a3a55691b212756394d0086be7503';\n\n// let query = 'London';\n\n// let url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&APPID=${APIKey}`;\n\n// fetch(url)\n//   .then((response) => response.json())\n//   .then((response) => console.log(response))\n//   .catch((error) => console.error(error));\n\n// function logInput() {\n//   let input = document.querySelector('#inputFocus');\n//   if (input.value === '') {\n//     console.log('No input');\n//   } else {\n//     console.log(input.value);\n//   }\n// }\n\n\n\ndocument.addEventListener('keypress', (e) => {\n  if (e.key === 'Enter') {\n    (0,_searchHandler_js__WEBPACK_IMPORTED_MODULE_0__.default)();\n  }\n});\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/loading.js":
/*!************************!*\
  !*** ./src/loading.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createLoadingElement() {\n  let loadingElement = document.createElement('div');\n  loadingElement.setAttribute('class', 'lds-roller');\n\n  for (let i = 0; i < 8; i++) {\n    loadingElement.appendChild(document.createElement('div'));\n  }\n\n  return loadingElement;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createLoadingElement);\n\n\n//# sourceURL=webpack://weather-app/./src/loading.js?");

/***/ }),

/***/ "./src/searchHandler.js":
/*!******************************!*\
  !*** ./src/searchHandler.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\n/* harmony import */ var _weatherCard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weatherCard.js */ \"./src/weatherCard.js\");\n/* harmony import */ var _error_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error.js */ \"./src/error.js\");\n/* harmony import */ var _loading_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loading.js */ \"./src/loading.js\");\n/* harmony import */ var _apiKey_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./apiKey.js */ \"./src/apiKey.js\");\n\n\n\n\n\n\nasync function showCard(location) {\n  let mainElement = document.querySelector('.s128');\n  location = encodeURIComponent(location);\n  let url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${_apiKey_js__WEBPACK_IMPORTED_MODULE_4__.default}`;\n  let weatherCard;\n\n  // show loading\n  (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.upsertMain)(mainElement, (0,_loading_js__WEBPACK_IMPORTED_MODULE_3__.default)());\n\n  let info = await (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.fetchInfo)(url);\n\n  if (info === undefined) {\n    return;\n  } else if (info.cod !== 200) {\n    weatherCard = (0,_error_js__WEBPACK_IMPORTED_MODULE_2__.default)(info.message);\n  } else {\n    weatherCard = (0,_weatherCard_js__WEBPACK_IMPORTED_MODULE_1__.default)(info);\n  }\n\n  (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.upsertMain)(mainElement, weatherCard);\n}\n\nfunction handleSearch() {\n  let location = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.getQuery)();\n\n  showCard(location);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handleSearch);\n\n\n//# sourceURL=webpack://weather-app/./src/searchHandler.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"kelvinToCelsius\": () => (/* binding */ kelvinToCelsius),\n/* harmony export */   \"celsiusToFahrenheit\": () => (/* binding */ celsiusToFahrenheit),\n/* harmony export */   \"getQuery\": () => (/* binding */ getQuery),\n/* harmony export */   \"fetchInfo\": () => (/* binding */ fetchInfo),\n/* harmony export */   \"upsertMain\": () => (/* binding */ upsertMain)\n/* harmony export */ });\nfunction kelvinToCelsius(kelvin) {\n  return Math.round(kelvin - 273.15);\n}\n\nfunction celsiusToFahrenheit(celsius) {\n  return Math.round(celsius * 1.8 + 32);\n}\n\nfunction getQuery() {\n  return document.querySelector('#inputFocus').value;\n}\n\nasync function fetchInfo(url) {\n  try {\n    let response = await fetch(url);\n    let info = await response.json();\n    return info;\n  } catch (error) {\n    console.error(error);\n    return;\n  }\n}\n\n// append target to main element if it has 2 children else update the third child\nfunction upsertMain(mainElement, target) {\n  if (mainElement.childElementCount === 2) {\n    mainElement.appendChild(target);\n  } else {\n    let currentCard = mainElement.children[2];\n    mainElement.replaceChild(target, currentCard);\n  }\n}\n\n\n\n\n//# sourceURL=webpack://weather-app/./src/utils.js?");

/***/ }),

/***/ "./src/weatherCard.js":
/*!****************************!*\
  !*** ./src/weatherCard.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\n\n\nfunction createInfoList(info) {\n  let infoList = document.createElement('ul');\n  infoList.setAttribute('class', 'infoList');\n\n  let temp = document.createElement('li');\n  let celsius = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.kelvinToCelsius)(info.main.temp);\n  let fahrenheit = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.celsiusToFahrenheit)(celsius);\n  temp.setAttribute('id', 'temp');\n  temp.innerHTML = `Temp: ${celsius}&#176;C | ${fahrenheit}&#176;F`;\n\n  let humidity = document.createElement('li');\n  humidity.setAttribute('id', 'humidity');\n  humidity.innerHTML = `Humidity: ${info.main.humidity}%`;\n\n  let cloudiness = document.createElement('li');\n  cloudiness.setAttribute('id', 'cloudiness');\n  cloudiness.innerHTML = `Cloudiness: ${info.clouds.all}%`;\n\n  infoList.appendChild(temp);\n  infoList.appendChild(humidity);\n  infoList.appendChild(cloudiness);\n\n  return infoList;\n}\n\nfunction createWeatherImage(info) {\n  let weatherImage = document.createElement('img');\n\n  let imageLink = `http://openweathermap.org/img/wn/${info.weather[0].icon}@2x.png`;\n  weatherImage.setAttribute('src', imageLink);\n  weatherImage.setAttribute('alt', info.weather[0].description);\n\n  return weatherImage;\n}\n\nfunction createWeatherCard(info) {\n  let weatherCard = document.createElement('div');\n  weatherCard.setAttribute('class', 'weatherCard');\n\n  let locationName = document.createElement('h1');\n  locationName.innerText = `${info.name}, ${info.sys.country}`;\n  weatherCard.appendChild(locationName);\n\n  let weatherDesc = document.createElement('h3');\n  weatherDesc.innerText = `${info.weather[0].main}: ${info.weather[0].description}`;\n  weatherCard.appendChild(weatherDesc);\n\n  let weatherInfo = document.createElement('div');\n  weatherInfo.setAttribute('class', 'weatherInfo');\n\n  let infoList = createInfoList(info);\n  weatherInfo.appendChild(infoList);\n\n  let weatherImage = createWeatherImage(info);\n  weatherInfo.appendChild(weatherImage);\n\n  weatherCard.appendChild(weatherInfo);\n\n  return weatherCard;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createWeatherCard);\n\n\n//# sourceURL=webpack://weather-app/./src/weatherCard.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;