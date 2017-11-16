<template lang="pug">
  a.emoji-link(@click.prevent="toggleVisible")
    .emoji-list-wrapper(v-if="visible" @click.stop.prevent="")
      .row.emoji-list
        .emoji(v-for="char in emojis" @click.stop.prevent="select(char)") {{ char }}
    i.fa.fa-smile-o

</template>

<script>
import { generateEmojis } from '@/lib/utils'

export default {
  data () {
    return {
      visible: false
    }
  },

  methods: {
    select (char) {
      this.$emit('selected', char)
    },

    toggleVisible () {
      this.visible = !this.visible
    }
  },

  computed: {
    emojis () {
      return generateEmojis()
    }
  }
}
</script>

<style lang="scss">
  .emoji {
    cursor: pointer;
    margin: 2px;
    padding: 4px;
    display: inline-block;
    float: left;
    text-align: center;
    border-radius: 2px;
    user-select: none;
  }

  .emoji:hover {
    box-shadow: 0 0 2px rgba(0, 0, 0, .25);
  }

  .emoji-list {
    padding: 4px;
    margin-right: 2px;
    border-radius: 4px;
    display: block;
    background: #fff;
    width: 300px;
    height: 200px;
    overflow-y: auto;
    box-shadow: 0 0 2px rgba(0, 0, 0, .25);
  }

  .emoji-list-wrapper {
    position: absolute;
    top: -210px;
    right: -95px;
  }

  .emoji-link {
    text-align: center;
    position: absolute;
    height: 26px;
    top: 2px;
    right: 95px;
    width: 50px;
    height: 44px;
    color: #cac8c8;
    font-size: 26px;
    z-index: 4;
    cursor: pointer;
  }

  .emoji-link:hover {
    color: #4d394b;
  }
</style>
