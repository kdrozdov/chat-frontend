<template lang="pug">
  .sidebar
    a.sidebar-link(v-for="item in userRooms" v-bind:room="item" v-bind:key="item.id" href="#")
      .sidebar__badge
        span {{ item.name.charAt(0) }}

    a.sidebar-link(href="#")
      .sidebar__badge
        span.fa.fa-plus

    .sidebar__delimeter

    button.sidebar__logout(@click.prevent="onLogout")
      .sidebar__badge
        span.fa.fa-sign-out
</template>

<script>
export default {
  methods: {
    onLogout: function () {
      this.$store.dispatch('accounts/logout')
        .then(() => this.$router.push({ path: '/login' }))
    }
  },

  computed: {
    userRooms: function () {
      return this.$store.state.rooms.userRooms
    }
  }
}
</script>

<style lang="scss">
  .sidebar {
    display: flex;
    flex-direction: column;
    background: rgb(38,28,37);
  }

  .sidebar__delimeter {
    flex: 1 1 0%;
  }

  .sidebar-link {
    position: relative;
    display: flex;
    width: 65px;
    color: rgba(255, 255, 255, .6);
    &:hover {
      color: #fff;
      text-decoration: none;
    }
    &:focus {
      color: #fff;
      text-decoration: none;
    }
  }

  .sidebar__logout {
    padding: 0;
    background: transparent;
    border: 0;
    cursor: pointer;
    color: #ddd;
  }

  .sidebar-link_active {
    color: #fff;
    &:after {
      position: absolute;
      top: 12px;
      bottom: 12px;
      left: 0;
      width: 3px;
      background: rgba(255, 255, 255, .2);
      border-top-right-radius: 3px;
      border-bottom-right-radius: 3px;
      content: "";
    }
  }

  .sidebar__badge {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 45px;
    height: 45px;
    margin: 12px auto;
    font-size: 20px;
    background: rgba(255, 255, 255, .2);
    border-radius: 5px;
  }
</style>
