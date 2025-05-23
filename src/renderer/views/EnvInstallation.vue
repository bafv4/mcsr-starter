<template>
    <MssWizard>
        <template #main>
            <MssCheckList :items="envApps" @update:selected="onSelectedUpdate" />
            <MssButton primary @click="start">Test Now</MssButton>
            <MssProgressBar :percent="progress" />
        </template>
        <template #btn></template>
    </MssWizard>
</template>

<script setup lang="ts">
import { useLayout, useComponent } from '@renderer/utils/ComponentUtils';
import { useI18n } from 'vue-i18n';
import { useNavigator } from '@renderer/utils/NaviUtils';
import apps from '@renderer/data/apps.json';
import { ref } from 'vue';
import { ItemInfo } from 'src/@types/item';

const { MssWizard } = useLayout();
const { MssButton, MssCheckList, MssProgressBar } = useComponent();
const { t } = useI18n();
const { to } = useNavigator();

const envApps = apps as ItemInfo[];
const selected = ref<string[]>([]);

function onSelectedUpdate(selectedIds: string[]) {
    selected.value = selectedIds;
    console.log(selected.value);
}

let progress = ref(0);

// 進捗を受け取る
window.bafv4.stateTick((prog, state) => {
    progress.value = prog;
});

async function start() {
    const list = [{ id: "overlay-fix", resources: [{ name: "Overlay fix", ver: "1.1.4", url: "https://github.com/bafv4/ResetTracker-overlay-fix/releases/download/v0.1.3/ResetTracker-overlay-fix_v0.1.3.zip", tag: "zip" }] }];
    await window.bafv4.startDarwin(list, 'C:\\Users\\baf\\git\\test');
}
</script>

<style lang="scss" scoped></style>