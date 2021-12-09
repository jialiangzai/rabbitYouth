import { userAccountLogin } from '@/api/use'
export default {
  namespaced: true,
  // state: {
  //   value: 'my value'
  // },
  // 优化
  state: () => ({
    profile: {
      id: '',
      avatar: '',
      nickname: '',
      account: '',
      mobile: '',
      token: ''
    }
  }),
  getters: {
  },
  mutations: {
    // 存储数据
    setUse (state, payload) {
      state.profile = payload
    },
    // 删除数据
    delUse (state) {
      state.profile = {}
    }
  },
  actions: {
    async getUse ({ commit }, useInfo) {
      const { result } = await userAccountLogin(useInfo)
      commit('setUse', result)
    },
    // 退出
    logout ({ commit }) {
      commit('delUse')
      // 清空购物车重要防止无效叠加
      commit('cart/setListCart', [], { root: true })
    }
  }
}
