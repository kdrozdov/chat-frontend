<template lang="pug">
  span
    AppNavbar
    .card
      h3.card__title Create a new room
      RoomForm
    .card
      h3.card__title Join a room
      ListRooms

</template>

<script>
import AppNavbar from '@/components/shared/navbar'
import RoomForm from '@/components/rooms/form'
import ListRooms from '@/components/rooms/list'

export default {
  components: {
    RoomForm,
    ListRooms,
    AppNavbar
  },

  mounted: function () {
    this.$store.dispatch('rooms/fetchAll')
  }
}
</script>

<style lang="scss">

</style>
