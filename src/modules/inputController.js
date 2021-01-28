import { getCityWeather } from './apiController';

const initializeListener = () => {
  const form = document.querySelector('form');
  form.addEventListener('submit', searchCity);
};

const searchCity = (e) => {
  e.preventDefault();
  clearError();
  getCityWeather(e.target[1].value)
    .then((weatherData) => {
      updateDisplay(weatherData);
    })
    .catch((err) => {
      console.log(err);
      triggerError();
    });
};

const updateDisplay = (weatherData) => {
  console.log(weatherData);
  const wind_unit = 'MPH';
  const temp_unit = 'F°';
  const cityName = document.getElementById('city-name');
  cityName.textContent = weatherData.city;
  const weatherType = document.getElementById('weather-type');
  weatherType.textContent = weatherData.weatherDescription;
  const temperature = document.getElementById('temperature');
  temperature.textContent = weatherData.temperature;
  const tempUnit = document.getElementById('temp-unit');
  tempUnit.textContent = `${temp_unit}`;
  const humidity = document.getElementById('humidity');
  humidity.textContent = `Humidity: ${weatherData.humidity}%`;
  const wind = document.getElementById('wind');
  wind.textContent = `${weatherData.wind} ${wind_unit}`;
  const feelsLike = document.getElementById('feels-like');
  feelsLike.textContent = `${weatherData.feelsLike} ${temp_unit}`;
};

const triggerError = () => {
  const err = document.getElementById('error');
  err.style.display = 'block';
};

const clearError = () => {
  const err = document.getElementById('error');
  err.style.display = 'none';
};

export default initializeListener;
