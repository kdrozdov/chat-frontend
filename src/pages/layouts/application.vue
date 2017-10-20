<template lang="pug">
  .page-wrapper
    AppSidebar

    .content-wrapper
      AppNavbar
      slot

</template>

<script>
import AppNavbar from '@/components/shared/navbar'
import AppSidebar from '@/components/shared/sidebar'

export default {
  components: {
    AppNavbar,
    AppSidebar
  }
}
</script>
