<template>
  <nav-bar class="calendar-nav">
    <template v-slot:left>
      <div class="back" @click="backClick">
        <img src="~assets/img/back.svg" alt="" />
      </div>
    </template>
    <template v-slot:center>
      <div>日历</div>
    </template>
  </nav-bar>
</template>

<script>
import NavBar from 'components/navBar/NavBar'
export default {
  name: 'CalendarNavBar',
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
