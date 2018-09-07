import Vue from 'vue'
import Vuex from 'vuex'
import login from './modules/login'
import countries from './modules/countries'
import fleets from './modules/fleets'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    login,
    countries,
    fleets
  }
})
