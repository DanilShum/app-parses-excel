import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import PrimeVue from 'primevue/config'
const app = createApp(App)

app.use(PrimeVue)
app.use(store).use(router).mount('#app')
