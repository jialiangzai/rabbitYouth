import { findHeadCategory } from '@/api/home.js'
// 商品
export default {
  namespaced: true,
  state: {
    list: []
  },
  getters: {

  },
  mutations: {
    updateList (state, payload) {
      state.list = payload
    }
  },
  actions: {
    async getListCate ({ commit }) {
      const { result } = await findHeadCategory()
      // console.log('商品数据', result)
      commit('updateList', result)
    }
  }
}
