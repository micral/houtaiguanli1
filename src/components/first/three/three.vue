<template>
  <div style='display:flex;align-items:center'>
    <svg aria-hidden="true" class='pink' @click='toggleSideBar'>
          <use :xlink:href='getIcon'></use>
    </svg>
    <books/>
  </div>
</template>
<script setup>
import {useStore} from 'vuex'
import {computed} from 'vue'
import Books from '../../menu/Books.vue'
const store=useStore()
const getIcon=computed(()=>{
  return store.getters.sideBarOpended ?'#icon-hamburger-opened':'#icon-hamburger-closed'
})
function toggleSideBar(){
  store.commit('app/toggleSideBar')
}
</script>
<style scoped lang='scss'>
  .pink{
    width:20px;
    height:20px;
    padding:7px;
    cursor:pointer
  }
  .pink:hover{
    background:rgba(0,0,0,0.2)
  }
</style>