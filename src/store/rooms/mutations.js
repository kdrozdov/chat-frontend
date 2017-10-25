
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

export const setCurrentRoom = (state, params) => {
  state.currentRoom = params.currentRoom
}

export const setMessages = (state, params) => {
  state.messages = params.messages
}

export const setChannel = (state, params) => {
  state.channel = params.channel
}

export const leaveRoom = (state) => {
  state.currentRoom = null
  state.channel = null
}

export const addMessage = (state, params) => {
  let date = params.message.key
  if (!state.messages[date]) { state.messages[date] = [] }
  state.messages[date].push(params.message)
}
