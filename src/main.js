import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { auth } from './database/config'

// let app;
// auth.onAuthStateChanged(() => {
//     if (!app) {
//     }
// })
createApp(App).use(router).mount('#app')

