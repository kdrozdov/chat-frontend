
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

const buildMessageIndexes = (messages) => {
  let indexes = {}
  messages.forEach((group, index) => {
    indexes[group.date] = index
  })
  return indexes
}

export const connectedToChannel = (state, params) => {
  state.channel = params.channel
  state.messages = params.messages
  state.messageIndexes = buildMessageIndexes(params.messages)
  state.currentRoom = params.room
  state.pagination = params.pagination
}

export const setLoadingOlderMessages = (state, params) => {
  state.loadingOlderMessages = params.loadingOlderMessages
}

export const setChannel = (state, params) => {
  state.channel = params.channel
}

export const setPresentUsers = (state, params) => {
  state.presentUsers = params.presentUsers
}

export const setPagination = (state, params) => {
  state.pagination = params.pagination
}

export const leaveRoom = (state) => {
  state.currentRoom = null
  state.channel = null
  state.messages = []
  state.presentUsers = []
}

export const addNewMessage = (state, params) => {
  let date = params.message.key
  let index = state.messageIndexes[date]
  if (index >= 0) {
    state.messages[index].values.push(params.message)
  } else {
    index = state.messages.unshift({ date: date, values: [params.message] })
    state.messageIndexes = buildMessageIndexes(state.messages)
  }
}

export const addOlderMessages = (state, params) => {
  let olderMessages = params.messages
  let last = olderMessages[olderMessages.length - 1]
  if (!last) { return }

  let index = state.messageIndexes[last.date]
  if (index >= 0) {
    olderMessages.pop()
    state.messages[index].values = [
      ...last.values,
      ...state.messages[index].values
    ]
  }
  if (olderMessages.length > 0) {
    state.messages = [...state.messages, ...olderMessages]
    state.messageIndexes = buildMessageIndexes(state.messages)
  }
}
