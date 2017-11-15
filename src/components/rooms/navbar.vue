<template lang="pug">
  nav.room-navbar
    div {{ roomName }}
    Topic
</template>

<script>
import Topic from './navbar/topic'

export default {
  components: {
    Topic
  },

  computed: {
    roomName () {
      let room = this.$store.state.rooms.currentRoom
      if (!room) { return '' }
      return `#${room.name}`
    }
  }
}
</script>

<style lang="scss">
  .room-navbar {
    padding: 15px;
    background: #fff;
    border-bottom: 1px solid rgb(240, 240, 240);
  }
</style>
