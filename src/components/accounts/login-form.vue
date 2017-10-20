<template lang="pug">
  form.login-form(@submit.prevent="onLogin")
    h3.login-form__title Login to Slacker
    .form-group
      input.form-control(v-model="form.email" placeholder="Email" type="email")
    .form-group
      input.form-control(v-model="form.password" placeholder="Password" type="password")
    button.btn.btn-block.btn-primary(type="submit") Login
    hr.login-form__hr
    router-link(to='/signup') Create a new account
</template>

<script>
export default {
  data: function () {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },

  methods: {
    onLogin: function () {
      this.$store.dispatch('accounts/login', { form: this.form })
        .then(() => this.$router.push({ path: '/' }))
    }
  }
}
</script>

<style lang="scss">
  .login-form {
    width: 500px;
    padding: 3rem 4rem;
    margin: 2rem auto;
  }

  .login-form__title {
    margin-bottom: 2rem;
    text-align: center;
  }

  .login-form__hr {
    margin: 2rem 0;
  }
</style>
