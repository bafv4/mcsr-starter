<!-- Home.vue: 開始画面 -->
<script setup lang="ts">
import { useLocaleStore } from '@/stores/localeStore';
import { useI18n } from 'vue-i18n';
import { useNavigator } from '@/utils/naviUtils';
import { useLayout } from '@/views/layouts/useLayout';
import { useAssembly } from '@/views/assemblies/useAssembly';

const { MssWizard } = useLayout();
const { MssButton, MssLangSelector, MssIconButton } = useAssembly();
const { t, locale } = useI18n();
const localeStore = useLocaleStore();
const { to } = useNavigator();

localeStore.setLanguage('ja');
locale.value = 'ja';

const openGitHub = () => {
    window.mssAPIs.openExternal('https://github.com/bafv4/mcsr-starter');
};
</script>

<template>
    <div class="head">
        <MssIconButton github @click.prevent="openGitHub" class="github-link" v-bind:title="t('github')"></MssIconButton>
        <MssLangSelector class="lang-selector"></MssLangSelector>
    </div>
    <MssWizard>
        <template #main>
            <h1>{{ t('start') }}</h1>
            <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
        </template>
        <template #btn>
            <MssButton icon="Apps" class="tools-btn">{{ t('tools') }}</MssButton>
            <MssButton primary inline @navigate="to('/choose-dest/')">{{ t('next') }}</MssButton>
        </template>
    </MssWizard>
</template>

<style lang="scss" scoped>
.head {
    display: inline-block;
    position: fixed;
    top: 1rem;
    right: 1.5rem;
}

.lang-selector {
    display: inline-block;
    position: sticky;
    text-align: right;
    top: 0;
    right: 0;
}

.github-link {
    display: inline-block;
    position: sticky;
    top: 0;
    right: 0;
}

.tools-btn {
    position: absolute;
    left: 1.5rem;
}
</style>