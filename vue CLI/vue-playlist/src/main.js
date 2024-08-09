
import { createApp } from 'vue'
import App from './App.vue'

import lokalGlobal from './components/lokal-global.vue'


const app = createApp(App)

app.component("lokal-global",lokalGlobal)


app.mount('#app');