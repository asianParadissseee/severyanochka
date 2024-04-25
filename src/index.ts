import {createApp} from 'vue';
import App from '@/app/app.vue';
import '@/app/styles/base.css';
import {routerConfig} from "@/app/providers/router";

const app = createApp(App)
app.use(routerConfig)
app.mount('#root');
