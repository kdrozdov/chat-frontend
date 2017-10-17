<template lang="pug">
  a(@click="onLogout") Logout
</template>

<script>
export default {
  methods: {
    onLogout: function () {
      this.$store.dispatch('accounts/logout')
        then(() => this.$router.push({ path: '/login' }))
    }
  }
}
</script>


