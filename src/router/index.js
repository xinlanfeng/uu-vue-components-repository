import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/menu'
  }, {
    path: '/menu',
    component: () => import('../views/Menu.vue')
  },
  {
    path: "/weather",
    component: () => import('../views/weather/Weather.vue')
  },
  {
    path: '/calendar',
    component: () => import('../views/calendar/Calendar.vue')
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

export default router
