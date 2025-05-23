<script lang="ts" setup>
</script>

<template>
    <div id="layout">
        <slot></slot>
    </div>
</template>

<style lang="scss" scoped>
// 親
div#layout {
    display: block;
    min-height: 100%;
    max-height: 100%;
    margin: 0;
    padding: .5rem 1rem;
}
</style>