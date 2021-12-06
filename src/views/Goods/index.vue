<template>
  <div class="xtx-goods-page" v-if="goods.categories">
    <div class="container">
      <!-- 面包屑 -->
      <XtxBread separator="/">
        <!-- 首页固定 -->
        <XtxBreadItem to="/">首页</XtxBreadItem>
        <!-- 一级 -->
        <XtxBreadItem to="/">{{ goods.categories[1].name }}</XtxBreadItem>
        <!-- 二级 -->
        <XtxBreadItem to="/">{{ goods.categories[0].name }}</XtxBreadItem>
        <!-- 自身 -->
        <XtxBreadItem to="/">{{ goods.name }}</XtxBreadItem>
      </XtxBread>
      <!-- 商品信息 -->
      <div class="goods-info">
        <!-- 新增结构 -->
        <!-- 图片预览区 mainPictures-->
        <div class="media">
          <!-- 预览 -->
          <GoodsImage :imgs="goods.mainPictures" />
        </div>
        <!-- 商品信息区 -->
        <div class="spec"></div>
      </div>
      <!-- 商品详情 -->
      <div class="goods-footer">
        <div class="goods-article">
          <div class="goods-tabs">
            <!-- 详情图片列表 -->
            <img />
          </div>
        </div>
        <div class="goods-aside"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { findGoods } from '@/api/goods'
import { useRoute } from 'vue-router'
// 预览区
import GoodsImage from './components/goods-image.vue'
import { ref } from 'vue-demi'

export default {
  name: 'XtxGoodsPage',
  components: {
    GoodsImage
  },
  setup () {
    const goods = ref({})
    const route = useRoute()
    const goodsDetail = async () => {
      const { result } = await findGoods(route.params.id)
      console.log('当前商品信息', result)
      goods.value = result
    }
    goodsDetail()
    return {
      goods

    }
  }
}
</script>

<style scoped lang='less'>
.goods-info {
  min-height: 600px;
  background: #fff;
  display: flex;
  // 新增样式
  .media {
    width: 580px;
    height: 600px;
    padding: 30px 50px;
  }
  .spec {
    flex: 1;
    padding: 30px 30px 30px 0;
  }
}
.goods-footer {
  display: flex;
  margin-top: 20px;
  .goods-article {
    width: 940px;
    margin-right: 20px;
  }
  .goods-aside {
    width: 280px;
    min-height: 1000px;
    background: #fff;
  }
}
.goods-tabs {
  min-height: 600px;
  background: #fff;
  img {
    width: 100%;
  }
}
.goods-warn {
  min-height: 600px;
  background: #fff;
  margin-top: 20px;
}
</style>
