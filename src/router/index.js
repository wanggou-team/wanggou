import Vue from 'vue'
import Router from 'vue-router'
import util from '@/plugin'
import store from '@/store'

import Index from '@/components/Index'
import Login from '@/components/Login'
import About from '@/components/About'
import History from '@/components/History'
import Home from '@/components/Home'
import User from '@/components/User'
import Recovery from '@/components/Recovery'
import BindCard from '@/components/BindCard'
import Auth from '@/components/Auth'
import Defect from '@/components/defect';
import Wait from '@/components/Wait';
import Message from '@/components/Message';
import TransferAgreement from "@/components/TransferAgreement"

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: '/html/',
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
      meta: {
        requiresAuth: true
      },
      component: User
    },
    {
      path: '/recovery',
      name: 'Recovery',
      meta: {
        requiresAuth: true
      },
      component: Recovery
    },
    {
      path: '/bindCard',
      name: BindCard,
      meta: {
        requiresAuth: true
      },
      component: BindCard
    },
    {
      path: '/auth',
      name: 'Auth',
      meta: {
        requiresAuth: true
      },
      component: Auth
    },
    {
      path: '/defect',
      name: 'defect',
      component: Defect
    },
    {
      path: '/wait',
      name: 'wait',
      meta: {
        requiresAuth: true
      },
      component: Wait
    },
    {
      path: '/message',
      name: 'Message',
      meta: {
        requiresAuth: true
      },
      component: Message
    },
    {
      path: '/transferAgreement',
      name: 'transferAgreement',
      meta: {
        requiresAuth: false
      },
      component: TransferAgreement
    },
    {
      path: "*",
      name: '404',
      component: Defect
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
    store.dispatch('getUser').then((data = {}) => {
      if (data.userNm) {
        next()
      } else {
        next({
          name: 'Login'
        })
      }
    })
  } else {
    next()
  }
})
export default router