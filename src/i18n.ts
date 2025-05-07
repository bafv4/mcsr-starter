import { createI18n } from 'vue-i18n';
import ja from '@/locales/ja.yml';
import en from '@/locales/en.yml';

export const i18n = createI18n({
    legacy: false,
    locale: 'ja',
    fallbackLocale: 'en',
    messages: {
        ja,
        en
    }
});