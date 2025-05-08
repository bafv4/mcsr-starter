<script setup lang="ts">
import MssButton from '@/views/assemblies/MssButton.vue';
import { useI18n } from 'vue-i18n';
import { useNavigator } from '@/utils/naviUtils';

const { t } = useI18n();
const { to } = useNavigator();
</script>

<template>
    <div id="main">
        <div class="main-pane">
            <h1>GraalVM Installation</h1>
        </div>

        <div class="btn-pane">
            <MssButton @navigate="to('/')">{{ t('back') }}</MssButton>
            <MssButton primary>{{ t('next') }}</MssButton>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '@/styles/_variables.scss' as *;
@use '@/styles/mss-wizard.scss'
</style>