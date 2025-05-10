<script setup lang="ts">
import { useDestStore } from '@/stores/destStore';
import { useLayout } from './layouts/useLayout';
import { useAssembly } from './assemblies/useAssembly';

const { MssWizard } = useLayout();
const { MssButton, MssIconButton } = useAssembly();
import { useI18n } from 'vue-i18n';
import { useNavigator } from '@/utils/naviUtils';

const { t } = useI18n();
const { to } = useNavigator();
const destStore = useDestStore();

const chooseDest = async () => {
    const path:string = await window.mssAPIs.selectDest();
    if (path) {
        destStore.setDest(path);
    }
};
</script>

<template>
    <MssWizard>
        <template #main>
            <MssIconButton @click="chooseDest" icon="Folder" v-bind:title="t('folder-btn-title')"></MssIconButton>
        </template>
        <template #btn>
            <MssButton inline @navigate="to('/')">{{ t('back') }}</MssButton>
            <MssButton primary inline @navigate="to('/graal/')">{{ t('next') }}</MssButton>
        </template>
    </MssWizard>
</template>

<style lang="scss" scoped>
</style>