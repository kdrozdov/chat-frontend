<template lang="pug">
  span
    AppNavbar
    LoginForm
</template>

<script>
import AppNavbar from '@/components/shared/navbar'
import LoginForm from '@/components/accounts/login-form'

export default {
  components: {
    AppNavbar,
    LoginForm
  }
}
</script>
