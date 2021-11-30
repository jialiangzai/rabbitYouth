import { createStore, createLogger } from 'vuex'
import user from './modules/user'
import cart from './modules/cart'
// 第三方
import createPersistedstate from 'vuex-persistedstate'
// 创建vuex仓库并导出
export default createStore({
  state: {
    // 数据
  },
  mutations: {
    // 改数据函数
  },
  actions: {
    // 请求数据函数
  },
  modules: {
    // 分模块
    user,
    cart
  },
  getters: {
    // vuex的计算属性
  },
  plugins: [
    // 自动持久化
    createPersistedstate({
      key: 'erabbit3',
      paths: ['user', 'cart']
    }),
    // 弥补开发工具 显示日志
    createLogger()
  ]
})
