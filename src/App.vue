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
@import 'assets/css/normalize.css';
@import 'assets/css/base.css';

#app {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
}
</style>
