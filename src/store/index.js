import Vue from 'vue'
import Vuex from 'vuex'

import accounts from './accounts'
import rooms from './rooms'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    accounts,
    rooms
  }
})
