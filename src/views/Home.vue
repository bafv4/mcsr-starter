<template>
    <div class="head">
        <MssModal icon="info" style="display: inline-block;" :width="380" :height="270">
            <h1 class="first"><img src="../../app-icon.png" class="app-icon"></img><span class="info-text">MCSR Starter</span></h1>
            <table class="info-table">
                <tbody>
                    <tr>
                        <th>{{ t('ver') }}:</th>
                        <td>v{{ pkg.version }}</td>
                    </tr>
                    <tr>
                        <th>Electron:</th>
                        <td>{{ pkg.devDependencies.electron }}</td>
                    </tr>
                    <tr>
                        <th>Vue:</th>
                        <td>{{ pkg.dependencies.vue.replace('^', '') }}</td>
                    </tr>
                    <tr>
                        <th>{{ t('author') }}:</th>
                        <td>{{ pkg.author.name }}</td>
                    </tr>
                </tbody>
            </table>
            <div class="info-btns">
                <MssIconButton github @click="openGitHub" :title="t('github-t')"></MssIconButton>
            </div>
        </MssModal>
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
import { useLayout, useAssembly } from '@/utils/componentUtils';
import pkg from '../../package.json';

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

// info box
.app-icon {
    display: inline-block;
    width: .9em;
    height: .9em;
    margin-right: .4em;
    vertical-align: middle;
}
.info-text {
    vertical-align: text-bottom;
    font-weight: 500;
    font-size: .8em;
}
.info-table {
    margin-top: .75rem;
    margin-left: .5rem;
}
.info-table tr {
    margin: .5em;
    height: 1.85rem;
}
.info-table td {
    padding: .15em;
}
.info-table th {
    text-align: left;
    padding: .15em;
    padding-right: 1.5rem;
    width: max-content;
}
.info-btns {
    display: inline-block;
    position: fixed;
    bottom: 1rem;
    right: 1rem;
}

.lang-selector {
    display: inline-block;
    position: sticky;
    text-align: right;
    top: 0;
    right: 0;
}

// main
.home-icon {
    vertical-align: middle;
    padding-right: .25em;
    font-size: 1.8rem;
}
.home-title {
    vertical-align: middle;
}
</style>