<template>
  <MegaMenu orientation="horizontal" class="top-menu">
    <Button icon="pi pi-download" class="p-button-rounded p-button-success" />
  </MegaMenu>
  <chart-page/>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import Button from 'primevue/button'
import MegaMenu from 'primevue/megamenu'
import ChartPage from '@/components/ChartPage.vue'

export default defineComponent({
  name: 'TopMenu',
  components: { ChartPage, Button, MegaMenu },
  props: {

  }
})
</script>

<style lang="scss">
.top-menu {

}
</style>
