import App from './App.vue'
import { createApp } from 'vue';
import { router } from './routes/router';
import { store } from './store/index'
import Particles from "particles.vue3";

const app = createApp(App)


app.use(store);
app.use(router);
app.use(Particles)
app.mount('#app')