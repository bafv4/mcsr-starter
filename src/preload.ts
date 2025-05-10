// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

import { contextBridge, ipcRenderer, shell } from 'electron';

contextBridge.exposeInMainWorld('mssAPIs', {
    selectDest: () => ipcRenderer.invoke('select-dest'),
    openExternal: (url: string) => openExternal(url),
});

const openExternal = (url: string) => {
    if (/^https?:\/\//.test(url)) {
        shell.openExternal(url);
    } else {
        console.warn("Invalid URL:", url);
    }
};