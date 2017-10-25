import * as actions from './actions'
import * as getters from './getters'
import * as mutations from './mutations'

export default {
  namespaced: true,

  state: {
    token: window.localStorage.getItem('slacker_auth_token'),
    username: null,
    socket: null
  },

  actions,
  getters,
  mutations
}
