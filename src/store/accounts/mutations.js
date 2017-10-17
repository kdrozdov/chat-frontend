import axios from '@/lib/axios'

export const setToken = (state, params) => {
  window.localStorage.setItem('slacker_auth_token', params.token)
  axios.defaults.headers.common['Authorization'] = `Bearer: ${params.token}`
  state.token = params.token
}

export const removeToken = (state, params) => {
  window.localStorage.removeItem('slacker_auth_token')
  axios.defaults.headers.common['Authorization'] = null
  state.token = null
}

export const setUser = (state, params) => {
  state.username = params.username
}
