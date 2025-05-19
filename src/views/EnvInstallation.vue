<script setup lang="ts">
import { useLayout, useComponent } from '@/utils/ComponentUtils';

const { MssWizard } = useLayout();
const { MssButton } = useComponent();
import { useI18n } from 'vue-i18n';
import { useNavigator } from '@/utils/NaviUtils';

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