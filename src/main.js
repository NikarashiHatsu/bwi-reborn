import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import routes from 'voie-pages'
import App from './App.vue'
import './main.css'

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

createApp(App).use(router).mount('#app')
