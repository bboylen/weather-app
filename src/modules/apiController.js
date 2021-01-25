const apiKey = 'f0b817ad35b687377f540ac2deca82df';
const selectedUnits = 'imperial';

const getCityWeather = async (city) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${selectedUnits}&appid=${apiKey}`,
    {
      mode: 'cors',
    },
  );
  const weatherData = await response.json();
  return processData(weatherData);
};

const processData = async (data) => {
  const compiledData = {
    temperature: data.main.temp,
    humidity: data.main.humidity,
    country: data.sys.country,
    weatherType: data.weather[0].main,
    weatherDescription: data.weather[0].description,
    wind: data.wind.deg,
  };
  return compiledData;
};

export { getCityWeather };
