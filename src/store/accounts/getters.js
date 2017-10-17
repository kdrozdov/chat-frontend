
export const isAuthenticated = (state) => {
  return !!state.token
}

export const authHeader = (state) => {
  if (!isAuthenticated) { return null }
  return { Authorization: `Bearer: ${state.token}` }
}
