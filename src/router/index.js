import Vue from 'vue'
import Router from 'vue-router'
import util from '@/plugin'

import Index from '@/components/Index'
import Login from '@/components/Login'
import About from '@/components/About'
import History from '@/components/History'
import Home from '@/components/Home'
import User from '@/components/User'
import Recovery from '@/components/Recovery'
import BindCard from '@/components/BindCard'
import Auth from '@/components/Auth'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/history',
      name: 'History',
      meta: {
        requiresAuth: true
      },
      component: History
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/user',
      name: 'User',
      component: User
    },
    {
      path: '/recovery',
      name: 'Recovery',
      component: Recovery
    },
    {
      path: '/bindCard',
      name: BindCard,
      component:BindCard
    },
    {
      path: '/auth',
      name: 'Auth',
      component: Auth
    }
  ]
})

router.beforeEach((to, from, next) => {
  let token = util.getCookie('loginToken')

  // 如果有在已经登录的情况下 导航到登录页面
  // 就重定向到首页
  if (to.path === '/login' && token) {
    next({
      name: 'Index'
    })
    return
  }

  // 需要登录路由
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // 没有登录
    if (!token) {
      next({
        path: '/login'
      })
    // 已登录
    } else {
      debugger
      next()
    }
  } else {
    next()
  }
})
export default router