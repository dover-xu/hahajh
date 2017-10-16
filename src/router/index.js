/* eslint-disable no-unused-vars */
import Vue from 'vue'
import Router from 'vue-router'
import MainContent from '@/components/MainContent'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: MainContent
      // children: [
      //   {path: '/', component: AllPush},
      //   {path: '/all/push', component: AllPush},
      //   {path: '/all/new', component: AllNew},
      //   {path: '/all/hot', component: AllHot}
      // ]
    }

  ]
})

