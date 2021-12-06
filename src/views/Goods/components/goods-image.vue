<template>
  <div class="goods-image">
    <div class="middle">
      <!-- 动态显示图片 -->
      <img :src="imgs[currentIndex]" alt="" />
    </div>
    <ul class="small">
      <!-- 拿到最新的下标 -->
      <li
        v-for="(img, i) in imgs"
        :key="i"
        @mouseenter="currentIndex = i"
        :class="{ active: currentIndex === i }"
      >
        <img :src="img" alt="" />
      </li>
    </ul>
  </div>
</template>
<script>
import { ref } from 'vue-demi'
export default {
  name: 'GoodsImage',
  props: {
    imgs: {
      type: Array,
      default: () => []
    }
  },
  setup () {
    const currentIndex = ref(0)
    return { currentIndex }
  }
}
</script>
<style scoped lang="less">
.goods-image {
  width: 480px;
  height: 400px;
  position: relative;
  display: flex;
  .middle {
    width: 400px;
    height: 400px;
    background: #f5f5f5;
  }
  .small {
    width: 80px;
    li {
      width: 68px;
      height: 68px;
      margin-left: 12px;
      margin-bottom: 15px;
      cursor: pointer;
      &:hover,
      &.active {
        border: 2px solid @xtxColor;
      }
    }
  }
}
</style>
