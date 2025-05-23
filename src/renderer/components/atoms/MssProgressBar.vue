<template>
    <div class="progress-container">
        <div class="bar" :style="{ width: percent + '%'}"></div>
    </div>
</template>

<script lang="ts" setup>
defineProps<{
    percent: number,
}>();
</script>

<style lang="scss"scoped>
.progress-container {
    width: 100%;
    height: 8px;
    background-color: $secondary-color;
    border-radius: .25rem;
    overflow: hidden;
}
.bar {
    height: 100%;
    background-color: $primary-color-active;
    transition: width .3s ease;
}
</style>