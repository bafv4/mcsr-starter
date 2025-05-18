<template>
    <div class="toast-wrapper">
        <transition-group name="toast" tag="div">
            <div v-for="(toast, index) in toasts"
                :key="toast.id" class="toast"
                :class="toast.err ? 'err' : 'info'"
                @mouseenter="pauseTimer(toast.id)"
                @mouseleave="resumeTimer(toast.id)"
            >
                <MssIcon :icon="toast.err ? 'warning' : 'info'" class="icon" />
                <span class="msg">{{ toast.message }}</span>
                <MssIcon class="close" icon="close" @click="removeToast(toast.id)" />
            </div>
        </transition-group>
    </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
import { useToastService } from '@/services/toast-service';
import { useComponent } from '@/utils/component-utils';

const toastStore = useToastService();
const { MssIcon } = useComponent();
const toasts = reactive(toastStore.toasts);

const removeToast = (id: number) => {
    toastStore.remove(id);
}

const pauseTimer = (id: number) => {
    toastStore.pause(id);
}

const resumeTimer = (id: number) => {
    toastStore.resume(id);
}
</script>

<style lang="scss" scoped>
.toast-wrapper {
    display: flex;
    position: fixed;
    bottom: 1rem;
    left: 1rem;
    flex-direction: column;
    gap: 1rem;
    z-index: 128;
}

.toast {
    background-color: $highlight-bg-color;
    width: 16rem;
    margin: .5rem;
    padding: .5rem .25rem;
    border-radius: 0.25rem;
    animation: slide-up 0.3s ease-out, fade-out 0.3s ease-in 3s forwards;
    font-size: .85rem;
    display: grid;
    grid-template-columns: 2rem auto 1.5rem;
    grid-template-rows: 1fr;
    grid-template-areas: "icn msg btn";
    border-left: 3px solid currentColor;
}

.toast.info {
    color: $font-color;
}

.toast.err {
    color: $err-color;
}

.toast .icon {
    grid-area: icn;
    margin: auto;
    font-size: 1.5rem;
    font-variation-settings:
        'FILL' 1,
        'wght' 600;
}

.toast .msg {
    grid-area: msg;
    vertical-align: middle;
    white-space: wrap;
}

.toast .close {
    color: $secondary-color;
    margin: auto;
    cursor: pointer;
}

.toast .close:hover {
    color: $font-color;
}

.toast-enter-active,
.toast-leave-active {
  transition: all 0.3s ease;
}
.toast-enter-from {
  opacity: 0;
  transform: translateY(8px);
}
.toast-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
