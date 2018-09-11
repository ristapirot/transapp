import Vue from 'vue'
import Vuex from 'vuex'
import login from './modules/login'
import countries from './modules/countries'
import fleets from './modules/fleets'
import user from './modules/user'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    login,
    countries,
    fleets,
    user
  }
})
