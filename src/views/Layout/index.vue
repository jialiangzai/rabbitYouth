<template>
  <!-- 顶部通栏  -->
  <TopNav />
  <!-- 头部 -->
  <XtxHeader />
  <!-- 吸顶 -->
  <XtxHeaderSticky />
  <main>
    <!-- 二级路由出口 -->
    <router-view></router-view>
  </main>
  <!-- 底部 -->
  <XtxFooter />
</template>

<script>
import TopNav from './components/topnav.vue'
import XtxHeader from './components/header.vue'
import XtxFooter from './components/footer.vue'
import XtxHeaderSticky from './components/header-sticky.vue'
// 吸顶和header组件复用导致请求两次
import { useStore } from 'vuex'
export default {
  name: 'xtx-layout',
  components: {
    TopNav,
    XtxHeader,
    XtxFooter,
    XtxHeaderSticky
  },
  setup () {
    const store = useStore()
    store.dispatch('category/getListCate')
    return {
    }
  }
}
</script>

<style scoped lang='less'></style>
