import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    user: {},
    bankList: []
  },

  mutations: {
    SET_USER(state, payload){
      state.user = payload
    },
    SET_BANKLIST(state, payload){
      state.bankList = payload
    }
  }
})

export default store