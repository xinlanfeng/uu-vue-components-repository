import axios from 'axios';

export const getTreeList = () => {
  return axios.get('http://localhost:5000/getTreeList');
}

export const getWeather = (location) => {
  return axios.get('https://free-api.heweather.net/s6/weather/now', {
    params: {
      location,
      key: "bd1a6d8c0c0d4ebe9744fd4bd61e36b2"
    }
  })
}
