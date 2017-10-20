<template lang="pug">
  form(@submit.prevent="onSubmit")
    .bot10(v-if="errors['name']")
      span.text-danger {{ errors['name'][0] }}
    .input-group
      input.form-control(v-model="form.name" type="text" placeholder="Name")

      .input-group-btn
        button.btn.btn-primary(type="submit") Submit
</template>

<script>

export default {
  data: function () {
    return {
      form: {
        name: ''
      },
      errors: {}
    }
  },

  methods: {
    onSubmit: function () {
      if (!this.form.name) { return }
      this.$store.dispatch('rooms/create', { form: this.form })
        .then(() => { this.form.name = '' })
        .catch((error) => {
          if (!error.response) { return }
          this.errors = error.response.data.errors
        })
    }
  }
}
</script>
