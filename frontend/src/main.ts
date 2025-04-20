// filepath: c:\Users\dinit\OneDrive\Desktop\blog\vue-insight-blog\frontend\src\main.ts
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/style.css';


const app = createApp(App);
app.use(router);
app.mount('#app');