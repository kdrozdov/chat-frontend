import axios from '@/lib/axios'

export const setToken = (state, params) => {
  window.localStorage.setItem('slacker_auth_token', params.token)
  axios.defaults.headers.common['Authorization'] = `Bearer: ${params.token}`
  state.token = params.token
}

export const removeSession = (state, params) => {
  window.localStorage.removeItem('slacker_auth_token')
  axios.defaults.headers.common['Authorization'] = null
  state.token = null
  state.username = null
  state.socket = null
}

export const setUser = (state, params) => {
  state.username = params.username
}

export const setSocket = (state, params) => {
  state.socket = params.socket
}
