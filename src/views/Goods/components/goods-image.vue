<template>
  <!-- <p>{{ elementX }} {{ elementY }} {{ isOutside }}</p> -->
  <div class="goods-image">
    <div
      v-show="!isOutside"
      class="large"
      :style="[
        {
          backgroundImage: `url(${imgs[currentIndex]})`,
          backgroundPosition: `${bg.x}px ${bg.y}px`,
        },
      ]"
    ></div>
    <div class="middle" ref="target">
      <!-- 动态显示图片 -->
      <img :src="imgs[currentIndex]" alt="" />
      <!-- 蒙层 -->
      <div
        v-show="!isOutside"
        class="layer"
        :style="[{ left: `${pos.left}px`, top: `${pos.top}px` }]"
      ></div>
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
import { reactive, ref, watch } from 'vue-demi'
// 获取鼠标的坐标
import { useMouseInElement } from '@vueuse/core'
/**
 * 1. 基于那个元素盒子做限制范围 -----ref获取
 * 2. 调用方法获取坐标及在外面等属性
 */
export default {
  name: 'GoodsImage',
  props: {
    imgs: {
      type: Array,
      default: () => []
    }
  },
  setup () {
    // 限制大小
    const target = ref(null)
    // 偏移量
    const pos = reactive({ left: 0, top: 0 })
    // 放大镜
    const bg = reactive({ x: 0, y: 0 })
    const currentIndex = ref(0)
    // 调用接口拿到坐标------参数表示限制容器 返回三个变量数据
    // elementX 鼠标基于容器左上角X轴偏移
    // elementY 鼠标基于容器左上角Y轴偏移
    // isOutside 鼠标是否在模板容器外
    // 三个参数都是ref对象
    const { elementX, elementY, isOutside } = useMouseInElement(target)
    // 拿到坐标移动蒙层 watch
    watch([elementX, elementY], () => {
      // 根据坐标判断盒子可移动的距离控制盒子的定位偏移量
      // 中心点移动可超出 100-300 不超出 0-200
      // x轴
      if (elementX.value > 300) {
        // 右侧超出
        pos.left = 200
      } else if (elementX.value < 100) {
        // 左侧超出
        pos.left = 0
      } else {
        // 正常 elementX.value-蒙层盒子的一半宽高 (本项目预览盒子无offsetTop/Left)
        pos.left = elementX.value - 100
      }
      // y轴
      if (elementY.value > 300) {
        // 右侧超出
        pos.top = 200
      } else if (elementY.value < 100) {
        // 左侧超出
        pos.top = 0
      } else {
        // 正常 elementY.value-蒙层盒子的一半宽高 (本项目预览盒子无offsetTop/Left)
        pos.top = elementY.value - 100
      }
      // 放大镜盒子是小盒子的两倍移动时是跟随的但是移动的位置要*2，考虑图片以左上角为准 所以是负数让图片相反
      bg.x = -pos.left * 2
      bg.y = -pos.top * 2
    })
    return { currentIndex, target, elementX, elementY, isOutside, pos, bg }
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
// 放大镜
.large {
  position: absolute;
  top: 0;
  left: 412px;
  width: 400px;
  height: 400px;
  z-index: 500;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-repeat: no-repeat;
  // 背景缩放
  background-size: 800px 800px;
  background-color: #f8f8f8;
}
// 蒙层
.layer {
  width: 200px;
  height: 200px;
  background: rgba(0, 0, 0, 0.2);
  left: 0;
  top: 0;
  // 蒙层移动的关键
  position: absolute;
}
</style>
