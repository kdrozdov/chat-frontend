<template lang="pug">
  form.message-form(@submit.prevent="onSubmit")
    .input-group.input-group-lg
      input.input-lg.form-control.message-form__input(v-model="form.text" name="text" type="text" autocomplete="off")
      .input-group-btn
        button.btn.message-form__button(type="submit") Send
</template>

<script>
export default {
  data: function () {
    return {
      form: {
        text: ''
      }
    }
  },

  methods: {
    onSubmit: function () {
      if (!this.form.text) { return }
      this.$store.dispatch('rooms/createMessage', { form: this.form })
        .then(() => this.clearForm())
    },

    clearForm: function () {
      this.form.text = ''
    }
  }
}
</script>

<style lang="scss">
  .message-form {
    padding: 0px 10px 10px 10px;
    background: #fff;
    font-size: 1rem;
    line-height: 1.5;
  }

  .message-form__input {
    border-width: 2px;
    line-height: 1.25;
    border-color: rgb(214,214,214);
  }

  .message-form__button {
    color: rgb(80,80,80);
    background: rgb(214,214,214);
    border-width: 2px;
    border-color: rgb(214,214,214);
  }
</style>
