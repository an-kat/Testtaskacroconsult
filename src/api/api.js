const URL_API = 'https://api.openweathermap.org/data/2.5/weather?q=';
const KEY_IPI = 'e403a5a5f562cc6e20d38fb329ee4738';

export const icon = (value) => {
  return `http://openweathermap.org/img/wn/${value}@2x.png`
};

export const getWeather = (city) => {
  return fetch(`${URL_API}${city}&appid=${KEY_IPI}`);
};
