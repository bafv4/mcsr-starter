<template>
    <button>
        <MssIcon icon="arrow_forward" class="icon"></MssIcon>
        <label class="btn-label">
            <slot></slot>
        </label>
    </button>
</template>

<script lang="ts" setup>
import { useComponent } from '@/utils/component-utils';

const { MssIcon } = useComponent();
</script>

<style lang="scss" scoped>
button {
    margin: .5rem .25rem;
    display: block;
    position: relative;
    width: calc(100% - 1rem);
    height: 3rem;
    text-align: left;
    color: $font-color;
    background-color: transparent;
    border: $secondary-color 2px solid;
    border-radius: .25rem;
    font-size: large;
    cursor: pointer;
    box-sizing: border-box;
    transition: all .3s ease;
    font-weight: bold;
    z-index: 1;
}

button:hover {
    color: $highlight-bg-color;
    background-color: $primary-color-clarity;
    border: $primary-color-clarity 2px solid;
    border-radius: .3rem;
}

.icon {
    font-size: 1.2em;
    vertical-align: middle;
    margin-top: 3px;
    margin-left: .5rem;
    margin-right: .5rem;
    cursor: pointer;
    font-variation-settings:
        'wght' 600,
}

.btn-label {
    margin: auto;
    font-size: inherit;
    vertical-align: middle;
    cursor: pointer;
}

button:hover .btn-label {
    text-decoration: underline solid 1px $highlight-bg-color;
}
</style>