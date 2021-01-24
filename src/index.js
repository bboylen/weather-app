
// const apiController = () => {
//   const apiKey = 'f0b817ad35b687377f540ac2deca82df';

//   const searchCity = async (city) => {
//     const cityReturn = await fetch(`api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`, {
//       mode: 'cors'
//     });
//     console.log(cityReturn);
//   }

//   return {
//     searchCity,
//   }
// }

// console.log(apiController)
// apiController.searchCity('Houston');

const apiKey = 'f0b817ad35b687377f540ac2deca82df';

const searchCity = async (city) => {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`, {
    mode: 'cors'
  });
  const weatherData = await response.json(); 
  console.log(weatherData);
}

searchCity('Taos')