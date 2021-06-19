import Vue from 'vue'
import VueRouter from 'vue-router'
import calculator from '../view/calculator.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/calculator',
    name: 'calculator',
    component: calculator
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
