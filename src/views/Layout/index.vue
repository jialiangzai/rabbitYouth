<template>
  <!-- 顶部通栏  -->
  <TopNav />
  <header>头部</header>
  <main>
    <!-- 二级路由出口 -->
    <router-view></router-view>
  </main>
  <footer>底部</footer>
</template>

<script>
import TopNav from './components/topnav.vue'
export default {
  name: 'xtx-layout',
  components: {
    TopNav
  }
}
</script>

<style scoped lang='less'></style>
