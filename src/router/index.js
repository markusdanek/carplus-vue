import Vue from 'vue'
import Router from 'vue-router'
import Home_Layout from '@/components/home/layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home_Layout
    }
  ]
})
