<template>
  <div class="home">
    <top-menu/>
    <chart-page v-if="isDataXls"/>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import TopMenu from '@/components/TopMenu.vue'
import ChartPage from '@/components/ChartPage.vue'
import store from '@/store'

export default defineComponent({
  name: 'Home',
  components: {
    ChartPage,
    TopMenu
  },
  setup () {
    const isDataXls = computed(() => {
      return store.state.dataXls.length
    })

    return {
      isDataXls
    }
  }
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
