<template>
    <div class="list">
        <label v-for="item in items" :key="item.id" class="items">
            <input type="checkbox" :value="item.id" v-model="selectedAppIds" />
            <div class="info">
                <strong>{{ item.name }}</strong>
                <p>{{ item.description }}</p>
            </div>
        </label>
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { ItemInfo } from '@/utils/DownloadUtils';

const props = defineProps<{
    items: ItemInfo[];
}>();

const emit = defineEmits<{
    (e: 'update:selected', value: string[]): void;
}>();

const selectedAppIds = ref<string[]>([]);

// 選択状態が変わるたびに emit
watch(selectedAppIds, (newValue) => {
    emit('update:selected', newValue);
});
</script>

<style lang="scss" scoped>
.list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.items {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
}

.info {
    flex: 1;
}
</style>
