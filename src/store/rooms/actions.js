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
