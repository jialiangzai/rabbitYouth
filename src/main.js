import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 重置样式
import 'normalize.css'
// 公共样式
import './styles/common.less'
createApp(App).use(store).use(router).mount('#app')
