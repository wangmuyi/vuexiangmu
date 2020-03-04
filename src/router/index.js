import Vue from 'vue'
import VueRouter from 'vue-router' // 路由核心模块
import Login from '@/views/Login'
import Index from '@/views/Index'
Vue.use(VueRouter) // 注册路由插件
// 路由映射表
const routes = [
  // {
  //   path: '/film',
  //   component: Film,
  //   children: [
  //     {
  //       path: '/film/nowplaying',
  //       component: Nowplaying
  //     },
  //     {
  //       path: '/film/comingsoon',
  //       component: Comingsoon
  //     },
  //     {
  //       path: '/film',
  //       redirect: '/film/nowplaying'
  //     }
  //   ]
  // },
  // {
  //   path: '/film/nowplaying',
  //   component: Nowplaying
  // },
  // {
  //   path: '/cinema',
  //   component: () => import(/* webpackChunkName:'kerwincinema' */'@/views/Cinema') // webpack 代码分割
  // },
  // {
  //   path: '/cinema/search',
  //   component: Search
  // },
  // {
  //   path: '/center',
  //   component: Center
  // },
  // {
  //   path: '/city',
  //   component: City
  // },
  // {
  //   path: '/detail/:kerwinid', // kerwinid
  //   component: Detail
  // },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/index',
    component: Index
  },
  {
    path: '/',
    redirect: '/index' // 重定向
  }

  // {
  //   path: '*',
  //   component: ErrorComponent
  // }

]

const router = new VueRouter({
  mode: 'hash', // history  hash
  routes
})

// 配置全局路由守卫（拦截）

// router.beforeEach((to,from,next)=>{
//   // console.log(to) //跳转的是center才拦截
//   if(to.path=== '/center'){
//     // console.log("被拦截")
//     if(localStorage.getItem("token")){
//       next()
//     }else{
//       console.log('重定向到 login页面')
//       next("/login")
//     }
//   }else{
//     next()
//   }
// })

export default router
