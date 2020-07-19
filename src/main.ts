import { createApp } from 'vue'
import App from './app'
import './registerServiceWorker'
import router from './router'
import store from './store'

createApp(App).use(router).use(store).mount('#app')
