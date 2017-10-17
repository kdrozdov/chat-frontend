<template lang="pug">
  span
    AppNavbar
    SignUpForm
</template>

<script>
import AppNavbar from '@/components/shared/navbar'
import SignUpForm from '@/components/accounts/signup-form'

export default {
  components: {
    AppNavbar,
    SignUpForm
  }
}
</script>
