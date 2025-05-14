<!-- Home.vue: 開始画面 -->
<template>
    <div class="head">
        <MssModal icon="info" style="display: inline-block;"></MssModal>
        <MssLangSelector class="lang-selector" />
    </div>

    <div class="scrollable">
        <MssPage>
            <h1 class="first">
                <MssIcon class="home-icon" icon="Home" />
                <span class="home-title">{{ t('home') }}</span>
            </h1>
            <MarkdownViewer :src="`ja/home-setup.md`" />
            <MarkdownViewer :src="`ja/home-tools.md`" />
        </MssPage>
    </div>
</template>

<script setup lang="ts">
import { useLocaleStore } from '@/stores/localeStore';
import { useI18n } from 'vue-i18n';
import { useNavigator } from '@/utils/naviUtils';
import { useLayout } from '@/views/layouts/useLayout';
import { useAssembly } from '@/views/assemblies/useAssembly';

const { MssPage } = useLayout();
const { MssIcon, MssLangSelector, MssIconButton, MarkdownViewer, MssModal } = useAssembly();
const { t, locale } = useI18n();
const localeStore = useLocaleStore();
const { to } = useNavigator();

localeStore.setLanguage('ja');
locale.value = 'ja';

const openGitHub = () => {
    window.mssAPIs.openExternal('https://github.com/bafv4/mcsr-starter');
};
</script>

<style lang="scss" scoped>
.head {
    display: inline-block;
    position: fixed;
    top: 1rem;
    right: 2rem;
    vertical-align: middle;
}

.home-title {
    vertical-align: middle;
}

.home-icon {
    vertical-align: middle;
    padding-right: .25em;
    font-size: 1.8rem;
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
</style>