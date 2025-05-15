<template>
    <transition name="fade">
        <div class="modal-bg" v-if="open"></div>
    </transition>
    <div ref="infoRef" class="info-wrapper">
        <MssIconButton :icon="icon" @click="toggle" />
        <transition name="fade-zoom">
            <div v-if="open" class="info" :style="`width: ${width}px; height: ${height}px`">
                <MssIcon icon="close" class="close-btn" @click="hide" v-if="closeBtn" />
                <slot></slot>
            </div>
        </transition>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useAssembly } from '@/utils/componentUtils';

const props = withDefaults(defineProps<{
    icon: string,
    closeBtn?: boolean,
    width?: number,
    height?: number,
}>(), {
    closeBtn: true,
    width: 480,
    height: 360,
});

const { MssIcon, MssIconButton, MarkdownViewer, MssModal } = useAssembly();
const infoRef = ref<HTMLElement | null>(null);
const open = ref(false);

const toggle = () => (open.value = !open.value);
const hide = () => (open.value = false);

const onClickOutside = (e: MouseEvent) => {
    if (
        open.value &&
        !infoRef.value.contains(e.target as Node) &&
        props.closeBtn
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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}

// info
.info-wrapper {
    display: inline-block;
}

.info {
    position: fixed;
    background-color: $highlight-bg-color;
    border-radius: .5rem;
    border: 1.5px solid $secondary-color;
    box-shadow: 0px 1px 7px 2px $shadow-color;
    left: 50%;
    top: 50%;
    transform: scale(1) translateX(-50%)translateY(-50%);
    z-index: 1000;
    margin: .75rem;
}

// 閉じるボタン
.close-btn {
    position: absolute;
    top: .75rem;
    right: .75rem;
    color: $secondary-color;
    font-size: 1.35rem;
    cursor: pointer;
    transition: color .3s ease;
}
.close-btn:hover {
    color: $highlight-font-color;
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