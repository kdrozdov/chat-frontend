<template lang="pug">
  div
    form.message-form(@submit.prevent="onSubmit")
      .input-group.input-group-lg
        Emoji(@selected="insertEmoji")
        input.input-lg.form-control.message-form__input(v-model="form.text" ref="input" name="text" type="text" autocomplete="off" @blur="setPos")
        .input-group-btn
          button.btn.message-form__button(type="submit") Send
</template>

<script>
import Emoji from './emoji'

export default {
  components: {
    Emoji
  },
  data: function () {
    return {
      caretPosition: 0,
      form: {
        text: ''
      }
    }
  },

  methods: {
    onSubmit () {
      if (!this.form.text) { return }
      this.$store.dispatch('rooms/createMessage', { form: this.form })
        .then(() => this.clearForm())
    },

    clearForm () {
      this.form.text = ''
    },

    setPos (e) {
      this.caretPosition = e.target.selectionStart
    },

    insertEmoji (emoji) {
      this.form.text = [
        this.form.text.slice(0, this.caretPosition),
        emoji,
        this.form.text.slice(this.caretPosition)
      ].join('')
      this.caretPosition += 2
      this.$nextTick(this.setCaretPosition)
    },

    setCaretPosition () {
      this.$refs.input.focus()
      this.$refs.input.setSelectionRange(this.caretPosition, this.caretPosition)
    }
  }
}
</script>

<style lang="scss">
  .message-form {
    padding: 5px 10px 10px 10px;
    background: #fff;
    font-size: 1rem;
    line-height: 1.5;
  }

  .message-form__input {
    border-width: 2px;
    line-height: 1.25;
    border-color: rgb(214, 214, 214);
    padding-right: 60px !important;
    border-top-left-radius: 6px !important;
    border-bottom-left-radius: 6px !important;
  }

  .message-form__input:focus {
    border-color: rgb(214,214,214);
    box-shadow: none !important;
  }

  .message-form__button {
    color: rgb(80,80,80);
    background: rgb(214,214,214);
    border-width: 2px;
    border-color: rgb(214,214,214);
  }
</style>
