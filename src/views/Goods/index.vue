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
          <GoodsSales :goods="goods" />
        </div>
        <!-- 商品信息区 -->
        <div class="spec">
          <GoodsName />
          <!-- 商品规格 -->
          <GoodsSku :goods="goods" @change="changSku" />
          <!-- 数量 -->
          <XtxNumbox :max="goods.inventory" :min="1" v-model="num" />
        </div>
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
import { provide } from 'vue'
import GoodsSales from './components/goods-sales.vue'
import GoodsName from './components/goods-name.vue'
export default {
  name: 'XtxGoodsPage',
  components: {
    GoodsImage,
    GoodsSales,
    GoodsName
  },
  setup () {
    // 数量
    const num = ref(2)
    const goods = ref({})
    // 依赖注入
    provide('goods', goods)
    const route = useRoute()
    const goodsDetail = async () => {
      const { result } = await findGoods(route.params.id)
      console.log('当前商品信息', result)
      goods.value = result
    }
    goodsDetail()
    // sku
    // 产出当前选择的商品规格信息，如果是完整的sku，产出完整的对象信息，如果不完整，则产出空对象
    const changSku = (skuObj) => {
      if (skuObj.skuId) {
        // 根据不同规格改变不同的价格和库存
        goods.value.inventory = skuObj.inventory
        goods.value.oldPrice = skuObj.oldPrice
        goods.value.price = skuObj.price
      }
    }
    return {
      goods,
      changSku,
      num
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
