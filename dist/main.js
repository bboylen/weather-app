/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
eval("\n// const apiController = () => {\n//   const apiKey = 'f0b817ad35b687377f540ac2deca82df';\n\n//   const searchCity = async (city) => {\n//     const cityReturn = await fetch(`api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`, {\n//       mode: 'cors'\n//     });\n//     console.log(cityReturn);\n//   }\n\n//   return {\n//     searchCity,\n//   }\n// }\n\n// console.log(apiController)\n// apiController.searchCity('Houston');\n\nconst apiKey = 'f0b817ad35b687377f540ac2deca82df';\n\nconst searchCity = async (city) => {\n  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`, {\n    mode: 'cors'\n  });\n  const weatherData = await response.json(); \n  console.log(weatherData);\n}\n\nsearchCity('Taos')\n\n//# sourceURL=webpack://weather-app/./src/index.js?");
/******/ })()
;