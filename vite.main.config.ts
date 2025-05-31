import { defineConfig } from 'vite';
import path from 'path';

// https://vitejs.dev/config
export default defineConfig({
    resolve: {
        alias: {
            '@main': path.resolve(__dirname, 'src/main'),
        }
    },
    build: {
        outDir: '.vite/build',
        rollupOptions: {
            input: '@main/Main.ts'
        },
        target: 'node16',
    },
});
