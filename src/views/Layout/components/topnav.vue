<template>
  <nav class="app-topnav">
    <div class="container">
      <ul>
        <template v-if="token">
          <li>
            <a href="javascript:;"
              ><i class="iconfont icon-user"></i
              >{{
                store.state.user.profile.nickname ||
                store.state.user.profile.account ||
                "刘德华"
              }}</a
            >
          </li>
          <li><a href="javascript:;" @click="logoutUse">退出登录</a></li>
        </template>
        <!-- 未登录 -->
        <template v-else>
          <li><RouterLink to="/login">请先登录</RouterLink></li>
          <li><a href="javascript:;">免费注册</a></li>
        </template>
        <li><a href="javascript:;">我的订单</a></li>
        <li><a href="javascript:;">会员中心</a></li>
        <li><a href="javascript:;">帮助中心</a></li>
        <li><a href="javascript:;">关于我们</a></li>
        <li>
          <a href="javascript:;"><i class="iconfont icon-phone"></i>手机版</a>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
export default {
  name: 'AppTopnav',
  setup () {
    const store = useStore()
    const { token } = store.state.user.profile
    const router = useRouter()
    // 退出
    const logoutUse = () => {
      store.dispatch('user/logout')
      router.replace('/login')
    }
    return { token, logoutUse, store }
  }
}
</script>
<style scoped lang="less">
.app-topnav {
  background: #333;
  ul {
    display: flex;
    height: 53px;
    justify-content: flex-end;
    align-items: center;
    li {
      a {
        padding: 0 15px;
        color: #cdcdcd;
        line-height: 1;
        display: inline-block;
        i {
          font-size: 14px;
          margin-right: 2px;
        }
        &:hover {
          color: @xtxColor;
        }
      }
      ~ li {
        a {
          border-left: 2px solid #666;
        }
      }
    }
  }
}
</style>
