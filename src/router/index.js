import { createRouter, createWebHashHistory } from 'vue-router'
// 创建路由实例
const routes = [

]

const router = createRouter({
  // 使用hash方式实现路由
  history: createWebHashHistory(),
  // 配置路由规则，写法和之前一样
  routes
})

export default router
