
import Skeleton from '@/components/Skeleton'
import Slider from '@/components/Slider'
import More from '@/components/More'

const cpp = [Skeleton, Slider, More]
// 批量注册全局组件
export default {
  // 注意参数是vue实例对象
  install (app) {
    cpp.forEach(cp => {
      app.component(cp.name, cp)
    })
  }
}
