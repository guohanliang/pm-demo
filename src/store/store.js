

import Vue from 'vue'
import Vuex from 'vuex'

import dzcx from './modules/DZCX.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    dzcx
  }

})
