<template lang="pug">
  AppLayout
    .card
      h3.card__title Create a new room
      RoomForm
    .card
      h3.card__title Join a room
      ListRooms

</template>

<script>
import AppLayout from './layouts/application'
import RoomForm from '@/components/rooms/form'
import ListRooms from '@/components/rooms/list'

export default {
  components: {
    AppLayout,
    RoomForm,
    ListRooms
  },

  mounted: function () {
    this.$store.dispatch('rooms/fetchAll')
  }
}
</script>

<style lang="scss">

</style>
