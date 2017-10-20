<template lang="pug">
  .page-wrapper
    .content-wrapper
      AppNavbar
      slot
</template>

<script>
import AppNavbar from '@/components/shared/navbar'

export default {
  components: {
    AppNavbar
  }
}
</script>
