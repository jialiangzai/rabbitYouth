import axios from 'axios'
import store from '@/store'
import router from '@/router'
// baseURL 超时时间配置
const instance = axios.create({
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net'
})

// 全局注入token
instance.interceptors.request.use(config => {
  const { token } = store.state.user.profile
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
}, e => Promise.reject(e))

// 处理返回数据 token失效跳回到登录页
instance.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    if (error.response && error?.response.status === 401) {
      const redirectUrl = router.currentRoute.value.fullPath
      router.replace(`/login?redirectUrl?${redirectUrl}`)
      store.dispatch('user/logout')
    }
    return Promise.reject(error)
  }
)
// 二次封装
const request = (url, method, data) => {
  return instance({
    url,
    method,
    [method.toLowerCase() === 'get' ? 'params' : 'data']: data
  })
}
export default request
