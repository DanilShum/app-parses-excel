<template>
  <div>
    <label class="download"  @mouseenter="dragOverHandler" @mouseleave="dragLeaveHandler"  @change="filePicked">
      <div  class="download__drag" :class="{'download__drag_over':data.isDragAndDrop}">
        <div v-if="data.isDragAndDrop">перетащите сюда ваш XLS или нажмите для выбора</div>

        <div class="download__icon">
          <i class="pi pi-download "/>
        </div>
      </div>
      <input class="download__input-upload" type="file" id="my_file_input" @change="filePicked"/>
    </label>
    <modal-chart
      v-if="dataXls.length && isClosedModal"
      :data="dataXls"
      @close="isClosedModal = false"
    />
  </div>

</template>

<script lang="ts">
import { defineComponent, reactive, onMounted, onUnmounted, computed } from 'vue'
import XLSX from 'xlsx'
import store from '@/store'
import ModalChart from '@/components/ModalChart.vue'
import { downloadDataInterface } from '@/components/download/DownloadData.interface'

export default defineComponent({
  name: 'Download',
  components: { ModalChart },
  props: {

  },
  data: () => ({
    isClosedModal: true
  }),
  setup () {
    const data:downloadDataInterface = reactive({
      isDragAndDrop: false,
      files: [],
      container: { }
    })

    const dataXls = computed(() => store.state.dataXls)

    onMounted(() => {
      data.container = document.querySelector('.download')
      data.container.addEventListener('drop', dropHandler)
      data.container.addEventListener('dragover', dragOverHandler)
      data.container.addEventListener('dragleave', dragLeaveHandler)
    })
    onUnmounted(() => {
      data.container.removeEventListener('drop', dropHandler)
      data.container.removeEventListener('dragover', dragOverHandler)
      data.container.removeEventListener('dragleave', dragLeaveHandler)
      data.container = {}
    })

    const dragOverHandler = (e:any) => {
      e.preventDefault()
      data.isDragAndDrop = true
      return false
    }
    const dragLeaveHandler = () => {
      data.isDragAndDrop = false
      return false
    }

    const dropHandler = (e:any) => {
      e.preventDefault()
      data.isDragAndDrop = false
      // нудно эмитить для открытия модалки
      filePicked(e)
    }

    const filePicked = (event: any) => {
      const files = event.dataTransfer ? event.dataTransfer.files : event.target.files
      const f = files[0]
      const reader = new FileReader()
      reader.onload = function (e: any) {
        const data = new Uint8Array(e.target.result)
        const workbook = XLSX.read(data, { type: 'array' })
        const sheetName = workbook.SheetNames[0]
        const worksheet = workbook.Sheets[sheetName]

        const dataXls = XLSX.utils.sheet_to_json(worksheet, { raw: false, dateNF: 'yyyy-mm-dd' })
        store.commit('setData', dataXls)
      }
      reader.readAsArrayBuffer(f)
    }

    return {
      filePicked,
      dragOverHandler,
      dragLeaveHandler,
      data,
      dataXls
    }
  }
})
</script>

<style lang="scss">
.download {
  display: flex;
  align-items: center;
  z-index: 999;
}
.download__input-upload {
  overflow: hidden;
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  z-index: -1;
}
.download__icon {
  min-width: 36px;
  height: 36px;
  max-width: 36px;
  max-height: 36px;
  border-radius: 50%;
  display: flex;
  margin-left: 10px;
  align-items: center;
  justify-content: center;
  background-color: #689F38;

  i {
    color: white;
  }

  &:hover {
    background-color: #5e8f32;
    &::before {
      opacity: 1;
    }

  }

  &::before {
    content: '';
    color: white;
    position: absolute;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    box-shadow: 0 5px 5px rgba(#689F38, 0.5);
  }
}
.download__drag {
  width: 300px;
  height: 50px;
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border: 2px dashed transparent;
  border-radius: 20px;
}
.download__drag_over {
  border-color: #ccc;
}
</style>
