 
 import md5 from 'md5'
import {speace,getuseInfo} from '../../api/user.js'
// import {setItem,getItem} from '../../utlis/storage'
import * as utlis  from '../../utlis/storage'
import {TOKEN} from '../../common/common'
import router from '../../router/index'
import { setTimeStamp } from '../../utlis/auth.js'
 const state={
   token: utlis.getItem(TOKEN) || '',
   useInfo:{}
 }
 const getters={}
 const mutations={
   setToken(state,token){
     state.token=token
     // 保存到本地
     utlis.setItem(TOKEN,token)
   },
   
 }
 const actions={
    login({commit},usermessage){
      // usermessage 通过vuex传过来的值
        console.log(usermessage)
        let {username,password} = usermessage
        return new Promise((a,b)=>{
          speace({username,password:md5(password)})
                .then((res)=>{
                   // res是响应拦截器中的data
                  console.log(res.token,'0000')
                  commit('setToken',res.token)
                  // 记录token的保存时间
                  setTimeStamp()
                  a()
                })
                .catch((err)=>{ 
                  console.log(err,'iiii')
                  b(err)
              })
        })
        
    },
    // 退出登录
    delete({commit}){
      // 清除数据 token
      commit('setToken','')
      // 跳转路由
      router.push({path:'/'})
    },
    // 请求用户信息
    getuseInfo({commit}){
      getuseInfo()
      .then((res)=>{
          console.log(res,'信息')
      })
      .catch((err)=>{
        console.log(err,'用户信息')
      })
    }
 }



export default {
  namespaced:true,
  state,
  getters,
  mutations,
  actions,
  
}