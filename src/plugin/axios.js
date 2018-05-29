import axios from 'axios'
import qs from 'qs'
import util from '@/plugin'
import router from '@/router'
import {Toast} from 'vant'

let options = {
  timeout: 80000, //  超时时间
  // withCredentials: true, //  发送跨域请求
  headers: { 'content-type': 'application/x-www-form-urlencoded' }
}

// 请求错误处理
let axiosInstance = axios.create(options)
axiosInstance.interceptors.request.use(config => {
  const loginToken = util.getCookie('loginToken')
  if (config.method === 'post') {
    if (!config.data) {
      config.data = {}
    }
    config.data.loginToken = loginToken
    config.data = qs.stringify(config.data)
  }

  if (config.method === 'get') {
    if (config.params) {
      config.params.loginToken = loginToken
    } else {
      config.params = { loginToken }
    }
  }
  return config
}, function(error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

axiosInstance.interceptors.response.use(response => {
  // 业务状态码不等于200
  const config = response.config
  const headers = response.headers
  let data = response.data || {}
  const { bizCode, msg } = data

  // 登录失效跳转到登录
  if (bizCode === -1 || bizCode === -3) {
    util.delCookie('loginToken')
    Toast(msg)
    router.push('login')
  }

  return Promise.resolve(data || {})
}, (error) => {
  // Message.error(error.message || '系统出错')
  // API 返回401 就删除cookie
  // 跳转到登陆页面
  // api 接口返回未登陆
  // if (error.response.status === 401) {
  //   util.delCookie('loginToken')
  //   window.location = '/login'
  // }
  // // api 接口返回没有当前接口的权限
  // if (error.response.status === 403) {
  //   // 做点什么事
  // }

  return Promise.reject(error)
})

export default axiosInstance