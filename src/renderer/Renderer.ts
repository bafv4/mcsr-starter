// import './styles/_base.scss';
import { createApp } from 'vue';
import App from '@renderer/App.vue';
import router from '@renderer/Router';
import { i18n } from '@renderer/I18n';
import { createPinia } from 'pinia';
import { createVuetify } from 'vuetify';
import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css';
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

const vuetify = createVuetify({
    components,
    directives,
    theme: {
        defaultTheme: prefersDark ? 'dark' : 'light',
        themes: {
            dark: {
                dark: true,
                colors: {
                    background: '#202020',
                    primary: '#5695d1',
                    secondary: '#5e5e5e',
                    success: '#09d88c',
                    error: '#fa655a',
                    info: '#5e5e5e',
                    surface: '#242424',
                    'on-background': '#f7f7f7',
                    'on-surface': '#fafafa',
                    'on-primary': '#202020',
                    'on-secondary': '#fafafa'
                }
            },
            light: {
                dark: false,
                colors: {
                    background: '#F3F3F3',
                    primary: '#3b6c9b',
                    secondary: '#5e5e5e',
                    success: '#086948',
                    error: '#730b0b',
                    info: '#5e5e5e',
                    surface: '#e2e2e2',
                    'on-background': '#202020',
                    'on-surface': '#171717',
                    'on-primary': '#F3F3F3',
                    'on-secondary': '#171717'
                }
            }
        }
    }
});

const app = createApp(App);
app.use(i18n);
app.use(createPinia());
app.use(vuetify);
app.use(router);
app.mount('#app');