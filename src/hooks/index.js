import { ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

// 实现逻辑和数据复用
export function useObserver (ajaxFn) {
  // 检测ref
  const target = ref(null)
  // target 是观察的目标dom对象，必须是dom对象，而且是vue3.0方式绑定的dom对象
  const { stop } = useIntersectionObserver(target,
    ([{ isIntersecting }], elemOb) => {
      // console.log('组件进入了视口', isIntersecting)
      // 正式进入了视口
      if (isIntersecting) {
        // 停止监听元素
        stop()
        // 唯一不同点 发送请求
        ajaxFn()
      }
    },
    // 扩展接口
    // 进入当前元素可视区域的比例是多少才执行回调 0-1 值越大 代表需要进入的面积越大
    // 阈值
    // threshold ?: number | number[]
    { threshold: 0 }
  )
  // 一定要返回检测元素如果不返回那不到ref对象模板也不能使用
  return { target }
}
