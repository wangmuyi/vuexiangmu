import Vue from 'vue'
import Vuex from 'vuex'
import login from './module/login'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isTabbarShow: true
  },
  mutations: {
    show (state) {
      state.isTabbarShow = true
    },
    hide (state) {
      state.isTabbarShow = false
    }
  },
  actions: {
  },
  modules: {
    login
  }
})
