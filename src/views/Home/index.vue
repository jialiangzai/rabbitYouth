<template>
  <div class="xtx-home-page">
    <div class="home-entry">
      <div class="container">
        <!-- 左侧分类 -->
        <HomeCategory />
        <!-- banner轮播图 -->
        <HomeBanner />
        <!-- 新鲜好物 -->
        <HomePanelNew />
        <!-- 人气推荐 -->
        <HomePanelHot />
        <!-- 商品楼层 -->
        <HomeProduct />
      </div>
    </div>
  </div>
  <!-- <p>测试样式</p> -->
  <!-- <button @click="$store.dispatch('category/getListCate')">商品</button> -->
</template>

<script>
import HomeCategory from './components/home-category.vue'
import HomeBanner from './components/home-banner.vue'
import HomePanelNew from './components/home-new.vue'
import HomePanelHot from './components/home-hot.vue'
import HomeProduct from './components/home-product.vue'
export default {
  name: 'xtx-home-page',
  components: {
    HomeCategory,
    HomeBanner,
    HomePanelNew,
    HomePanelHot,
    HomeProduct
  }
}
</script>

<style scoped lang='less'>
// style标签内使用@用~
// @import "~@/styles/variables.less";
// p {
//   color: @helpColor;
// }
</style>
