<script setup lang="ts">
const props = withDefaults(defineProps<{
    primary?: boolean,
    inline?: boolean,
    width?: 1 | 2 | 3 | 4,
    disable?: boolean,
    icon?: string,
}>(), {
    primary: false,
    inline: false,
    width: 1,
    disable: false,
    icon: '',
});

const widem =
    props.width === 1 ? 8 :
        props.width === 2 ? 16 :
            props.width === 3 ? 24 :
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
        :style="{ width: widem * 16 + 'px' }" @click="onClick">
        <span v-if="icon" class="material-symbols-outlined">{{ props.icon }}</span>
        <slot></slot>
    </button>
</template>

<style lang="scss" scoped>
.mss-button {
    display: block;
    margin: 0;
    height: 2.5em;
    font-size: 1rem;
    background-color: $secondary-color;
    color: $font-color;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s ease;
}

slot {
    vertical-align: middle;
}

.material-symbols-outlined {
    font-size: 16px;
    vertical-align: middle;
    margin: 0;
    margin-left: -.35em;
    margin-right: .1em;
    margin-top: -.25rem;
}

.mss-button:hover {
    background-color: $secondary-color-hover;
}

.mss-button:active {
    background-color: $secondary-color-active;
}

.primary {
    background-color: $primary-color;
    color: #f0f0f0;
}

.primary:hover {
    background-color: $primary-color-hover;
}

.primary:active {
    background-color: $primary-color-active;
}

.inline {
    display: inline-block;
}

.disabled {
    cursor: default;
}

.disabled:hover {
    background-color: $primary-color;
}
</style>