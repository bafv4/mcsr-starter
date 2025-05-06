<script setup lang="ts">
import MssButton from './atoms/MssButton.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const handleNavigate = (path: string) => {
    // Navigate to the next page
    // This is just a placeholder for the actual navigation logic
    router.push(path);
};
</script>

<template>
    <h1>Starting MCSR Setup</h1>
    <MssButton primary @navigate="handleNavigate">Next</MssButton>
</template>

<style lang="scss">
</style>