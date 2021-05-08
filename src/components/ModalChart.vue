
<template>
    <Panel :header="header">
      <select name="select">
        <option v-for="item in fields" :value="item.name"></option>
      </select>
    </Panel>
</template>

<script>

import Panel from 'primevue/panel'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'ModalChart',
  components: { Panel },
  props: {
    header: {
      type: String,
      default: ''
    },
    fields: {
      type: Array,
      required: true
    }
  }

})
</script>

<style lang="scss">

</style>
