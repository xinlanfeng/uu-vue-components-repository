<template>
  <div class="tab-bar-item" @click="itemClick">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  props: {
    path: String,
  },
  methods: {
    itemClick() {
      this.$router.push(this.path)
    },
  },
}
</script>

<style scoped>
.tab-bar-item {
  width: 46vw;
  text-align: center;
  transition: 0.4s;
  color: #fff;
  font-size: 20px;
  padding: 3vw 0;
  margin: 0 0 2vw 0;
  background-color: #3fa46a;
}
.tab-bar-item:active {
  background-color: #ffffff;
  color: #3fa46a;
  border: 2px solid #3fa46a;
}
</style>
