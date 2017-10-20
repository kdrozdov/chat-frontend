
export const setRooms = (state, params) => {
  state.all = params.rooms
}

export const setUserRooms = (state, params) => {
  state.userRooms = params.rooms
}

export const addRoom = (state, params) => {
  state.all.push(params.room)
  state.userRooms.unshift(params.room)
}

export const joinRoom = (state, params) => {
  state.userRooms.unshift(params.room)
}
