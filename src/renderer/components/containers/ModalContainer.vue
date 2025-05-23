<!-- ModalContainer.vue -->
<template>
    <div>
        <transition name="fade">
            <div v-if="modal" class="modal-overlay" @click.self="close"></div>
        </transition>
        <transition name="fade-zoom">
            <div v-if="modal" class="modal-content" :style="modalSize" @click.stop>
                <component class="content" :is="modal.content" v-bind="modal.props" @close="close" />
            </div>
        </transition>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { modalService } from '@renderer/services/ModalService';

const modal = computed(() => modalService.getState().currentModal);
const closable = computed(() => modalService.getState().currentModal.closable);

const close = () => {
    if (closable) sysclose();
};

const sysclose = () => { modalService.close() };

const modalSize = computed(() => {
    if (!modal.value) return {};
    return {
        width: modal.value.width || '400px',
        height: modal.value.height || '250px'
    };
});

defineExpose({ sysclose });
</script>

<style lang="scss" scoped>
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.15);
    backdrop-filter: blur(2px);
    z-index: 900;
}

.modal-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: $bg-color;
    border: 1.5px solid $secondary-color;
    box-shadow: 0px 1px 7px 2px $shadow-color;
    border-radius: .5rem;
    overflow: hidden;
    padding: 1.25rem 1.65rem;
    z-index: 999;
}

.content {
    display: block;
    width: 100%;
    height: 100%;
    position: relative;
}

.fade-zoom-enter-active,
.fade-zoom-leave-active {
    transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-zoom-enter-from,
.fade-zoom-leave-to {
    opacity: 0;
    transform: scale(0.95) translate(-52.5%, -52.5%);
}

.fade-zoom-enter-to,
.fade-zoom-leave-from {
    opacity: 1;
    transform: scale(1) translate(-50%, -50%);
}
</style>
