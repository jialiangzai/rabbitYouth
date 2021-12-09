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
    // 1. 有效商品列表 =》无效商品（没库存或下架了）
    // 2. 选中的购物车商品数据
    // 3. 选中商品总价
    // 4. 购物车中有效商品是否是全部选中状态
    effectiveList: (state) => {
      return state.cart.filter(item => item.isEffective)
    },
    selectedList: (state, getters) => {
      return getters.effectiveList.filter(item => item.selected)
    },
    allSelectedPrice: (state, getters) => {
      return getters.selectedList.reduce((a, c) => (a += c.count * c.nowPrice), 0)
    },
    isAll: (state, getters) => {
      return getters.effectiveList.every(item => item.selected)
    }
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
    },
    // 单选
    // 第二个参数表示调用时候传递的参数可以解构
    SingleChe (state, { good, sel }) {
      // const currentIndex = state.cart.findIndex(item => item.skuId === good.skuId)
      // state.cart[currentIndex].selected = sel
      state.cart.find(item => item.skuId === good.skuId).selected = sel
    },
    // 全选
    AllChe (state, sel) {
      state.cart.forEach(item => {
        item.selected = sel
      })
    },
    // 删除
    delCartSing (state, good) {
      const currentIndex = state.cart.findIndex(item => item.skuId === good.skuId)
      state.cart.splice(currentIndex, 1)
    }
  },
  actions: {
    // 加入
    async addCartListActions ({ commit, rootState }, good) {
      // 判断状态
      if (rootState.user.profile.token) {
        // 调接口---存储数据库
      } else {
        commit('addCartList', good)
        return '加入购物车成功'
      }
    },
    // 单选
    async SingleCheActions ({ commit, rootState }, { good, sel }) {
      // 判断状态
      if (rootState.user.profile.token) {
        // 调接口---存储数据库
      } else {
        commit('SingleChe', { good, sel })
      }
    },
    // 全选
    async AllCheActions ({ commit, rootState }, sel) {
      // 判断状态
      if (rootState.user.profile.token) {
        // 调接口---存储数据库
      } else {
        commit('AllChe', sel)
        return '操作成功'
      }
    },
    // 删除
    async delCartSingActions ({ commit, rootState }, good) {
      // 判断状态
      if (rootState.user.profile.token) {
        // 调接口---存储数据库
      } else {
        commit('delCartSing', good)
        return '操作成功'
      }
    }
  }
}
