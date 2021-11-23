import axios from 'axios'
import {ElMessage} from 'element-plus'
import store from '../store/index'
import {isCheckTimeout} from './auth'
const serve=axios.create({
  timeout:5000,
  baseURL:'https://api.imooc-admin.lgdsunday.club/api'
})
// 添加请求拦截器
serve.interceptors.request.use((config)=>{
  // 在发送请求之前做些什么
  // 白名单 ，不需要验证 就能访问的接口
  // const whiteUrl=['/sys/login','/sys/profile']
  // if(config.url !== '/sys/login'){
  //   config.headers.Authorization=getItem(TOKEN)
  // }
  if(store.getters.token){
    config.headers.Authorization = `Bearer ${store.getters.token}`
    // 判断是否过期
    if(!isCheckTimeout()){
        // 过期执行
        store.dispatch('user/login')
        return Promise.reject('token 过期')
    }
  }
  return config;
}, (error)=>{
  // 对请求错误做些什么
  alert('请你登录')
  return Promise.reject(error);
});

// 添加响应拦截器
serve.interceptors.response.use((response)=> {
  let {success,data,message}=response.data
  if(success){
    // 密码正确
    return data
  }else{
    // 密码错误
    ElMessage({
      type:'error',
      message:'账号或密码错误'
    })
    return Promise.reject(new Error(message) );
  }
},(error)=> {
  // token 失效 code=401  单点登录  执行退出
  console.log(error,'0')
  if(error.response && error.response.data && error.response.data.code===401){
          store.dispatch('user/delete')
  }
  // 服务器没有返回数据或服务器坏了，才会触发该函数
  // console.log(error.response,'pppppp')
  // ElMessage({
  //   type:'error',
  //   message: 'token 超时'
  // })
  return Promise.reject(error);
});
export default serve