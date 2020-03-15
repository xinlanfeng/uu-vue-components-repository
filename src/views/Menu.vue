<template>
  <div>
    <nav-bar class="menu-nav">
      <template v-slot:left>
        <div></div>
      </template>
      <template v-slot:center>
        <div>菜单</div>
      </template>
    </nav-bar>
    <tab-bar>
      <tab-bar-item path="/calendar">
        <div>日历</div>
      </tab-bar-item>
      <tab-bar-item path="/tree">
        <div>树形组件</div>
      </tab-bar-item>
      <tab-bar-item>
        <div>剪裁图片</div>
      </tab-bar-item>
      <tab-bar-item path="/weather">
        <div>实时天气</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from 'components/tabBar/TabBar'
import TabBarItem from 'components/tabBar/TabBarItem'
import NavBar from 'components/navBar/NavBar'

export default {
  name: 'Menu',
  components: {
    TabBar,
    TabBarItem,
    NavBar,
  },
}
</script>

<style scoped></style>
