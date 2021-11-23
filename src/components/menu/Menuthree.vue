<template>
  
    <i :class='icon' v-if='icon.includes("el-icon")'></i>
    <svg aria-hidden="true" class='pink' v-else>
          <use :xlink:href='icons'></use>
    </svg>
    <span> &nbsp; &nbsp;{{title}}</span>
  
</template>
<script setup>
import {ref} from 'vue'
const props=defineProps({
  title:{
    type:String,
    required:true
  },
  icon:{
    type:String,
    required:true
  }
})

const icons=ref(`#icon-${props.icon}`)
</script>
<style scoped lang='scss'>
.pink{
  width:20px;
  fill:#b6bbb4;
  min-width:20px
}
</style>