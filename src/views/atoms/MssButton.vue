<script setup lang="ts">
withDefaults(defineProps<{
    primary?: boolean,
    inline?: boolean,
    width?: number | string,
    disable?: boolean,
}>(), {
    primary: false,
    inline: false,
    width: 100,
    disabled: false,
});

const emit = defineEmits<{
  (e: 'navigate', path: string): void
}>();

const onClick = () => {
  emit('navigate', '/graal');
}
</script>

<template>
    <button class="mss-button" v-bind:class="{primary: primary, inline: inline, disabled: disable}" :style="{ width: width + 'px' }" @click="onClick">
        <slot></slot>
    </button>
</template>

<style lang="scss" scoped>
@use '@/styles/_variables.scss' as *;

.mss-button {
    display: block;
    padding: 10px 20px;
    background-color: $secondary-color;
    color: $font-color;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.15s ease;
}

.mss-button:hover {
    background-color: $secondary-color-hover;
}

.primary {
    background-color: $primary-color;
    color: #f0f0f0;
}

.primary:hover {
    background-color: $primary-color-hover;
}

.inline {
    display: inline-block;
    margin-right: 1em;
}

.disabled {
    cursor: default;
}

.disabled:hover {
    background-color: $primary-color;
}
</style>