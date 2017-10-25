import axios from '@/lib/axios'

export const fetchAll = ({ commit }) => {
  return axios.get('/rooms')
    .then((response) => {
      commit('setRooms', { rooms: response.data.data })
    })
}

export const fetchUserRooms = ({ commit }, params) => {
  return axios.get(`/users/${params.userId}/rooms`)
    .then((response) => {
      commit('setUserRooms', { rooms: response.data.data })
    })
}

export const create = ({ commit }, params) => {
  return axios.post(`/rooms`, { room: params.form })
    .then((response) => {
      commit('addRoom', { room: response.data.data })
    })
}

export const join = ({ commit }, params) => {
  return axios.post(`/rooms/${params.roomId}/join`)
    .then((response) => {
      commit('joinRoom', { room: response.data.data })
    })
}

export const connectToChannel = ({ commit, rootState }, params) => {
  return new Promise((resolve, reject) => {
    if (!rootState.accounts.socket) { reject(new Error('Socket not found')) }
    let channel = rootState.accounts.socket.channel(`rooms:${params.roomId}`)

    channel.on('message_created', (message) => {
      commit('addMessage', { message: message })
    })

    channel.join()
      .receive('ok', (response) => {
        commit('setChannel', { channel: channel })
        commit('setCurrentRoom', { currentRoom: response.room })
        commit('setMessages', { messages: response.messages })
        resolve(response)
      })
      .receive('error', ({ reason }) => {
        reject(new Error(reason))
      })
  })
}

export const leaveChannel = ({ commit, state }) => {
  if (state.channel) {
    state.channel.leave()
    commit('leaveRoom')
  }
  return new Promise((resolve) => resolve())
}

export const createMessage = ({ commit, state }, params) => {
  return new Promise((resolve, reject) => {
    state.channel.push('new_message', params.form)
      .receive('ok', () => resolve())
      .receive('error', () => reject(new Error()))
  })
}
