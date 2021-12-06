
// 懒加载
import { useIntersectionObserver } from '@vueuse/core'
// 默认
import defImg from '@/assets/images/load.gif'
// 插件
// 全局指令----------图片懒加载
export default {
  install (app) {
    app.directive('imglazy', {
      // 配置项 需要写在绑定组件的钩子函数中之前vue2使用的是inserted,vue3是mounted
      // img绑定指令的元素，如果需要自定义则是用binding配置
      mounted (img, binding) {
        // console.dir(img)
        // 这里的img是vue3.0方式绑定的dom对象(容器)
        const { stop } = useIntersectionObserver(img,
          // 执行的回调 这里的eles表示被监视的属性对象
          ([{ isIntersecting }], eles) => {
            // 动态设置loading
            img.src = defImg
            if (isIntersecting) {
              // 进入了 ---停止监视
              stop()
              // 加载图片
              setTimeout(() => {
                img.src = binding.value
              }, 1000)
              // 失败
              img.onerror = () => {
                img.src = defImg
              }
            }
          },
          // 阈值
          {
            threshold: 0
          }
        )
      }
    })
  }
}
