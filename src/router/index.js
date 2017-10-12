/* eslint-disable no-unused-vars */
import Vue from 'vue'
import Router from 'vue-router'
import ContentAll from '@/components/ContentAll'
import ContentPic from '@/components/ContentPic'
import ContentJape from '@/components/ContentJape'

import AllPush from '@/components/AllPush'
import AllNew from '@/components/AllNew'
import AllHot from '@/components/AllHot'

import PicPush from '@/components/PicPush'
import PicNew from '@/components/PicNew'
import PicHot from '@/components/PicHot'

import JapePush from '@/components/JapePush'
import JapeNew from '@/components/JapeNew'
import JapeHot from '@/components/JapeHot'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      // name: 'ContentAll',
      component: ContentAll,
      children: [
        {path: '/', component: AllPush},
        {path: '/all/push', component: AllPush},
        {path: '/all/new', component: AllNew},
        {path: '/all/hot', component: AllHot}
      ]
    },
    {
      path: '/pic',
      // name: 'ContentPic',
      component: ContentPic,
      children: [
        {path: '/pic/push', component: PicPush},
        {path: '/pic/new', component: PicNew},
        {path: '/pic/hot', component: PicHot}
      ]
    },
    {
      path: '/jape',
      // name: 'ContentJape',
      component: ContentJape,
      children: [
        {path: '/jape/push', component: JapePush},
        {path: '/jape/new', component: JapeNew},
        {path: '/jape/hot', component: JapeHot}
      ]
    }
  ]
})

