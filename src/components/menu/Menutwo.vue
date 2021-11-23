<template>
  
    <el-sub-menu :index='route.path' v-if='route.children.length>0'>
          <template #title>
              <menuthree :title='route.meta.title'  :icon='route.meta.icon'/>
          </template>
          
          <menutwo v-for='item in route.children' :key='item.path' :route='item'/>
    </el-sub-menu>
    <el-menu-item  :index='route.path' v-else>
        
              <menuthree :title='route.meta.title'  :icon='route.meta.icon'/>
        
    </el-menu-item>
  
</template>
<script setup>
import Menuthree from './Menuthree.vue'
defineProps({
  route:{
    type:Object,
    required:true
  }
})

</script>
<style scoped lang='scss'>
</style>