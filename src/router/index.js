import Vue from 'vue'
import VueRouter from 'vue-router'
import homepage from '../view/homepage.vue'
import calculator from '../view/calculator.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'homepage',
    component: homepage
  },
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
