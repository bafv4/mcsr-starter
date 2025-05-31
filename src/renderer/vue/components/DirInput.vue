<template>
    <v-file-input label="" :model-value="files" readonly @click:control="openFileDialog" hide-input
        prepend-icon="mdi-file" v-bind:chips></v-file-input>
</template>

<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const files = ref([]);
const { t } = useI18n();

async function openFileDialog() {
    const paths = await window.bafv4.selectDest();
    if (paths && paths.length > 0) {
        files.value = paths.map((p) => new File([""], p.split(/[\\/]/).pop(), { type: "", path: p }));
    }
}
</script>
