// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import global_ from '@/components/Global'
// import '../static/bootstrap/css/bootstrap.min.css'
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

