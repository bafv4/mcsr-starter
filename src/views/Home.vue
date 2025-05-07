<!-- Home.vue: 開始画面 -->

<script setup lang="ts">
import MssButton from '@/views/atoms/MssButton.vue';
import { useDestStore } from '@/stores/destStore';
import { useLocaleStore } from '@/stores/localeStore';
import { handleNavigate } from '@/utils/navigation';
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n();
const destStore = useDestStore();
const localeStore = useLocaleStore();

localeStore.setLanguage('en');
locale.value = 'en';

const chooseDest = async () => {
    const path: string = await window.mssAPIs.selectDest();
    if (path) {
        destStore.setDest(path);
    }
};
</script>

<template>
    <h1>{{ t('start') }}</h1>
    <button @click="chooseDest()">フォルダを選択</button>
    <p v-if="destStore.dest">選択されたパス: {{ destStore.getDest() }}</p>
    <MssButton primary @navigate="handleNavigate" disable>{{ t('next') }}</MssButton>
</template>

<style lang="scss">
</style>