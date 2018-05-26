import Vue from 'vue'
import Vuex from 'vuex'
import axios from '@/plugin/axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    // 登录用户信息
    user: {},

    // 登录用户

    // 花券面额
    cardPrice: {},

    // 可用银行列表
    bankList: []
  },

  mutations: {
    // 设置用户
    SET_USER(state, payload = {}) {
      state.user = payload
    },
    // 设置面额
    SET_CARDPRICE(state, payload) {
      state.cardPrice = payload
    },
    // 设置银行列表
    SET_BANKLIST(state, payload = []) {
      state.bankList = payload
    }
  },
  actions: {
    // 获取可用银行卡
    async getBankList({ commit }) {
      const data = await axios.get('/apis/common/bankList.htm')
      commit('SET_BANKLIST', data.data)
    },

    // 获取花券面额
    async getCardPrice({ commit }) {
      const data = await axios.get('/apis/front/loanOrder/loan.htm')
      let cardPrice = {}
      if (data.bizCode === 1) {
        cardPrice = data.data
        cardPrice.text = cardPrice.loanAmount
      }
      commit('SET_CARDPRICE', cardPrice)
    },

    // 获取登录用户信息
    async getUser({ commit }) {
      const data = await axios.get('/apis/front/loanOrder/info.htm')
      commit('SET_USER', data.data)
    }
  }
})

export default store