<template lang="pug">
  nav.navbar
    router-link.navbar__link(to='/')
      |Slacker

</template>

<script>
export default {
}
</script>

<style lang="scss">
  .navbar {
    display: flex;
    align-items: center;
    padding: 0 1rem;
    height: 70px;
    background: #fff;
    box-shadow: 0 1px 1px rgba(0,0,0,.1);
  }

  .navbar__link {
    color: #555459;
    font-size: 22px;
    font-weight: bold;

    &:hover {
      text-decoration: none,
    }
    &:focus {
      text-decoration: none,
    }
  }
</style>
