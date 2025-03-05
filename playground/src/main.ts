import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// import JeffUI from '@jeff-ui/components'
import JeffUI from '../../packages/index'



const app = createApp(App)
app.use(JeffUI)
app.mount('#app')
