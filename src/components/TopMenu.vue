<template>
  <MegaMenu orientation="horizontal" class="top-menu">
    <Button icon="pi pi-download" class="p-button-rounded p-button-success" />
    <input type="file" id="my_file_input" @change="filePicked"/>
    <div id="list"></div>
  </MegaMenu>
  <chart-page/>
</template>

<script>
import { defineComponent, PropType } from 'vue'
import Button from 'primevue/button'
import MegaMenu from 'primevue/megamenu'
import ChartPage from '@/components/ChartPage.vue'
import XLSX from 'xlsx'

export default defineComponent({
  name: 'TopMenu',
  components: { ChartPage, Button, MegaMenu },
  props: {

  },
  setup () {
    const filePicked = (event) => {
      const files = event.target.files; const f = files[0]
      const reader = new FileReader()
      reader.onload = function (e) {
        const data = new Uint8Array(e.target.result)
        const workbook = XLSX.read(data, { type: 'array' })
        const sheetName = workbook.SheetNames[0]
        /* DO SOMETHING WITH workbook HERE */
        console.log(workbook)
        const worksheet = workbook.Sheets[sheetName]
        console.log(XLSX.utils.sheet_to_json(worksheet))
      }
      reader.readAsArrayBuffer(f)
    }

    return {
      filePicked
    }
  }
})
</script>

<style lang="scss">
.top-menu {

}
</style>
