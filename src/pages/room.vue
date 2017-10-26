<template lang="pug">
  .room
    RoomSidebar
    .room__content
      RoomNavbar
      Messages
      MessageForm
</template>

<script>
import RoomNavbar from '@/components/rooms/navbar'
import RoomSidebar from '@/components/rooms/sidebar'
import Messages from '@/components/rooms/messages'
import MessageForm from '@/components/rooms/messages/form'

export default {
  components: {
    RoomNavbar,
    RoomSidebar,
    Messages,
    MessageForm
  },

  mounted: function () {
    this.$store
      .dispatch('rooms/connectToChannel', { roomId: this.$route.params.id })
      .catch(() => this.$router.push('/'))
  },

  beforeRouteUpdate: function (to, from, next) {
    this.$store.dispatch('rooms/leaveChannel')
    this.$store.dispatch('rooms/connectToChannel', { roomId: to.params.id })
      .catch(() => this.$router.push('/'))
    next()
  },

  beforeDestroy: function () {
    this.$store.dispatch('rooms/leaveChannel')
  }
}
</script>

<style lang="scss">
  .room {
    display: flex;
    flex: 1;
    height: 100vh;
  }

  .room__content {
    display: flex;
    flex: 1;
    flex-direction: column;
  }
</style>
