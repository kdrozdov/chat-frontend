<template lang="pug">
  .room-topic
    button.room-topic-btn(v-if="!edit" @click.prevent="toggleEdit") {{ roomTopic }}
    div(v-else)
      input.form-control.room-topic-input(v-model="form.topic" v-on:keyup.enter="updateTopic" type="text" autofocus)
      button.room-topic-action.text-success(@click.prevent="updateTopic")
        i.fa.fa-check
      button.room-topic-action.text-danger(@click.prevent="toggleEdit")
        i.fa.fa-close
</template>

<script>
export default {
  data () {
    console.log(this.$store.getters)
    return {
      edit: false,
      form: {
        topic: ''
      }
    }
  },

  methods: {
    toggleEdit () {
      if (!this.edit) {
        this.form.topic = this.$store.getters['rooms/roomTopic']
      }
      this.edit = !this.edit
    },

    updateTopic () {
      if (!this.form.topic) { return }
      this.$store.dispatch('rooms/updateTopic', { form: this.form })
        .then(() => this.toggleEdit())
    }
  },

  computed: {
    roomTopic () {
      return this.$store.getters['rooms/roomTopic'] ||
        'General chat and discussion'
    }
  }
}
</script>

<style lang="scss">
  .room-topic {
    font-size: 12px;
    height: 24px;
  }
  .room-topic-btn {
    padding: 2px 4px;
    color: rgb(120,120,120);
    background: transparent;
    border: 0;
    border-radius: 4px;
    cursor: pointer;
  }
  .room-topic-btn:hover {
    box-shadow: 0 0 2px rgba(0, 0, 0, .25);
  }
  .room-topic-input {
    display: inline-block;
    margin-left: 4px;
    margin-right: 8px;
    width: 200px;
    height: 20px;
    padding: 2px;
    line-height: 1;
    font-size: 12px;
    color: rgb(120,120,120);
  }
  .room-topic-action {
    cursor: pointer;
    background: #fff;
    border: 0;
    padding: 3px 5px;
    margin-left: 5px;
    border-radius: 4px;
  }
  .room-topic-action:hover {
    box-shadow: 0 0 2px rgba(0, 0, 0, .25);
  }
</style>
