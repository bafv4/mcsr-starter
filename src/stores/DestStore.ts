// destStore.ts: セットアップ先のフォルダのパスを保存するストア
import { defineStore } from 'pinia';

export const useDestStore = defineStore('dest', {
    state: () => ({
        dest: '' as string,
    }),
    actions: {
        setDest( dest: string) {
            this.dest = dest;
        },
        clearDest() {
            this.dest = '';
        },
        getDest() {
            return this.dest;
        },
    }
});