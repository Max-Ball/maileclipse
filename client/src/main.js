import { createApp } from 'vue'
// @ts-ignore
import App from './App.vue'
import router from './router'
import 'bootstrap'
import { registerGlobalComponents } from './registerGlobalComponents'

import './assets/main.css'

const app = createApp(App)
registerGlobalComponents(app)
app.use(router)
  .mount('#app')
