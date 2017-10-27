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
    if (!this.$store.state.accounts.socket) {
      this.$store.dispatch('accounts/connectToSocket')
        .then(() => this.connectToChannel(this.$route.params.id))
    } else {
      this.connectToChannel(this.$route.params.id)
    }
  },

  beforeRouteUpdate: function (to, from, next) {
    this.$store.dispatch('rooms/leaveChannel')
    this.connectToChannel(to.params.id)
    next()
  },

  beforeDestroy: function () {
    this.$store.dispatch('rooms/leaveChannel')
  },

  methods: {
    connectToChannel: function (roomId) {
      this.$store
      .dispatch('rooms/connectToChannel', { roomId: roomId })
      .catch(() => {
        this.$router.push('/')
      })
    }
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
