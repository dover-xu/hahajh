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
      name: 'Content',
      component: ContentAll,
      children: [
        {path: '/', component: AllPush},
        {path: '/all/new', component: AllNew},
        {path: '/all/hot', component: AllHot}
      ]
    },
    {
      path: '/pic',
      name: 'Content',
      component: ContentPic,
      children: [
        {path: '/', component: PicPush},
        {path: '/pic/new', component: PicNew},
        {path: '/pic/hot', component: PicHot}
      ]
    },
    {
      path: '/jape',
      name: 'Content',
      component: ContentJape,
      children: [
        {path: '/', component: JapePush},
        {path: '/jape/new', component: JapeNew},
        {path: '/jape/hot', component: JapeHot}
      ]
    }
  ]
})

