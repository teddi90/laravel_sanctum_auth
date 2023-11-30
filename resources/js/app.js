
import './bootstrap';
import { createApp } from 'vue';
import Index from './components/Index.vue';
import router from "./router.js";



const app = createApp({});

app.component('index', Index);

app.use(router);

app.mount('#app');
