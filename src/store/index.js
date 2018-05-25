import Vue from 'vue'
import Vuex from 'vuex'
import axios from '@/plugin/axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    user: {},
    bankList: []
  },

  mutations: {
    SET_USER(state, payload = {}) {
      state.user = payload
    },
    SET_BANKLIST(state, payload = []) {
      state.bankList = payload
    }
  },
  actions: {
    async getBankList({commit}){
      const data = await axios.get('/apis/front/loanOrder/bankList.htm')
      commit('SET_USER', data.user)
      commit('SET_BANKLIST', data.data)
    }
  }
})

export default store