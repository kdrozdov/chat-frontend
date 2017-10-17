import axios from 'axios'

const getHeaders = () => {
  let headers = {
    'Content-Type': 'application/json'
  }
  let token = window.localStorage.getItem('slacker_auth_token')
  if (token) { headers['Authorization'] = `Bearer: ${token}` }
  return headers
}

export default axios.create({
  baseURL: process.env.BASE,
  headers: getHeaders()
})
