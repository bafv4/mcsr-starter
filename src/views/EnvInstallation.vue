<template>
    <MssWizard>
        <template #main>
            <MssCheckList :items="envApps" @update:selected="onSelectedUpdate" />
        </template>
        <template #btn></template>
    </MssWizard>
</template>

<script setup lang="ts">
import { useLayout, useComponent } from '@/utils/ComponentUtils';
import { useI18n } from 'vue-i18n';
import { useNavigator } from '@/utils/NaviUtils';
import { ItemInfo } from '@/utils/DownloadUtils';
import apps from '@/data/apps.json';
import { ref } from 'vue';

const { MssWizard } = useLayout();
const { MssButton, MssCheckList } = useComponent();
const { t } = useI18n();
const { to } = useNavigator();

const envApps = apps as ItemInfo[];

const selected = ref<string[]>([]);

function onSelectedUpdate(selectedIds: string[]) {
    selected.value = selectedIds;
    console.log(selected.value);
}
</script>

<style lang="scss" scoped></style>