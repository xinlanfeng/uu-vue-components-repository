<template>
  <div id="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
}
</script>

<style scoped>
#nav-bar {
  position: relative;
  z-index: 3;

  color: #fff;
  background-color: #3fa46a;
  font-size: 20px;
  display: flex;
  height: 44px;
  line-height: 44px;
  box-shadow: 0 -2px 8px rgba(100, 100, 100, 0.2);
}

.left,
.right {
  width: 60px;
}

.center {
  flex: 1;
  text-align: center;
}
</style>
