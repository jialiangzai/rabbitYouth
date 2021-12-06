<template>
  <div class="home-product" ref="target">
    <!-- 面板组件 -->
    <HomePanel :title="i.name" v-for="i in goodsList" :key="i.id">
      <template #right>
        <div class="sub">
          <RouterLink to="/" v-for="secod in i.children" :key="secod.id">
            {{ secod.name }}
          </RouterLink>
        </div>
        <!-- 更多组件 -->
        <XtxMore />
      </template>
      <!-- 默认插槽 -->
      <div class="box">
        <!-- 左侧预览大图片 -->
        <RouterLink class="cover" to="/">
          <img v-imglazy="i.picture" :alt="i.name" />
          <strong class="label">
            <span>{{ i.name }}馆</span>
            <span>{{ i.saleInfo }}</span>
          </strong>
        </RouterLink>
        <!-- 右侧列表 -->
        <ul class="goods-list">
          <li v-for="inGood in i.goods" :key="inGood.id">
            <!-- 商品组件 -->
            <HomeGoods :goods="inGood" />
          </li>
        </ul>
      </div>
    </HomePanel>
  </div>
</template>

<script>
import HomePanel from './home-panel'
import HomeGoods from './home-goods'
import { ref } from 'vue'
import { findGoods } from '@/api/home'
// 组件懒加载
import { useObserver } from '@/hooks'
export default {
  name: 'HomeProduct',
  components: { HomePanel, HomeGoods },
  setup () {
    const goodsList = ref([])
    const getGoodsList = async () => {
      const { result } = await findGoods()
      console.log(result)
      goodsList.value = result
    }
    // getGoodsList()
    const { target } = useObserver(getGoodsList)
    return { goodsList, getGoodsList, target }
  }
}
</script>

<style scoped lang='less'>
.home-product {
  background: #fff;
  height: 2900px;
  .sub {
    margin-bottom: 2px;
    a {
      padding: 2px 12px;
      font-size: 16px;
      border-radius: 4px;
      &:hover {
        background: @xtxColor;
        color: #fff;
      }
      &:last-child {
        margin-right: 80px;
      }
    }
  }
  .box {
    display: flex;
    .cover {
      width: 240px;
      height: 610px;
      margin-right: 10px;
      position: relative;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .label {
        width: 188px;
        height: 66px;
        display: flex;
        font-size: 18px;
        color: #fff;
        line-height: 66px;
        font-weight: normal;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translate3d(0, -50%, 0);
        span {
          text-align: center;
          &:first-child {
            width: 76px;
            background: rgba(0, 0, 0, 0.9);
          }
          &:last-child {
            flex: 1;
            background: rgba(0, 0, 0, 0.7);
          }
        }
      }
    }
    .goods-list {
      width: 990px;
      display: flex;
      flex-wrap: wrap;
      li {
        width: 240px;
        height: 300px;
        margin-right: 10px;
        margin-bottom: 10px;
        &:nth-last-child(-n + 4) {
          margin-bottom: 0;
        }
        &:nth-child(4n) {
          margin-right: 0;
        }
      }
    }
  }
}
</style>
