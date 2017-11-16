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
  state.email_hash = null
  state.socket = null
}

export const setUser = (state, params) => {
  state.username = params.username
  state.email_hash = params.email_hash
}

export const setSocket = (state, params) => {
  state.socket = params.socket
}
