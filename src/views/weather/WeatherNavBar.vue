<template>
  <nav-bar>
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
}
</script>

<style scoped></style>
