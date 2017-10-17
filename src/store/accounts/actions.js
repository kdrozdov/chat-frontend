import axios from '@/lib/axios'

export const login = ({ commit }, params) => {
  return axios.post('/sessions', params.form)
    .then((response) => {
      commit('setUser', response.data.data)
      commit('setToken', { token: response.data.meta.token })
    })
}

export const logout = ({ commit }) => {
  return axios.delete('/sessions')
    .then((response) => {
      commit('removeToken')
    })
}

export const signup = ({ commit }, params) => {
  return axios.post('/users', params.form)
    .then((response) => {
      commit('setUser', response.data.data)
      commit('setToken', { token: response.data.meta.token })
    })
}

export const refreshToken = ({ commit }) => {
  return axios.post('/sessions/refresh')
    .then((response) => {
      commit('setUser', response.data.data)
    })
}
