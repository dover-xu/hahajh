/* eslint-disable no-unused-vars */
import Vue from 'vue'
import Router from 'vue-router'
import Content from '@/components/Content'
import Hello from '@/components/Hello'
import Hello2 from '@/components/Hello2'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {path: '/', name: 'Content', component: Content},
    {path: '/pic', name: 'Hello2', component: Hello2},
    {path: '/jape', name: 'Hello', component: Hello}
  ]
})

