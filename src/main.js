import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from '@/App.vue'
import { registerPlugins } from '@core/utils/plugins'
import vuetify from './plugins/vuetify' // Your path to the vuetify plugin

// Styles
import '@core/scss/template/index.scss'
import '@styles/styles.scss'

// Create vue app
const app = createApp(App)
const pinia = createPinia()
app.use(vuetify)
// Register plugins
registerPlugins(app)

// Mount vue app
app.mount('#app')
app.use(pinia)
