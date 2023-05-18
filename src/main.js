import { createApp } from 'vue'
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus';
import App from './App.vue'
import router from "./router";
import './index.css'

createApp(App).use(router).use(ElementPlus).mount('#app')
