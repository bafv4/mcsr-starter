import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import yaml from '@rollup/plugin-yaml';
import vuetify from 'vite-plugin-vuetify';
import path from 'node:path';

export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/],
    }),
    yaml(),
    vuetify(),
  ],
  resolve: {
    alias: {
      '@renderer': path.resolve(__dirname, 'src/renderer')
    }
  },
  build: {
    outDir: '.vite/renderer/main_window',
  }
});
