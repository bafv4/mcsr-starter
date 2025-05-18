<template>
    <div class="tooltip-wrapper" @mouseenter="showTooltip" @mouseleave="hideTooltip">
        <MssIcon icon="help" class="tooltip-icon" />
        <transition name="fade">
            <div v-if="visible" class="tooltip-box">
                {{ msg }}
            </div>
        </transition>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useComponent } from '@/utils/component-utils';

const { MssIcon } = useComponent();

defineProps<{
    msg: string
}>();

const visible = ref(false);
let hideTimeout: ReturnType<typeof setTimeout> | null = null;

const showTooltip = () => {
    if (hideTimeout) clearTimeout(hideTimeout);
    visible.value = true;
};

const hideTooltip = () => {
    hideTimeout = setTimeout(() => {
        visible.value = false;
    }, 150);
};
</script>

<style lang="scss" scoped>
.tooltip-wrapper {
    display: inline-block;
    position: relative;
}

.tooltip-icon {
    color: $secondary-color;
    margin-left: .35rem;
    cursor: pointer;
    vertical-align: middle;
    font-size: 1em;
    font-variation-settings:
        'FILL' 0,
        'wght' 600;
}

.tooltip-box {
    position: absolute;
    top: 116%;
    left: 50%;
    transform: translateX(-48%);
    min-width: 12rem;
    max-width: 28rem;
    white-space: wrap;
    background-color: $highlight-bg-color;
    color: $font-color;
    padding: 0.5rem;
    border-radius: 4px;
    font-size: 0.8rem;
    z-index: 10;
    box-shadow: 0px 1px 4px 1px $shadow-color;
}
</style>