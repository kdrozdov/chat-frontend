import './lib/css'
import './lib/script'

import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import configureRouter from './router/configure'

Vue.config.productionTip = false

configureRouter(router, store)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
