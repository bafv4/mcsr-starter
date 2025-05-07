import { defineStore } from 'pinia';


export const useLocaleStore = defineStore('locale', {
    state: () => ({
        currentLang: 'ja' as 'ja' | 'en'
    }),
    actions: {
        setLanguage(lang: 'ja' | 'en') {
            this.currentLang = lang;
        }
    }
});