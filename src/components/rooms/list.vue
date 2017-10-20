<template lang="pug">
  .list-rooms
    ListItem(v-for="item in rooms" v-bind:room="item" v-bind:is-joined="isJoined(item)" v-bind:key="item.id")
</template>

<script>
import ListItem from './list/item'

export default {
  components: {
    ListItem
  },

  methods: {
    isJoined: function (room) {
      return this.userRoomIds.includes(room.id)
    }
  },

  computed: {
    userRoomIds: function () {
      return this.$store.state.rooms.userRooms.map(room => room.id)
    },

    rooms: function () {
      return this.$store.state.rooms.all
    }
  }
}
</script>
