import './styles/_base.scss';
import {createApp} from 'vue';
import App from '@renderer/App.vue';
import router from '@renderer/Router';
import { i18n } from '@renderer/I18n';
import { createPinia } from 'pinia';
import 'material-symbols';

const app = createApp(App);
app.use(i18n);
app.use(createPinia());
app.use(router);
app.mount('#app');