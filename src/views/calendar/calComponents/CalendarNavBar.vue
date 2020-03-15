<template>
  <nav-bar class="calendar-nav">
    <template v-slot:center>
      <div>日历</div>
    </template>
  </nav-bar>
</template>

<script>
import NavBar from "components/navBar/NavBar"
export default {
  name: "CalendarNavBar",
  components: {
    NavBar
  }
}
</script>

<style scoped>
</style>
