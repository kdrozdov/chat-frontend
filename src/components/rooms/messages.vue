<template lang="pug">
  .messages
    .messages__spinner(v-if="isLoading")
      i.fa.fa-circle-o-notch.fa-spin.fa-fw
    template(v-for="messageGroup in messages")
      .messages__day-divider
        .messages__day-text {{ messageGroup.date }}
      Message(v-for="message in messageGroup.values" v-bind:message="message" v-bind:key="message.id")

</template>

<script>
import Message from './messages/item'
import debounce from 'lodash/debounce'

export default {
  components: {
    Message
  },

  created: function () {
    this.handleScroll = debounce(this.handleScroll, 200)
  },

  mounted: function () {
    this.$el.addEventListener('scroll', this.handleScroll)
  },

  beforeUpdate: function () {
    this.maybeScrollToBottom()
  },

  beforeDestroy: function () {
    this.$el.removeEventListener('scroll', this.handleScroll)
  },

  computed: {
    messages: function () {
      return this.$store.state.rooms.messages.reverse()
    },

    isLoading: function () {
      return this.$store.state.rooms.loadingOlderMessages
    },

    isThereMoreMessages: function () {
      if (!this.$store.state.rooms.pagination) { return false }
      let total = this.$store.state.rooms.pagination.total_pages
      let current = this.$store.state.rooms.pagination.page_number

      return total > current
    }
  },

  methods: {
    scrollToBottom: function () {
      setTimeout(() => { this.$el.scrollTop = this.$el.scrollHeight })
    },

    maybeScrollToBottom: function () {
      if (this.$el.scrollHeight - this.$el.scrollTop <
          this.$el.clientHeight + 50) {
        this.scrollToBottom()
      }
    },

    handleScroll: function () {
      if (this.isThereMoreMessages && this.$el.scrollTop < 20) {
        this.$store.dispatch('rooms/loadOlderMessages')
      }
    }
  }
}
</script>

<style lang="scss">
  .messages {
    flex: 1;
    padding: 10px 10px 0 10px;
    background: #fff;
    overflow-y: auto;
  }

  .messages__spinner {
    text-align: center
  }

  .messages__day-divider {
    position: relative;
    margin: 1rem 0;
    text-align: center;

    &:after {
      position: absolute;
      top: 50%;
      right: 0;
      left: 0;
      height: 1px;
      background: rgb(240,240,240);
      content: "";
    }
  }

  .messages__day-text {
    z-index: 1;
    display: inline-block;
    position: relative;
    background: #fff;
    padding: 0 12px;
  }
</style>
