export default {
  namespaced: true,
  // state: {
  //   value: 'my value'
  // },
  // 优化
  state: () => ({
    cart: []
  }),
  getters: {
  },
  mutations: {
    // 加入购物车 // 看skuId唯一标识是否一致如果一致数量加一
    addCartList (state, good) {
      const currentIndex = state.cart.findIndex(item => item.skuId === good.skuId)
      if (currentIndex > -1) {
        state.cart[currentIndex].count += good.count
      } else {
        state.cart.unshift(good)
      }
    }
  },
  actions: {
    async addCartListActions ({ commit, rootState }, good) {
      // 判断状态
      if (rootState.user.profile.token) {
        // 调接口---存储数据库
      } else {
        commit('addCartList', good)
        return '加入购物车成功'
      }
    }
  }
}
