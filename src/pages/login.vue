<template lang="pug">
  AuthLayout
    LoginForm
</template>

<script>
import AuthLayout from './layouts/auth'
import LoginForm from '@/components/accounts/login-form'

export default {
  components: {
    AuthLayout,
    LoginForm
  }
}
</script>
