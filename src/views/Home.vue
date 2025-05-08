<!-- Home.vue: 開始画面 -->

<script setup lang="ts">
import MssButton from '@/views/assemblies/MssButton.vue';
import { useDestStore } from '@/stores/destStore';
import { useLocaleStore } from '@/stores/localeStore';
import { useI18n } from 'vue-i18n';
import { useNavigator } from '@/utils/naviUtils';

const { t, locale } = useI18n();
const destStore = useDestStore();
const localeStore = useLocaleStore();
const { to } = useNavigator();

localeStore.setLanguage('ja');
locale.value = 'ja';

const chooseDest = async () => {
    const path: string = await window.mssAPIs.selectDest();
    if (path) {
        destStore.setDest(path);
    }
};
</script>

<template>
    <div id="main">
        <div class="main-pane">
            <h1>{{ t('start') }}</h1>
            <button @click="chooseDest()">{{ t('select-folder') }}</button>
        </div>
        
        <div class="btn-pane">
            <MssButton primary inline @navigate="to('/graal/')">{{ t('next') }}</MssButton>
        </div>
    </div>
</template>

<style lang="scss">
@use '@/styles/mss-wizard.scss' as *;
</style>