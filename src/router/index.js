/* eslint-disable no-unused-vars */
import Vue from 'vue'
import Router from 'vue-router'
import MainContent from '@/components/MainContent'
import Login from '@/components/Login'
import Detail from '@/components/Detail'
import Publish from '@/components/Publish'
import Signup from '@/components/Signup'
import User from '@/components/User'
import Notice from '@/components/Notice'

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
    },
    {
      path: '/detail/:id',
      component: Detail
    },
    {
      path: '/publish',
      component: Publish
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/signup',
      component: Signup
    },
    {
      path: '/user',
      component: User
    },
    {
      name: 'notice',
      path: '/notice',
      component: Notice
    }
  ]
})

