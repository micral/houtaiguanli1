// 定义user相关的网络请求
import serve from '../utlis/axios'
export const speace=(data)=>{
  // axios请求
 return   serve.request({
    url:'/sys/login',
    method:'POST',
    data
  })
}

export const getuseInfo=()=>{
  return  serve.request({
    url:'/sys/profile',
    method:'GET',
  })
}