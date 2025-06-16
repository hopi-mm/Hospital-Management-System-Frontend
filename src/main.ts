import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from '@/router/index.ts'
import registerGlobally from '@/registerGlobally.ts'

const app = createApp(App)

registerGlobally(app)
app.use(router)
app.mount('#app')
