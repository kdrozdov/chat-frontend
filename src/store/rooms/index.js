import * as actions from './actions'
import * as mutations from './mutations'

export default {
  namespaced: true,

  state: {
    all: [],
    userRooms: [],
    channel: null,
    currentRoom: null,
    messages: []
  },

  actions,
  mutations
}
