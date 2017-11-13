import axios from '@/lib/axios'
import { Socket } from 'phoenix-socket'

const BASE_URL = process.env.BASE
const WEBSOCKET_URL = BASE_URL.replace(/(https|http)/, 'ws').replace('/api', '')

export const connectToSocket = ({ commit, state }) => {
  return new Promise((resolve, reject) => {
    const socket = new Socket(`${WEBSOCKET_URL}/socket`, {
      params: { token: state.token },
      logger: (kind, msg, data) => { console.log(`${kind}: ${msg}`, data) }
    })
    socket.onOpen(function () {
      commit('setSocket', { socket: socket })
      resolve()
    })
    socket.onError(function () {
      reject(new Error('Failed to connect socket'))
    })
    socket.connect()
  })
}

const handleAuthentication = ({ commit, dispatch }, params) => {
  commit('setUser', params.data)
  commit('setToken', { token: params.meta.token })
  dispatch('rooms/fetchUserRooms',
    { userId: params.data.id },
    { root: true }
  )
}

export const login = (context, params) => {
  return axios.post('/sessions', params.form)
    .then((response) => handleAuthentication(context, response.data))
}

export const logout = (context) => {
  return axios.delete('/sessions')
    .then((response) => {
      context.commit('removeSession')
    })
}

export const signup = (context, params) => {
  return axios.post('/users', params.form)
    .then((response) => handleAuthentication(context, response.data))
}

export const refreshToken = (context) => {
  return axios.post('/sessions/refresh')
    .then((response) => handleAuthentication(context, response.data))
}
