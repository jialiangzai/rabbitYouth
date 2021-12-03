<template>
  <ul class="app-header-nav">
    <li class="home"><RouterLink to="/">首页</RouterLink></li>
    <!-- 有数据时 -->
    <template v-if="list.length">
      <li v-for="v in list" :key="v.id">
        <a href="#">{{ v.name }}</a>
        <!-- hover 显示 start -->
        <div class="layer">
          <ul>
            <li v-for="sec in v.children" :key="sec.id">
              <a href="#">
                <img :src="sec.picture" alt="" />
                <p>{{ sec.name }}</p>
              </a>
            </li>
          </ul>
        </div>
        <!-- hover 显示 end -->
      </li>
    </template>
    <!-- 没数据的时候显示骨架屏 -->
    <template v-else>
      <li v-for="nn in 9" :key="nn">
        <XtxSkeleton
          :width="40"
          :height="20"
          bg="#ccc"
          style="margin-right: 10px"
        />
      </li>
    </template>
  </ul>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
  name: 'AppHeaderNav',
  setup () {
    const store = useStore()
    // store.dispatch('category/getListCate')
    const list = computed(() => {
      return store.state.category.list
    })
    return {
      list

    }
  }
}
</script>

<style lang="less" scoped>
.app-header-nav {
  width: 820px;
  display: flex;
  padding-left: 40px;
  position: relative;
  z-index: 998;
  > li {
    margin-right: 40px;
    width: 38px;
    text-align: center;
    > a {
      font-size: 16px;
      line-height: 32px;
      height: 32px;
      display: inline-block;
    }
    > a.router-link-exact-active {
      color: @xtxColor;
      border-bottom: 1px solid @xtxColor;
    }
    &:hover {
      > a {
        color: @xtxColor;
        border-bottom: 1px solid @xtxColor;
      }
    }
    // 初始样式 不显示
    .layer {
      width: 1240px;
      background-color: #fff;
      position: absolute;
      left: -200px;
      top: 56px;
      height: 0;
      overflow: hidden;
      opacity: 0;
      box-shadow: 0 0 5px #ccc;
      transition: all 0.2s 0.1s;
      ul {
        display: flex;
        flex-wrap: wrap;
        padding: 0 70px;
        align-items: center;
        height: 124px;
        li {
          width: 110px;
          text-align: center;
          img {
            width: 60px;
            height: 60px;
          }
          p {
            padding-top: 10px;
          }
          &:hover {
            p {
              color: @xtxColor;
            }
          }
        }
      }
    }
    // hover之后显示出来
    &:hover {
      > a {
        color: @xtxColor;
        border-bottom: 1px solid @xtxColor;
      }
      > .layer {
        height: 120px;
        opacity: 1;
      }
    }
    // end
  }
}
</style>
