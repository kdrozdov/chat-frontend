export const roomTopic = (state) => {
  let room = state.currentRoom
  if (!room || !room.topic) { return }
  return room.topic
}
