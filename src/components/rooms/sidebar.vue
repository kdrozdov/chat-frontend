<template lang="pug">
  .room-sidebar
    .room-sidebar__header
      h2.room-sidebar__room-name {{ roomName }}
      .room-sidebar__current-user {{ currentUser }}
    .list-users__heading Active Users
    ul.list-users
      li.list-users__username(v-for="user in presentUsers") {{ user.username }}

</template>

<script>
export default {
  components: {
  },

  computed: {
    roomName: function () {
      let room = this.$store.state.rooms.currentRoom
      if (!room) { return '' }
      return room.name
    },

    currentUser: function () {
      return this.$store.state.accounts.username
    },

    presentUsers: function () {
      return this.$store.state.rooms.presentUsers
    }
  }
}
</script>

<style lang="scss">
  .room-sidebar {
    color: #ab9ba9;
    background: #4d394b;
  }

  .room-sidebar__header {
    padding: 20px 15px;
    margin-bottom: 10px;
    width: 220px;
  }

  .room-sidebar__room-name {
    margin-top: 0;
    margin-bottom: 5px;
    font-size: 22px;
    line-height: 1;
    color: #fff;
  }

  .room-sidebar__current-user {
    font-size: 13px;
  }

  .list-users {
    padding-left: 15px;
    list-style: none;
  }

  .list-users__heading {
    margin-left: 15px;
    margin-bottom: 5px;
    font-size: 13px;
    text-transform: uppercase;
  }

  .list-users__username {
    position: relative;
    padding-left: 20px;
    font-size: 14px;
    font-weight: 300;
    &:after {
      position: absolute;
      top: 7px;
      left: 0;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: rgb(64,151,141);
      content: "";
    }
  }
</style>
