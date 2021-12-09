import { createRouter, createWebHashHistory } from 'vue-router'
const Layout = () => import('@/views/Layout/index.vue')
const Home = () => import('@/views/Home/index.vue')
const Goods = () => import('@/views/Goods')
const Login = () => import('@/views/Login')
const Cart = () => import('@/views/Cart')
const Settlement = () => import('@/views/Member/settlement')
const Order = () => import('@/views/Member/order')
const Pay = () => import('@/views/Member/pay/index')
const PayResult = () => import('@/views/Member/pay/result')
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
      },
      {
        path: '/cart',
        component: Cart
      },
      {
        path: '/settlement',
        component: Settlement
      },
      {
        path: '/order',
        component: Order
      },
      { path: '/pay', component: Pay },
      { path: '/pay/callback', component: PayResult }
    ]
  },
  // 登录
  {
    path: '/login',
    component: Login
  }
]

const router = createRouter({
  // 每次切换路由重置滚动条
  scrollBehavior: () => ({ left: 0, top: 0 }),
  // 使用hash方式实现路由
  history: createWebHashHistory(),
  // 配置路由规则，写法和之前一样
  routes
})

export default router
