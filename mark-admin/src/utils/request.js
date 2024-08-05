import axios from 'axios'
import { useRouter } from 'vue-router'
const router = useRouter
const baseURL = import.meta.evn.VITE_BASE_API

// axios默认配置
axios.defaults.timeout = 40000 // 超时时间
axios.defaults.baseURL = baseURL + '/admin'

// 请求拦截器
axios.interceptors.request.use(
    function (config) {
              config.headers['Content-Type'] = 'application/json;charset=UTF-8'
      if (localStorage.getItem('token')) {
              config.headers.token = localStorage.getItem('token')
      }
      return config
    },
    function (error) {
      return Promise.reject(error)
    }
  )
  
  // 响应拦截器
axios.interceptors.response.use(
    function (response) {
      console.log('response=====:\n', response);
      if (response?.data?.code === 4001) {
        // token失效
        localStorage.removeItem('token')
        sessionStorage.setItem('refreshToken', true)
        return router.replace('/login')
      }
      return response.data
    },
    function (error) {
      if (error && error.response) {
        switch (error.response.status) {
          case 400:
            error.message = '请求错误'
            break
          case 401:
            error.message = '未授权，请登录'
            break
          case 403:
            error.message = '拒绝访问'
            break
          case 404:
            error.message = `请求地址出错: ${error.response.config.url}`
            break
          case 408:
            error.message = '请求超时'
            break
          case 500:
            error.message = '服务器内部错误'
            break
          case 501:
            error.message = '服务未实现'
            break
          case 502:
            error.message = '网关错误'
            break
          case 503:
            error.message = '服务不可用'
            break
          case 504:
            error.message = '网关超时'
            break
          case 505:
            error.message = 'HTTP版本不受支持'
            break
          default:
            break
        }
      }
      return Promise.reject(error)
    }
)

  export default axios