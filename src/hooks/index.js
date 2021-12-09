import { ref, onUnmounted, computed } from 'vue'
import { useIntersectionObserver, useIntervalFn } from '@vueuse/core'
import dayjs from 'dayjs'
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
// 倒计时
export function useCountDown (time) {
  const countTime = ref(0)

  // 计算属性基于现在的countTime做一个转换处理
  const countTimeText = computed(() => {
    // 完成转换逻辑
    return dayjs.unix(countTime.value).format('mm分ss秒')
  })

  const { pause, resume } = useIntervalFn(() => {
    /* your function */
    // 自减逻辑
    countTime.value--
    // 到零停止
    if (countTime.value <= 0) {
      pause()
    }
  }, 1000, { immediate: false })

  // 开始计时方法
  function start (tm) {
    if (countTime.value === 0) {
      countTime.value = time || tm
    }
    resume()
  }

  // 清理一下定时器
  // 组件的卸载之后
  onUnmounted(() => {
    pause()
  })

  // console.log(pause, resume, isActive)
  return { countTime, start, pause, countTimeText }
}
