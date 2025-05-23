import { createI18n } from 'vue-i18n';
import ja from '@renderer/data/locales/ja.yml';
// 仮
import en from '@renderer/data/locales/ja.yml';

export const i18n = createI18n({
    legacy: false,
    locale: 'ja',
    fallbackLocale: 'en',
    messages: {
        ja,
        en
    }
});