import '@renderer/css/_base.css';
import '@mdi/font/css/materialdesignicons.css';
import colors from 'vuetify/util/colors';
import 'vuetify/styles';
import { createApp } from 'vue';
import App from '@renderer/App.vue';
import router from '@renderer/Router';
import { i18n } from '@renderer/I18n';
import { createPinia } from 'pinia';
import { createVuetify } from 'vuetify';
import { aliases, mdi } from 'vuetify/iconsets/mdi';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

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
                    primary: colors.teal.lighten1,
                    secondary: colors.grey.lighten1,
                    success: colors.green.darken2,
                    error: colors.red.darken2,
                    info: colors.grey.darken2,
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
                    primary: colors.teal.darken4,
                    secondary: colors.grey.darken4,
                    success: colors.green.darken4,
                    error: colors.red.darken4,
                    info: colors.grey.darken4,
                    surface: '#EEEEEE',
                    'on-background': '#202020',
                    'on-surface': '#171717',
                    'on-primary': '#F3F3F3',
                    'on-secondary': '#171717'
                }
            }
        }
    },
    defaults: {
        global: {
            ripple: true,
            scrollbars: false,
        },
        VContainer: {
            fluid: true,
        }
    },
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
            mdi,
        },
    },
});

const app = createApp(App);
app.use(i18n);
app.use(createPinia());
app.use(vuetify);
app.use(router);
app.mount('#app');