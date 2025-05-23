<script setup lang="ts">
withDefaults(defineProps<{
    /** アイコン名 */
    icon: string,
}>(), {
    icon: 'info',
});
</script>

<template>
    <span class="material-symbols-rounded">{{ icon }}</span>
</template>

<style lang="scss" scoped>
.material-symbols-rounded {
    font-size: 18px;
}
</style>