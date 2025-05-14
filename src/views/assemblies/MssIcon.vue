<script setup lang="ts">
withDefaults(defineProps<{
    icon: string,
}>(), {
    icon: 'Info',
});
</script>

<template>
    <span class="material-symbols-outlined">{{ icon }}</span>
</template>

<style lang="scss">
.material-symbols-outlined {
    font-size: inherit;
}
</style>