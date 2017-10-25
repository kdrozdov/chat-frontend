<template lang="pug">
  img.avatar(v-bind:src="uri" v-bind:width="this.size" v-bind:height="this.size" v-bind:alt="email")
</template>

<script>
import md5 from 'md5'

export default {
  props: {
    email: { type: String, required: true },
    size: { type: Number, default: 40 }
  },

  computed: {
    uri: function () {
      return `https://secure.gravatar.com/avatar/${md5(this.email)}`
    }
  }
}
</script>

<style lang="scss">
  .avatar {
    margin-right: 10px;
    border-radius: 4px;
  }
</style>
