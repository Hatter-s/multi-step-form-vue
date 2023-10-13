import { createApp } from 'vue';
import { createPinia } from 'pinia';

import './assets/css/fonts.css';
import './style.css';
import 'primeicons/primeicons.css';
import router from './routers';

import App from './App.vue';


const app = createApp(App)
app.use(createPinia())
app.use(router);
app.mount('#app');
