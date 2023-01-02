import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
import './registerServiceWorker'

const app = createApp(App)

createApp(App)


app.use(router)
app.mount('#app')
