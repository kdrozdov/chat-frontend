import axios from '@/lib/axios'
import { Socket } from 'phoenix-socket'

const BASE_URL = process.env.BASE
const WEBSOCKET_URL = BASE_URL.replace(/(https|http)/, 'ws').replace('/api', '')

const connectToSocket = ({ commit, token }) => {
  const socket = new Socket(`${WEBSOCKET_URL}/socket`, {
    params: { token },
    logger: (kind, msg, data) => { console.log(`${kind}: ${msg}`, data) },
    onConnOpen: () => { }
  })
  socket.connect()
  commit('setSocket', { socket: socket })
}

const handleAuthentication = ({ commit, dispatch }, params) => {
  commit('setUser', params.data)
  commit('setToken', { token: params.meta.token })
  dispatch('rooms/fetchUserRooms',
    { userId: params.data.id },
    { root: true }
  )
  connectToSocket({ commit: commit, token: params.meta.token })
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
