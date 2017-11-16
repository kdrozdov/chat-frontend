<template lang="pug">
  .message
    Avatar(v-bind:email-hash="message.user.email_hash")
    .message__wrapper
      .message__info
        b.message__author {{ message.user.username }}
        time.message__time {{ time }}
      .message__text(v-html="text")
</template>

<script>
import linkifyHtml from 'linkifyjs/html'
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
    },

    text: function () {
      return linkifyHtml(this.message.text, { defaultProtocol: 'https' })
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
