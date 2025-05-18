<template>
    <h1 class="first">
        <img src="../../../app-icon.png" class="app-icon"></img>
        <span class="info-text">MCSR Starter</span>
    </h1>
    <table class="info-table">
        <tbody>
            <tr>
                <th>{{ t('ver') }}</th>
                <td>{{ pkg.version }}</td>
            </tr>
            <tr>
                <th>Electron</th>
                <td>{{ pkg.devDependencies.electron }}</td>
            </tr>
            <tr>
                <th>Vue</th>
                <td>{{ pkg.dependencies.vue.replace('^', '') }}</td>
            </tr>
            <tr>
                <th>{{ t('author') }}</th>
                <td>{{ pkg.author.name }}</td>
            </tr>
        </tbody>
    </table>
    <div class="info-btns">
        <MssIconButton github @click="openLink('https://github.com/bafv4/mcsr-starter/')" :title="t('github-t')" />
    </div>

    <MssIcon icon="close" class="close-btn" @click="$emit('close')" />
</template>

<script lang="ts" setup>
import pkg from '../../../package.json';
import { useI18n } from 'vue-i18n';
import { useComponent } from '@/utils/component-utils';
import { useNavigator } from '@/utils/navi-utils';

const { t } = useI18n();
const { MssIcon, MssIconButton } = useComponent();
const { to, openLink } = useNavigator();
</script>

<style lang="scss" scoped>
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
    position: absolute;
    bottom: 1rem;
    right: 1rem;
}

.close-btn {
    position: absolute;
    top: 1rem;
    right: 1rem;
    color: $secondary-color;
    font-size: 1.5rem;
    cursor: pointer;
    transition: color .3s ease;
    font-variation-settings:
        'wght' 700,
}
.close-btn:hover {
    color: $font-color;
}
</style>