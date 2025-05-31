import { createI18n } from 'vue-i18n';
import ja from '@renderer/data/locales/ja.yml';
// 仮
import en from '@renderer/data/locales/ja.yml';

const getDefaultLocale = () => {
    const supportedLocales = ['en', 'ja'];
    const browserLocale = navigator.language || 'en';
    const baseLocale = browserLocale.split('-')[0];
    return supportedLocales.includes(baseLocale) ? baseLocale : 'en';
};

export const i18n = createI18n({
    legacy: false,
    locale: getDefaultLocale(),
    fallbackLocale: 'en',
    messages: {
        ja,
        en
    }
});