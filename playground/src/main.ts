import { createApp } from 'vue'
import App from './App.vue'

// import JeffUI from '@jeff-ui/components'
// import JeffUI from '../../packages/index'

import JeButton from '@jeff-ui/components/button/index'



const app = createApp(App)
// app.use(JeffUI)
app.use(JeButton)
app.mount('#app')
