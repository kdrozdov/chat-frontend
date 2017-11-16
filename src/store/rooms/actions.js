import axios from '@/lib/axios'
import { playSound } from '@/lib/utils'
import { Presence } from 'phoenix-socket'

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
    let presences = {}

    channel.on('presence_state', (state) => {
      presences = Presence.syncState(presences, state)
      syncPresentUsers(commit, presences)
    })

    channel.on('presence_diff', (diff) => {
      presences = Presence.syncDiff(presences, diff)
      syncPresentUsers(commit, presences)
    })

    channel.on('message_created', (message) => {
      playSound()
      commit('addNewMessage', { message: message })
    })

    channel.on('topic_updated', (topic) => {
      commit('updateTopic', topic)
    })

    channel.join()
      .receive('ok', (response) => {
        commit('connectedToChannel', { channel: channel, ...response })
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

export const updateTopic = ({ commit, state }, params) => {
  return new Promise((resolve, reject) => {
    state.channel.push('update_topic', params.form)
      .receive('ok', () => resolve())
      .receive('error', () => reject(new Error()))
  })
}

export const createMessage = ({ commit, state }, params) => {
  return new Promise((resolve, reject) => {
    state.channel.push('new_message', params.form)
      .receive('ok', () => resolve())
      .receive('error', () => reject(new Error()))
  })
}

const syncPresentUsers = (commit, presences) => {
  let presentUsers = []
  Presence.list(presences, (id, { metas: [first] }) => first.user)
          .map(user => presentUsers.push(user))
  commit('setPresentUsers', { presentUsers: presentUsers })
}

export const loadOlderMessages = ({ commit, state }, params) => {
  let dateMessages = state.messages[state.messages.length - 1]
  if (!dateMessages) { return }
  let lastSeenId = dateMessages.values[0].id

  let url = `/rooms/${state.currentRoom.id}/messages?last_seen_id=${lastSeenId}`
  commit('setLoadingOlderMessages', { loadingOlderMessages: true })
  return axios.get(url)
    .then((response) => {
      commit('addOlderMessages', { messages: response.data.data })
      commit('setLoadingOlderMessages', { loadingOlderMessages: false })
    })
}
