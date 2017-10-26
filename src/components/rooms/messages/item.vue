<template lang="pug">
  .message
    Avatar(v-bind:email="message.user.email")
    .message__wrapper
      .message__info
        b.message__author {{ message.user.username }}
        time.message__time {{ time }}
      .message__text {{ message.text }}
</template>

<script>
import moment from 'moment'
import Avatar from './avatar'

export default {
  props: {
    message: { type: Object, required: true }
  },

  components: {
    Avatar
  },

  computed: {
    time: function () {
      return moment(this.message.inserted_at).format('h:mm A')
    }
  }
}
</script>

<style lang="scss">
  .message {
    display: flex;
    margin-bottom: 10px;
  }

  .message__info {
    line-height: 1.2;
  }

  .message__time {
    font-size: 12px;
    color: rgb(192,192,192);
  }

  .message__author {
    margin-right: 8px;
    font-size: 14px;
  }

  .message__text {
  }
</style>
