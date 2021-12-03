<template>
  <!-- 一级路由 -->
  <router-view />
  <!-- <p>{{ $store.state.user.profile }}</p>
  <button @click="$store.commit('user/updateToken', 'tokem000000')">
    测试第三方插件实现vuex持久化
  </button> -->
</template>
<script>
// 测试 import request from '@/utils/request.js'
export default {
  setup () {
    // request('/home/banner', 'get').then(res => console.log(res))
  }
}
</script>
<style lang="less">
</style>
