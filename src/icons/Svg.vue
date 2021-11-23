<template>
    <svg aria-hidden="true">
          <use :xlink:href="svgname"></use>
    </svg>
</template>
<script setup>
    import {computed,defineProps} from 'vue'
    const props=defineProps({
            icons:{
                type:String,
                require:true
            }
    })
    const svgname=computed(()=>{
         return `#icon-${props.icons}`
    })
</script>
<style scoped>

</style>