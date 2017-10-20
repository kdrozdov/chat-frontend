<template lang="pug">
  AuthLayout
    SignUpForm
</template>

<script>
import AuthLayout from './layouts/auth'
import SignUpForm from '@/components/accounts/signup-form'

export default {
  components: {
    AuthLayout,
    SignUpForm
  }
}
</script>
