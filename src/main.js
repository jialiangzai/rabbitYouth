import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 全局注册组件
import CopPlugins from '@/components'
//  全局指令
import dirPlugins from '@/directives'
// 重置样式
import 'normalize.css'
// 公共样式
import './styles/common.less'
createApp(App).use(store).use(router).use(CopPlugins).use(dirPlugins).mount('#app')
