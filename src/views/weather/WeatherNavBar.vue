<template>
  <nav-bar class="weather-nav">
    <template v-slot:left>
      <div class="back" @click="backClick">
        <img src="~assets/img/back.svg" alt="" />
      </div>
    </template>
    <template v-slot:center>
      <div>实时天气</div>
    </template>
  </nav-bar>
</template>

<script>
import NavBar from 'components/navBar/NavBar'
export default {
  name: 'WeatherNavBar',
  components: {
    NavBar,
  },
  methods: {
    backClick() {
      this.$router.go(-1)
    },
  },
}
</script>

<style scoped>
.back img {
  margin-top: 11px;
  margin-left: 16px;
}
</style>
