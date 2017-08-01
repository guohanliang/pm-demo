import Vue from 'vue'
import Router from 'vue-router'

import Dzcx from '@/my-ui/DZCX'
import Dzgy from '@/my-ui/DZGY'
import Gryw from '@/my-ui/GRYW'
import Hzcx from '@/my-ui/HZCX'
import Mxcx from '@/my-ui/MXCX'
import Mzgz from '@/my-ui/MZGZ'
import Qyfw from '@/my-ui/QYFW'
import Xtcs from '@/my-ui/XTCS'
import Ywcs from '@/my-ui/YWCS'
import Zylx from '@/my-ui/ZYLX'

Vue.use(Router)

// 路由拦截
const router = new Router({
  routes: [
    {path: '/Dzcx',component: Dzcx},
    {path: '/Dzgy',component: Dzgy},
    {path: '/Gryw',component: Gryw},
    {path: '/Hzcx',component: Hzcx},
    {path: '/Mxcx',component: Mxcx},
    {path: '/Mzgz',component: Mzgz},
    {path: '/Qyfw',component: Qyfw},
    {path: '/Xtcs',component: Xtcs},
    {path: '/Ywcs',component: Ywcs},
    {path: '/Zylx',component: Zylx
        // ,meta:{requireAuth:true}
    },
    {path:'/',redirect:'/Dzcx'},
    {path:'*',redirect:'/Dzcx'}
  ]
})



//  判断是否需要登录权限 以及是否登录
//  beforeEach：在路由切换开始时调用
router.beforeEach((to, from, next) => {
   if (to.matched.some(res => res.meta.requireAuth)) {// 判断是否需要登录权限
     if (localStorage.getItem('username')) {// 判断是否登录
       next()
     } else {// 没登录则跳转到登录界面
       next({
         path: '/Register',
         query: {redirect: to.fullPath}
       })
     }
   } else {
     next()
   }
})

export default router
