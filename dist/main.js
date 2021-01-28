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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_inputController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/inputController */ \"./src/modules/inputController.js\");\n\n\n(0,_modules_inputController__WEBPACK_IMPORTED_MODULE_0__.default)();\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/modules/apiController.js":
/*!**************************************!*\
  !*** ./src/modules/apiController.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getCityWeather\": () => /* binding */ getCityWeather\n/* harmony export */ });\nconst apiKey = 'f0b817ad35b687377f540ac2deca82df';\nconst selectedUnits = 'imperial';\n\nconst getCityWeather = async (city) => {\n  const response = await fetch(\n    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${selectedUnits}&appid=${apiKey}`,\n    {\n      mode: 'cors',\n    },\n  );\n  const weatherData = await response.json();\n  return processData(weatherData);\n};\n\nconst processData = async (data) => {\n  const compiledData = {\n    city: data.name,\n    temperature: data.main.temp,\n    humidity: data.main.humidity,\n    country: data.sys.country,\n    weatherType: data.weather[0].main,\n    weatherDescription: data.weather[0].description,\n    wind: data.wind.speed,\n    feelsLike: data.main.feels_like,\n  };\n  return compiledData;\n};\n\n\n\n\n//# sourceURL=webpack://weather-app/./src/modules/apiController.js?");

/***/ }),

/***/ "./src/modules/inputController.js":
/*!****************************************!*\
  !*** ./src/modules/inputController.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _apiController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiController */ \"./src/modules/apiController.js\");\n\n\nconst initializeListener = () => {\n  const form = document.querySelector('form');\n  form.addEventListener('submit', searchCity);\n};\n\nconst searchCity = (e) => {\n  e.preventDefault();\n  clearError();\n  (0,_apiController__WEBPACK_IMPORTED_MODULE_0__.getCityWeather)(e.target[1].value)\n    .then((weatherData) => {\n      updateDisplay(weatherData);\n    })\n    .catch((err) => {\n      console.log(err);\n      triggerError();\n    });\n};\n\nconst updateDisplay = (weatherData) => {\n  console.log(weatherData);\n  const wind_unit = 'MPH';\n  const temp_unit = 'F°';\n  const cityName = document.getElementById('city-name');\n  cityName.textContent = weatherData.city;\n  const weatherType = document.getElementById('weather-type');\n  weatherType.textContent = weatherData.weatherDescription;\n  const temperature = document.getElementById('temperature');\n  temperature.textContent = weatherData.temperature;\n  const tempUnit = document.getElementById('temp-unit');\n  tempUnit.textContent = `${temp_unit}`;\n  const humidity = document.getElementById('humidity');\n  humidity.textContent = `Humidity: ${weatherData.humidity}%`;\n  const wind = document.getElementById('wind');\n  wind.textContent = `${weatherData.wind} ${wind_unit}`;\n  const feelsLike = document.getElementById('feels-like');\n  feelsLike.textContent = `${weatherData.feelsLike} ${temp_unit}`;\n};\n\nconst triggerError = () => {\n  const err = document.getElementById('error');\n  err.style.display = 'block';\n};\n\nconst clearError = () => {\n  const err = document.getElementById('error');\n  err.style.display = 'none';\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initializeListener);\n\n\n//# sourceURL=webpack://weather-app/./src/modules/inputController.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;