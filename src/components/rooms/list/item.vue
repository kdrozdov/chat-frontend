<template lang="pug">
  .list-rooms__item
    span.list-rooms__item-name {{ room.name }}
    button.btn.btn-sm(v-bind:disabled="isJoined" @click.prevent="onJoin")
      span(v-if="isJoined") Joined
      span(v-else) Join
</template>

<script>

export default {
  props: ['room', 'isJoined'],
  methods: {
    onJoin: function () {
      if (this.isJoined) { return }
      this.$store.dispatch('rooms/join', { roomId: this.room.id })
    }
  }
}
</script>

<style lang="scss">
  .list-rooms__item {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }

  .list-rooms__item-name {
    margin-right: 8px;
  }
</style>
