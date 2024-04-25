import {createApp} from 'vue';
import App from './app/app.vue';
import './index.css';
import {routerConfig} from "./app/router";

const app = createApp(App)
app.use(routerConfig)
app.mount('#root');
