<template lang="pug">
  img.avatar(v-bind:src="uri" v-bind:width="this.size" v-bind:height="this.size")
</template>

<script>
export default {
  props: {
    emailHash: { type: String, required: true },
    size: { type: Number, default: 40 }
  },

  computed: {
    uri: function () {
      return `https://secure.gravatar.com/avatar/${this.emailHash}`
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
