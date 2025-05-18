<template>
    <transition name="fade">
        <div class="modal-bg" v-if="open"></div>
    </transition>
    <div ref="infoRef" class="info-wrapper">
        <MssIconButton :icon="icon" @click="toggle" />
        <transition name="fade-zoom">
            <div v-if="open" class="info" :style="`width: ${width}px; height: ${height}px`">
                <MssIcon icon="close" class="close-btn" @click="hide" v-if="closable" />
                <slot></slot>
            </div>
        </transition>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useComponent } from '@/utils/component-utils';

const props = withDefaults(defineProps<{
    icon: string,
    closable?: boolean,
    width?: number,
    height?: number,
}>(), {
    closable: true,
    width: 400,
    height: 250,
});

const { MssIcon, MssIconButton } = useComponent();
const infoRef = ref<HTMLElement | null>(null);
const open = ref(false);

const toggle = () => (open.value = !open.value);
const hide = () => (open.value = false);

const onClickOutside = (e: MouseEvent) => {
    if (
        open.value &&
        !infoRef.value.contains(e.target as Node) &&
        props.closable
    ) {
        hide();
    }
};

onMounted(() => {
    window.addEventListener('click', onClickOutside);
});
onBeforeUnmount(() => {
    window.removeEventListener('click', onClickOutside);
});
</script>

<style lang="scss" scoped>
// modal background
.modal-bg {
    position: fixed;
    inset: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.15);
    opacity: 1;
    z-index: 100;
    backdrop-filter: blur(2px);
}

// info
.info-wrapper {
    display: inline-block;
}

.info {
    position: fixed;
    background-color: $bg-color;
    border-radius: .5rem;
    border: 1.5px solid $secondary-color;
    box-shadow: 0px 1px 7px 2px $shadow-color;
    left: 50%;
    top: 50%;
    transform: scale(1) translateX(-50%)translateY(-50%);
    z-index: 999;
    padding: 1.25rem 1.65rem;
}

// 閉じるボタン
.close-btn {
    position: absolute;
    top: 1rem;
    right: 1rem;
    color: $secondary-color;
    font-size: 1.5rem;
    cursor: pointer;
    transition: color .3s ease;
    font-variation-settings:
        'wght' 700,
}
.close-btn:hover {
    color: $font-color;
}

/* アニメーション */
.fade-zoom-enter-active,
.fade-zoom-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.fade-zoom-enter-from,
.fade-zoom-leave-to {
  opacity: 0;
  transform: scale(0.95) translateX(-52.5%)translateY(-52.5%);
}
.fade-zoom-enter-to,
.fade-zoom-leave-from {
  opacity: 1;
  transform: scale(1) translateX(-50%)translateY(-50%);
}
</style>