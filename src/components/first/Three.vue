<template>
  <div class='red'>
    
    <div class='pink'>
      <div><three /></div>
      <div>
        <el-dropdown>
          <span class="el-dropdown-link">
              <img src="@/assets/logo.png" alt="" class='imging'>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>首页</el-dropdown-item>
              <el-dropdown-item>课程主页</el-dropdown-item>
              <el-dropdown-item @click='fn'>退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
      
    </div>
  </div>
</template>
<script setup>
import { ArrowDown } from '@element-plus/icons'
import { useStore } from 'vuex'
import Three from './three/three.vue'

const store=useStore()
function fn(){
    store.dispatch('user/delete')
}
</script>
<style scoped>
.imging{
  width:30px;
  margin-right:40px;
}
.red{
  border-bottom:1px solid rgba(0,0,0,0.1);
  height:42px
}
.pink{
  display:flex;
  justify-content: space-between;
  
  align-items:center;
}
</style>