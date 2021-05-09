import { createStore } from 'vuex'
import { dataStateInterface } from '@/models/store/DataState.interface'

export default createStore<dataStateInterface>({
  state: {
    dataXls: [],
    loading: false,
    fieldX: '',
    fieldY: ''
  },
  mutations: {
    setData (state, data) {
      state.dataXls = data
      state.loading = false
    },
    setDataX (state, nameField) {
      state.fieldX = nameField
    },
    setDataY (state, nameField) {
      state.fieldY = nameField
    }
  },
  actions: {

  },
  modules: {
  }
  // getters: {
  //   filteredUniqueData (state:dataStateInterface) {
  //     const result = []
  //
  //     for (const item of state) {
  //       if (!result.includes(item)) {
  //         result.push(item)
  //       }
  //     }
  //
  //     return result
  //   }
  // }
})
