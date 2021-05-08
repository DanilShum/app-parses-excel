import { createStore } from 'vuex'
import { dataStateInterface } from '@/models/store/DataState.interface'

export default createStore<dataStateInterface>({
  state: {
    dataXls: [],
    loading: false
  },
  mutations: {
    setData (state, data) {
      state.dataXls = data
      state.loading = false
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
