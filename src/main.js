// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
import {Left,Nav,Righttop,Rightcenter,Rightbiao,Paging,Tab,Msgbiao,Select,Biaoti,Zhaiyao,Bianji,Ueditor,Fujian,Shenpi,Basic_information,Dzcx,Dzgy,Gryw,Hzcx,Mxcx,Mzgz,Qyfw,Xtcs,Ywcs,Zylx} from './my-ui'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

import  './assets/css/common.scss'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'

import $ from 'jquery'
import http from './http/http'

Vue.use(ElementUI)

Vue.use(Left)
Vue.use(Nav)
Vue.use(Righttop)
Vue.use(Rightcenter)
Vue.use(Rightbiao)
Vue.use(Paging)
Vue.use(Tab)
Vue.use(Msgbiao)
Vue.use(Select)
Vue.use(Biaoti)
Vue.use(Zhaiyao)
Vue.use(Bianji)
Vue.use(Ueditor)
Vue.use(Fujian)
Vue.use(Shenpi)
Vue.use(Basic_information)


Vue.use(Dzcx)
Vue.use(Dzgy)
Vue.use(Gryw)
Vue.use(Hzcx)
Vue.use(Mxcx)
Vue.use(Mzgz)
Vue.use(Qyfw)
Vue.use(Xtcs)
Vue.use(Ywcs)
Vue.use(Zylx)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
