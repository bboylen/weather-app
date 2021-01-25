import { getCityWeather } from './modules/apiController';

getCityWeather('Denver')
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
  
getCityWeather('Las Vegas')
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });