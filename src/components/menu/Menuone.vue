<template>
  <el-menu
        :default-active="activePath"
        class="el-menu-vertical-demo"
        :text-color='store.getters.cssVar.menuText'
        :active-text-color="store.getters.cssVar.menuActiveText"
        :unique-opened='true'
        :background-color="store.getters.cssVar.menuBg"
        :router='true'
        :collapse='!store.getters.sideBarOpended'
  >
        <four />
        <menutwo v-for='item in routes' :key='item.path' :route='item'/>
  </el-menu>
</template>
<script setup>
import {computed} from 'vue'
import {useRouter,useRoute} from 'vue-router'
import {filterRouter,generateMenus} from '@/utlis/router.js'
import Menutwo from './Menutwo.vue'
import {useStore} from 'vuex'
import Four from './Four.vue'
const store=useStore()
const router=useRouter()
const route=useRoute()
console.log(router.options.routes)
// 获取路由
console.log(router.getRoutes())
// 去重
console.log(filterRouter(router.getRoutes()),'99999')
// 格式化
console.log(generateMenus(filterRouter(router.getRoutes())))
// 因为路由要变化
const routes=computed(()=>{
  const filterRoutes=filterRouter(router.getRoutes())
  return generateMenus(filterRoutes)
})
const activePath=computed(()=>{
  const {path}=route
  return path
})
console.log(routes.value)
</script>
<style scoped lanf='scss'>

</style>