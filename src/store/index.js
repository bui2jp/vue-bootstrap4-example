import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isAuthenticated : false
  },
  mutations: {
    afterSignIn(state){
      state.isAuthenticated = true
    },
    afterSignOut(state){
      state.isAuthenticated = false
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    isAuthenticated: state => {
      return state.isAuthenticated
    }
  }
})
