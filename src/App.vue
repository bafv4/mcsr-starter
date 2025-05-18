<template>
    <router-view />
    <ToastContainer />
    <ModalContainer />
</template>

<script setup lang="ts">
import ToastContainer from '@/components/containers/ToastContainer.vue';
import ModalContainer from '@/components/containers/ModalContainer.vue';
</script>

<style lang="scss"></style>