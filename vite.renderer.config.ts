import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import yaml from '@rollup/plugin-yaml';

export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    yaml(),
  ],
  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       additionalData: `@use "@renderer/styles/_variables.scss" as *;`
  //     }
  //   }
  // },
  resolve: {
    alias: {
      '@renderer': path.resolve(__dirname, 'src/renderer')
    }
  },
  build: {
    outDir: '.vite/renderer/main_window',
  }
});
