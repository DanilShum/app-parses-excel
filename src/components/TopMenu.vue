<template>
  <MegaMenu orientation="horizontal" class="top-menu">
    <download/>
  </MegaMenu>

</template>

<script>
import { defineComponent } from 'vue'
import MegaMenu from 'primevue/megamenu'
import Download from '@/components/download/Download'

export default defineComponent({
  name: 'TopMenu',
  components: { Download, MegaMenu },
  props: {

  },
  setup () {
    return {

    }
  }
})
</script>

<style lang="scss">
.top-menu {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 60px;
}
</style>
