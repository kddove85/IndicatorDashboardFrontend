import { createApp } from 'vue'
import App from './App.vue'
import router from './assets/router'
import Navbar from "./assets/components/NavBar.vue"

const app = createApp(App);
app.use(router);
app.component('nav-bar', Navbar)
app.mount('#app')