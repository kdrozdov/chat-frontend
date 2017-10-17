<template lang="pug">
  form.signup-form(@submit.prevent="onSignup")
    h3.signup-form__title Create an account
    .form-group
      input.form-control(v-model="form.username" placeholder="Username" type="text")
    .form-group
      input.form-control(v-model="form.email" placeholder="Email" type="email")
    .form-group
      input.form-control(v-model="form.password" placeholder="Password" type="password")
    button.btn.btn-block.btn-primary(type="submit") Sign up
    hr.login-form__hr
    router-link(to='/login') Login to your account
</template>

<script>
export default {
  data: function () {
    return {
      form: {
        username: '',
        email: '',
        password: ''
      }
    }
  },

  methods: {
    onSignup: function () {
      let formData = { user: this.form }
      this.$store.dispatch('accounts/signup', { form: formData })
        .then(() => this.$router.push({ path: '/' }))
    }
  }
}
</script>

<style lang="scss">
  .signup-form {
    max-width: 500px;
    padding: 3rem 4rem;
    margin: 2rem auto;
  }

  .signup-form__title {
    margin-bottom: 2rem;
    text-align: center;
  }
</style>
