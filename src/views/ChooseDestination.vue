<template>
    <MssWizard>
        <template #main>
            <h1 class="first">
                <span>{{ t('dest') }}</span>
            </h1>
            <div class="content">
                <p>{{ t('dest-s1') }}</p>
                <p>{{ t('dest-s2') }}</p>
            </div>
            <MssDirSelector :placeholder="t('select-folder')" @select="setDest" ref="dirRef" required />
        </template>
        <template #btn>
            <MssButton inline @click="cancel">{{ t('cancel') }}</MssButton>
            <MssButton inline @click="goNext" primary>{{ t('next') }}</MssButton>
        </template>
    </MssWizard>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useDestStore } from '@/stores/dest-store';
import { useLayout, useComponent } from '@/utils/component-utils';
import { useNavigator } from '@/utils/navi-utils';
import { useToastService } from '@/services/toast-service';

const { MssWizard } = useLayout();
const { MssButton, MssDirSelector } = useComponent();
const { t } = useI18n();
const { to } = useNavigator();
const destStore = useDestStore();
const dirRef = ref();
const toast = useToastService();

const setDest = (path: string): void => {
    destStore.setDest(path);
};

const goNext = (): void => {
    const isDirValid = dirRef.value.validate();
    if (isDirValid) {
        to('/env/');
    } else {
        toast.add('あっれれ～？', true);
    }
};

const cancel = (): void => {
    destStore.clearDest();
    to('/');
};
</script>

<style lang="scss" scoped></style>