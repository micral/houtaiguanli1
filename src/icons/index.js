

// 注册一个全局组件
import svgIcon from './Svg.vue'
export default function svggall(app){
    app.component('svg-icon',svgIcon)
}
const file = require.context('@/icons/svg',false,/\.svg$/)
file.keys().map(file)
