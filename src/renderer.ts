import './styles/_base.scss';
import {createApp} from 'vue';
import App from './App.vue';
import router from './router';
import { i18n } from './i18n';
import { createPinia } from 'pinia';
import 'material-symbols';

const app = createApp(App);
app.use(i18n);
app.use(createPinia());
app.use(router);
app.mount('#app');