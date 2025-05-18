/// <reference types="@electron-forge/plugin-vite/forge-vite-env" />

interface Window {
  mssAPIs: {
    selectDest: () => Promise<string | null>,
    openExternal: (url: string) => void,
  };
}

declare module '*.md' {
  import { ComponentOptions } from 'vue'
  const component: ComponentOptions
  export default component
}