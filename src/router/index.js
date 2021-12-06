import { createRouter, createWebHashHistory } from 'vue-router'
const Layout = () => import('@/views/Layout/index.vue')
const Home = () => import('@/views/Home/index.vue')
const Goods = () => import('@/views/Goods')
// 创建路由实例
const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/',
        component: Home
      },
      // 商品详情
      {
        path: '/goods/:id',
        component: Goods
      }
    ]
  }
]

const router = createRouter({
  // 使用hash方式实现路由
  history: createWebHashHistory(),
  // 配置路由规则，写法和之前一样
  routes
})

export default router
