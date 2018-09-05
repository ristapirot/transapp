import Vue from 'vue'
import Vuex from 'vuex'
import login from './modules/login'
import countries from './modules/countries'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    login,
    countries
  }
})
