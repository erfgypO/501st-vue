/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'
import plausible from "@/plugins/plausible";

const app = createApp(App)

registerPlugins(app)
app.use(plausible, {
  apiHost: 'https://hub.501st.tech'
})
app.mount('#app')
