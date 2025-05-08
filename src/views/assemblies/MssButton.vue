<script setup lang="ts">
const props = withDefaults(defineProps<{
    primary?: boolean,
    inline?: boolean,
    width?: 1 | 2 | 3 | 4,
    disable?: boolean,
}>(), {
    primary: false,
    inline: false,
    width: 1,
    disable: false,
});

const widem = 
    props.width === 1 ? 8:
    props.width === 2 ? 16:
    props.width === 3 ? 24:
    32;

const emit = defineEmits<{
    (e: 'navigate', path: string): void
}>();

const onClick = () => {
    emit('navigate', '');
}
</script>

<template>
    <button class="mss-button" v-bind:class="{ primary: props.primary, inline: props.inline, disabled: props.disable }"
        :style="{ width: widem*16 + 'px' }" @click="onClick">
        <slot></slot>
    </button>
</template>

<style lang="scss" scoped>
@use '@/styles/_variables.scss' as *;

.mss-button {
    display: block;
    height: 2.5em;
    font-size: 1em;
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