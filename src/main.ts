import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const targetUrl = 'https://mmi.place'

if (typeof window !== 'undefined' && !window.location.href.startsWith(targetUrl)) {
	window.location.replace(targetUrl)
}

const app = createApp(App)

app.use(router)

app.mount('#app')
