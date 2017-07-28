import Vue from 'vue'
import Vuex from 'vuex'
import 'babel-polyfill'

import dzcx from './modules/DZCX.js'
import page from './modules/page.js'
import pagecon from './modules/pagecon.js'

Vue.use(Vuex)

// 向外输出数据store实例
export default new Vuex.Store({
  modules: {
    dzcx,
    page,
    pagecon
  }

})
