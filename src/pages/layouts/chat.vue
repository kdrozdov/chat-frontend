<template lang="pug">
  .page-wrapper
    AppSidebar

    .content-wrapper
      router-view

</template>

<script>
import AppSidebar from '@/components/shared/sidebar'

export default {
  components: {
    AppSidebar
  }
}
</script>
