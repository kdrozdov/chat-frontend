<template lang="pug">
  #app
    router-view

</template>

<script>
export default {
  name: 'app',

  mounted: function () {
    if (!this.$store.getters['accounts/isAuthenticated']) { return }
    this.$store.dispatch('accounts/refreshToken')
      .catch((response) => this.$router.push({ path: '/login' }))
  },

  computed: {
    isAuthenticated: function () {
      return this.$store.getters['accounts/isAuthenticated']
    }
  }
}
</script>

<style lang="scss">
  @import 'assets/stylesheets/base';
</style>
