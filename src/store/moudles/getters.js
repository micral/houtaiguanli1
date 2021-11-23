// 集中暴露vuex
import variables from '@/style/variables.scss'
 export default {
  token:(state)=>state.user.token,
  useInfo:(state)=>state.user.useInfo,
  hasuseInfo:(state)=>{
    return JSON.stringify(state.user.useInfo) !== '{}'
  },
  cssVar:(state)=>variables,
  sideBarOpended:(state)=>state.app.sideBarOpended
}

