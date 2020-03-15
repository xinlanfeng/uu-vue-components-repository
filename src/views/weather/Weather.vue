<template>
  <div id="weather">
    <weather-nav-bar></weather-nav-bar>
    <main>
      <div class="search-box">
        <input
          type="text"
          class="search-bar"
          placeholder="请输入要查询天气的城市"
          v-model="query"
          @keyup.enter="getWeatherInfo"
        />
      </div>

      <div class="weather-wrap" v-show="isShowWeather">
        <div class="location-box">
          <div class="location">{{ location }}</div>
          <div class="date">{{ date }}</div>
        </div>

        <div class="weather-box">
          <div class="temp">{{ temp }}℃</div>
          <div class="weather">{{ weather }}</div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import WeatherNavBar from './WeatherNavBar'

import { getWeather } from 'network'

export default {
  name: 'Weather',
  components: {
    WeatherNavBar,
  },
  data() {
    return {
      query: '',
      location: '',
      temp: '',
      weather: '',
      isShowWeather: false,
    }
  },
  computed: {
    date() {
      const date = new Date()
      date.getFullYear
      date.getMonth + 1
      date.getDate
      return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`
    },
  },
  methods: {
    getWeatherInfo() {
      getWeather(this.query).then(res => {
        // console.log(res)
        res = res.data.HeWeather6[0]
        this.location = res.basic.location
        this.temp = res.now.tmp
        this.weather = res.now.cond_txt
        this.isShowWeather = true
      })
    },
  },
}
</script>

<style scope>
#weather {
  background: linear-gradient(
    to bottom,
    rgba(63, 164, 106, 0.9),
    rgba(63, 164, 106, 0.4)
  );
  transition: 0.4s;
  font-family: '微软雅黑';
}
main {
  min-height: 93.3vh;
  padding: 25px;
}
.search-box {
  width: 100%;
  margin-bottom: 10px;
}
.search-box .search-bar {
  display: block;
  width: 100%;
  padding: 15px;
  color: #313131;
  font-size: 20px;
  appearance: none;
  border: none;
  outline: none;
  background: none;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 0px 16px;
  transition: 0.4s;
}
.search-box .search-bar:focus {
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 16px 0px;
}

.location-box .location {
  color: #fff;
  font-size: 32px;
  font-weight: 500;
  text-align: center;
  text-shadow: 1px 3px rgba(0, 0, 0, 0.25);
  margin-top: 20px;
}
.location-box .date {
  color: #fff;
  font-size: 30px;
  font-weight: 100;
  text-align: center;
  margin-top: 16px;
}
.weather-box {
  text-align: center;
}
.weather-box .temp {
  display: inline-block;
  padding: 10px 25px;
  color: #fff;
  font-size: 102px;
  font-weight: 900;
  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.25);
  border-radius: 16px;
  margin: 30px 0;
  box-shadow: 3px 6px rgba(0, 0, 0, 0.25);
}
.weather-box .weather {
  color: #fff;
  font-size: 48px;
  font-weight: 700;
  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
}
</style>
