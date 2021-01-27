import { getCityWeather } from './modules/apiController';
import addEvent from './modules/inputController';

addEvent();

getCityWeather('Denver')
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
