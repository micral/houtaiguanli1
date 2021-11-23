const state={
   sideBarOpended:true
}
const getters={}
const mutations={
   toggleSideBar(state){
     state.sideBarOpended=!state.sideBarOpended
   }
}
const actions={}
export default{
  namespaced:true,
  state,
  getters,
  mutations,
  actions
}