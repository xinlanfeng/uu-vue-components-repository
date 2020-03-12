<template>
  <div id="app">
    <router-view> </router-view>
  </div>
</template>

<script>
export default {
  name: 'APP',
}
</script>

<style>
@import 'assets/css/base.css';
@import url(https://fonts.googleapis.com/css?family=Raleway);

#app {
  font-family: Raleway;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
}
</style>
