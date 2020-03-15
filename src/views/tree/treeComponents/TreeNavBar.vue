<template>
  <nav-bar>
    <template v-slot:center>
      <div>树形组件</div>
    </template>
  </nav-bar>
</template>

<script>
import NavBar from 'components/navBar/NavBar'
export default {
  name: 'TreeNavBar',
  components: {
    NavBar,
  },
}
</script>

<style></style>
