
import Skeleton from '@/components/Skeleton'
import Slider from '@/components/Slider'
import More from '@/components/More'
// 面包屑
import Bread from '@/components/Bread'
import BreadItem from '@/components/Bread/item.vue'
import City from '@/components/City'
import Sku from '@/components/Sku'
import Numbox from '@/components/Numbox'
import Buttons from '@/components/Button'
const cpp = [Skeleton, Slider, More, Bread, BreadItem, City, Sku, Numbox, Buttons]
// 批量注册全局组件
export default {
  // 注意参数是vue实例对象
  install (app) {
    cpp.forEach(cp => {
      app.component(cp.name, cp)
    })
  }
}
