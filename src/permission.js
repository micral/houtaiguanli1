// // 用户鉴权  路由守卫
// import router from './router/index'
// import store from './store/index'
// // 进入每一个路由就会执行
// // 白名单
// const whiteRouter=['/']
// router.beforeEach((to, from, next) => {
//   console.log(store.getters.token,'ppppp')
//   // 判断是否有token，就是判断是否登录
//   if(store.getters.token){
//     // 登录
//      // 登录后，不能在到登录页
//       if(to.path ==='/'){
//         // 不允许
//         console.log(0)
//         next('/app')
//       }else{
//         // 判断是否有用户信息
//         console.log(!store.getters.hasuseInfo,'prefile')
//         if(!store.getters.hasuseInfo){
//             store.dispatch('user/getuseInfo')
//         }
//         next()
//       }
//   }else{
//     // 未登录
//     if(whiteRouter.indexOf(to.path)>-1){
//       next()
//     }else{
//       next('/')
//     }
    
//   }
// })