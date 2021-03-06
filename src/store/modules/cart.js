
import { mergeLocalCart, findCartList, insertCart, deleteCart, updateCart, checkAllCart } from '@/api/cart.js'

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
    },
    // 修改数量
    countChang (state, { good, num }) {
      state.cart.find(item => item.skuId === good.skuId).count = num
    },
    // 合并存储登录后的
    setListCart (state, list) {
      state.cart = list
    }
  },
  actions: {
    // 加入
    async addCartListActions ({ commit, rootState, dispatch }, good) {
      // 判断状态
      if (rootState.user.profile.token) {
        // 调接口---存储数据库
        await insertCart(good)
        // 拉新
        await dispatch('findCartList')
        return '加入购物车成功'
      } else {
        commit('addCartList', good)
        return '加入购物车成功'
      }
    },
    // 单选
    async SingleCheActions ({ commit, rootState, dispatch }, { good, sel }) {
      // 判断状态
      if (rootState.user.profile.token) {
        // 调接口---存储数据库
        await updateCart({ ...good, selected: sel })
        await dispatch('findCartList')
      } else {
        commit('SingleChe', { good, sel })
      }
    },
    // 全选
    async AllCheActions ({ commit, rootState, dispatch, getters }, sel) {
      // 判断状态
      if (rootState.user.profile.token) {
        // 调接口---存储数据库
        // ids有效商品skuId集合
        const ids = getters.effectiveList.map(item => item.skuId)
        await checkAllCart({ selected: sel, ids })
        await dispatch('findCartList')
        return '操作成功'
      } else {
        commit('AllChe', sel)
        return '操作成功'
      }
    },
    // 删除
    async delCartSingActions ({ commit, rootState, dispatch }, good) {
      // 判断状态
      if (rootState.user.profile.token) {
        // 调接口---存储数据库
        await deleteCart([good.skuId])
        // 拉新
        await dispatch('findCartList')
        return '操作成功'
      } else {
        commit('delCartSing', good)
        return '操作成功'
      }
    },
    // 修改数量
    async countChangActions ({ commit, rootState, dispatch }, { good, num }) {
      // 判断状态
      if (rootState.user.profile.token) {
        // 调接口---存储数据库
        await updateCart({ ...good, count: num })
        // 拉新
        await dispatch('findCartList')
      } else {
        commit('countChang', { good, num })
      }
    },
    // 获取最新购物车
    async findCartList ({ commit }) {
      // 最新的
      const { result } = await findCartList()
      commit('setListCart', result)
    },
    // 登录后合并本地购物车
    async mergeCart ({ state, dispatch }) {
      // 判断本地是否存在购物车
      if (state.cart.length) {
        // 存储数据库--合并本地
        // * @param { Array < object >} cartList - 本地购物车数组
        //   * @param { String } item.skuId - 商品skuId
        //     * @param { Boolean } item.selected - 是否选中
        //       * @param { Integer } item.count - 数量
        const reqDa = state.cart.map(({ skuId, selected, count }) => ({ skuId, selected, count }))
        await mergeLocalCart(reqDa)
        // 虽然数据库更新最新的购物车，本地还是旧的，，同步
      }
      // setListCart
      await dispatch('findCartList')
    }
  }
}
