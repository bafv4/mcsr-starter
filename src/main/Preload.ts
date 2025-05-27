// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

import { contextBridge, ipcRenderer, shell } from 'electron';
import { ItemInfo, State } from 'src/@types/types';

contextBridge.exposeInMainWorld('bafv4', {
    /** フォルダ選択 */
    selectDest: () => ipcRenderer.invoke('select-dest'),
    /** リンクをブラウザで開く */
    openExternal: (url: string) => openExternal(url),
    /** ダウンロード開始 */
    startDarwin: async (items: ItemInfo[], dir: string) => await ipcRenderer.invoke('start-download', items, dir),
    /** ダウンロード進捗状況のコールバック */
    stateTick: (callback: (percent: number, state: State, target: string) => void) => {
        ipcRenderer.on('state-tick', (_, percent, state, target) => callback(percent, state, target));
    },
});

const openExternal = (url: string) => {
    if (/^https?:\/\//.test(url)) {
        shell.openExternal(url);
    } else {
        console.warn("Invalid URL:", url);
    }
};