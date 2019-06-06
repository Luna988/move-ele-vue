import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home/home'
import profile from '@/components/profile/profile'
import login from '@/components/login/login'
import city from '@/components/city/city'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/index.html',
      redirect: '/'
    },
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/profile',
      component: profile
    },
    {
      path: '/login',
      component: login
    },
    {
      path: '/city',
      component: city
    }
  ]
})
