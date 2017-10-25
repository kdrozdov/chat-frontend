<template lang="pug">
  .messages
    template(v-for="(values, date) in messages")
      .messages__day-divider
        .messages__day-text {{ date }}
      Message(v-for="message in values" v-bind:message="message" v-bind:key="message.id")

</template>

<script>
import Message from './messages/item'

export default {
  components: {
    Message
  },

  computed: {
    messages: function () {
      return this.$store.state.rooms.messages
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
