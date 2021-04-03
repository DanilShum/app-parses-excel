<template>
  <div class="home">
    <top-menu/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TopMenu from '@/components/TopMenu.vue'

export default defineComponent({
  name: 'Home',
  components: {
    TopMenu
  },
})
</script>
<style lang="scss">
  .home {
    height: 100vh;
    max-height: 100vh;
    overflow: hidden;
    max-width: 100%;
  }
</style>
