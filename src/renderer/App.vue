<template>
    <router-view />
    <ToastContainer />
    <ModalContainer />
</template>

<script setup lang="ts">
import ToastContainer from '@renderer/components/containers/ToastContainer.vue';
import ModalContainer from '@renderer/components/containers/ModalContainer.vue';
</script>

<style lang="scss"></style>