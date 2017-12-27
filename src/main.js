// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import global_ from '@/components/Global'
import axios from 'axios'
import Bus from '@/components/bus.js'

// import {getCookie} from './util/util.js'
//
// function csrfSafeMethod (method) {
//   // 这里的这些方法不需要csrf保护
//   return (/^(GET|HEAD|OPTIONS|TRACE)$/i.test(method))
// }
// var csrftoken = getCookie('csrftoken')
// 带cookie请求
axios.defaults.withCredentials = true
axios.interceptors.request.use(
  config => {
    // console.log(csrftoken)
    // if (!csrfSafeMethod(config.method) && csrftoken) {
    //   config.headers['X-CSRFToken'] = csrftoken
    // }
    config.headers['Content-Type'] = 'application/json;charset=utf-8'
    return config
  }
  // error => {
  //   return Promise.reject(error)
  // }
)

Vue.prototype.$axios = axios
Vue.prototype.Bus = Bus
Vue.prototype.GLOBAL = global_
Vue.config.productionTip = false

// const VueResource = require('vue-resource')
Vue.use(VueResource)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

