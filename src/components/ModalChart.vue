<template>
    <Panel class="modal-chart" :header="header" >
      <div class="modal-chart__content">
        <TreeSelect v-model="valueX" :options="fields" placeholder="Выбирите значения по оси Х" />
        <TreeSelect v-model="valueY" :options="fields" placeholder="Выбирите значения по оси Y" />
      </div>

      <footer class="modal-chart__footer">
        <Button label="Сохранить" icon="pi pi-check" iconPos="right" @click="saveCord" :disabled="isDisabled"/>
      </footer>
    </Panel>
</template>

<script>

import Panel from 'primevue/panel'
import Button from 'primevue/button'
import TreeSelect from 'primevue/treeselect'
import lodash from 'lodash'
import store from '@/store'

import { computed, defineComponent } from 'vue'
export default defineComponent({
  name: 'ModalChart',
  components: { Panel, TreeSelect, Button },
  props: {
    header: {
      type: String,
      default: ''
    },
    data: {
      type: Array,
      required: true
    }
  },
  data: () => ({
    valueX: { },
    valueY: { }
  }),
  setup (props) {
    const fields = computed(() => {
      return Object.keys(props.data[0]).map((item, i) => { return { data: item, key: i, label: item } })
    })

    return {
      fields: fields.value
    }
  },
  computed: {
    isDisabled () {
      return lodash.isEmpty(this.valueX) || lodash.isEmpty(this.valueY)
    }
  },
  methods: {
    saveCord () {
      store.commit('setDataX', this.getField(this.valueX))
      store.commit('setDataY', this.getField(this.valueY))

      this.closeModal()
    },
    getField (value) {
      return this.fields.find(item => item.key === Number(Object.keys(value)[0])).data
    },
    closeModal () {
      this.$emit('close')
    }
  }
})
</script>

<style lang="scss">
.modal-chart {
  position: absolute;
  left: 50px;
  top: 50px;
  right: 50px;
  bottom: 50px;

  .p-panel-content {
    min-height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
}
.modal-chart__footer {
  display: flex;
  justify-content: flex-end;
}
</style>
