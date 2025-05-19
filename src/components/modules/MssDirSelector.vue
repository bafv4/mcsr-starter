<template>
    <div class="wrapper" :class="{ 'error': !isValid }">
        <MssIconButton class="bt" icon="folder" :title="t('folder-btn-title')" @click="selectDir" />
        <span class="placeholder" :title="t('folder-btn-title')" @click="selectDir">{{ selected ? selected : props.placeholder }}</span>
        <span class="req-lavel" :class="{ 'error': !isValid }" v-if="required">{{ t('required') }}</span>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useComponent } from '@/utils/ComponentUtils';
const { t } = useI18n();
const { MssIconButton } = useComponent();

const props = withDefaults(defineProps<{
    /** フォルダ選択前の文言 */
    placeholder: string,
    /** 必須? デフォルト=>false */
    required?: boolean,
}>(), {
    required: false,
});

const emit = defineEmits<{
    (e: 'select', dir: string): void
}>();

const selected = ref();
let isValid = ref(true);

const selectDir = async () => {
    const path: string = await window.mssAPIs.selectDest();
    if (path) {
        selected.value = path;
        isValid.value = true;
    } else if (!props.required || selected.value) {
        isValid.value = true;
    } else {
        isValid.value = false;
    }
};

const validate = (): boolean => {
    if (!selected.value && props.required) {
        isValid.value = false;
    } else {
        isValid.value = true;
        emit('select', selected.value);
    }
    return isValid.value;
}

defineExpose({ validate });
</script>

<style lang="scss" scoped>
.wrapper {
    position: relative;
    border-bottom: 2.5px solid $font-color;
    padding-bottom: .25rem;
    vertical-align: middle;
    transition: border-bottom .3s ease;
}
.wrapper.error {
    border-bottom: 2.5px solid $err-color;
}

.bt {
    vertical-align: middle;
    font-variation-settings:
        'wght' 700,
}

.placeholder {
    display: inline-block;
    margin-left: 1rem;
    font-size: .9rem;
    cursor: pointer;
    vertical-align: middle;
}
.req-lavel {
    display: inline-block;
    padding: .25rem .5rem;
    position: absolute;
    text-align: center;
    right: 0;
    color: $bg-color;
    background-color: $font-color;
    font-size: .9rem;
    border-radius: .25rem;
    vertical-align: middle;
    transition: all .3s ease;
}
.req-lavel.error {
    color: $font-color;
    background-color: $err-color;
}
</style>