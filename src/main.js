import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './permission'
// 加载所有的svg
import svggall from './icons/index'
const app=createApp(App)
svggall(app)
console.log(svggall(app));
createApp(App).use(store).use(router).use(ElementPlus).mount('#app')
