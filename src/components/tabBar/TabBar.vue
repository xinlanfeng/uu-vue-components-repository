<template>
  <!-- <div class="bar"> -->
  <!-- <div class="tab-item-text">菜&nbsp;&nbsp;&nbsp;&nbsp;单</div> -->
  <div id="tab-bar">
    <slot></slot>
  </div>
  <!-- </div> -->
</template>

<script>
export default {
  name: 'TabBar',
}
</script>

<style scoped>
#tab-bar {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 2vw;
  background-color: #fff;
  color: #3fa46a;
  margin-top: 6vh;
}
.tab-item-text {
  position: relative;
  height: 2vh;
  color: #3fa46a;
  font-size: 24px;
  margin: 4vh 0 0 0;
}
/* .tab-item-text::after {
  position: absolute;
  bottom: -3vh;
  left: 50%;
  margin-left: -15vw;
  content: '';
  display: block;
  width: 30vw;
  height: 0.2vh;
  background-color: #3fa46a;
} */
.bar {
  text-align: center;
  width: 100vw;
  height: 100vh;
}
</style>
