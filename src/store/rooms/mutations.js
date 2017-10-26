
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

export const addMessage = (state, params) => {
  let date = params.message.key
  let index = state.messageIndexes[date]
  if (!index) {
    index = state.messages.unshift({ date: date, values: [params.message] })
    state.messageIndexes = buildMessageIndexes(state.messages)
  } else {
    state.messages[index].values.push(params.message)
  }
}

export const addMessages = (state, params) => {
  let first = params.messages[0]
  if (!first) { return }

  let index = state.messageIndexes[first.date]
  if (index >= 0) {
    params.messages.shift()
    state.messages[index].values = [
      ...first.values,
      ...state.messages[index].values
    ]
  }

  params.messages.forEach((item) => {
    index = state.messages.push(item) - 1
    state.messageIndexes[item.date] = index
  })
}
