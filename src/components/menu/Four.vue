<template>
  <div>
    <div class='logo-container'>
     <div>
       <img src="@/assets/logo.png" alt="" class='pink'>
     </div>
      <h1 class='logo-title' v-if='store.getters.sideBarOpended'>
          element-admin
      </h1>
    </div>
  </div>
</template>
<script setup>
  // imort logo from '@/assets/logo.png'
  import {useStore} from 'vuex'
  const store=useStore()
</script>
<style lang="scss" scoped>
  .logo-container{
    height:44px;
    padding:10px 0 22px 0;
    display:flex;
    align-items:center;
    justify-content:center;
    
  }
  .pink{
    width:40px;
  }
  .logo-title{
    color:#fff;
    font-weight:600;
    line-height:50px;
    font-size:14px;
    white-space:nowrap

  }
</style>