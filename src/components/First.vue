<template>
  <div class="app-wrapper" :class='state.getters.sideBarOpended?"":"hideSlidebar"'>
    <one id="guide-sidebar"  class="siderbar-container"  />

    <div class="main-container">
      <div  class="fixed-header">
        <three />
      </div>
        
      <two />
    </div>
    
  </div>
</template>
<script setup>
import One from './first/One.vue'
import Two from './first/Two.vue'
import Three from './first/Three.vue'
import variables from '@/style/variables.scss'
import {useStore} from 'vuex'
const state=useStore()
</script>
<style  scoped lang='scss'>
@import '~@/style/common.scss';
@import '~@/style/variables.scss';
.app-wrapper {
  @include clearfix;
  position: relative;
  width: 100%;
  height:100%;
  display: flex;
  
  .siderbar-container{
    // float: left;
    width: $sideBarWidth;
    height:100vh;
    background:$menuBg;
   
  }
  }
  .main-container{
    
    flex: 1;
     
    .fixed-header {

      width: 100%;
    }
  }
  
  .hideSlidebar {
    .siderbar-container{
    width:#{$sideBarhideWidth};

    }
  }
.pink {
  float: right;
  margin-right: 50px;
}
</style>