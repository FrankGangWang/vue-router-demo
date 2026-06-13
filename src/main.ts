import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router' // Import the router configuration
import './index.css' // Import your CSS/Tailwind here if you use it

const app = createApp(App)

const pinia = createPinia() // 2. Create the instance

app.use(pinia)  // 3. MUST BE LOADED BEFORE ROUTER!

//Vue Router replaces the "<router-view />" in App.vue with the template blueprint 
// of the component that matches the current route. The router-link component is used 
// to navigate between routes.
//<router-view /> in App.vue is a globally registered blueprint template component provided automatically by the vue-router library.
app.use(router) // Tell Vue to use the router
app.mount('#app')
