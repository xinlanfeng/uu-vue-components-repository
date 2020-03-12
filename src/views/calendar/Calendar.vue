<template>
  <div id="calendar">
    <calendar-nav-bar></calendar-nav-bar>
    <div class="calendar-text"></div>
  </div>
</template>

<script>
import CalendarNavBar from './calComponents/CalendarNavBar'
export default {
  name: 'Calendar',
  components: {
    CalendarNavBar,
  },
}
</script>

<style scoped lang="stylus">
@import '~assets/css/varibles.styl';
#calendar {
  position: relative;
}
.calendar-text {
  position: absolute;
  top: 10vh;
  left: 10vw;
  right: 0;
  width: 80vw;
  height: 6vh;
  padding: 15px;
  color: #313131;
  font-size: 20px;

  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 0px 16px;
  transition: 0.4s;
}
</style>
