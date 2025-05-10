<script setup lang="ts">
import { useLayout } from './layouts/useLayout';
import { useAssembly } from './assemblies/useAssembly';

const { MssWizard } = useLayout();
const { MssButton } = useAssembly();
import { useI18n } from 'vue-i18n';
import { useNavigator } from '@/utils/naviUtils';

const { t } = useI18n();
const { to } = useNavigator();
</script>

<template>
    <MssWizard>
        <template #main></template>
        <template #btn></template>
    </MssWizard>
</template>

<style lang="scss" scoped>
</style>