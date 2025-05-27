import axios from 'axios';
import { URL } from "url";
import path from 'node:path';
import sudo from 'sudo-prompt';
import extract = require("extract-zip");
import { ItemInfo, Option, State } from 'src/@types/types';
import { BrowserWindow, ipcMain } from 'electron';
import { download } from 'electron-dl';

export function darwinHandler() {
    ipcMain.handle('start-download', async (e, options: Option[], dir: string) => {
        const win = BrowserWindow.getAllWindows()[0];;
        if (!win) return;

        let totalBytes: number = 0;
        let downloadedBytes: number = 0;

        const stateTick = (percent: number, state: State, target: string) => {
            win.webContents.send('state-tick', percent, state, target);
        }

        stateTick(0, 0, null);

        const getFullPath = (url: string): string => {
            return path.join(dir, URL.parse(url).pathname.split('/').pop());
        };

        const optWithFullpath = options.map(op => ({
            ...op,
            fullPath: getFullPath(op.url)
        }));

        /** zips */
        const zips = optWithFullpath.filter(op => op.tag == "zip");
        /** installers */
        const installers = optWithFullpath.filter(op => op.tag == "installer");

        // calc sum of all file size
        try {
            totalBytes = await calcSize(options.map(op => op.url));
        } catch (err) {
            throw new Error(err);
        }

        console.log(totalBytes);

        stateTick(0, 1, null);

        try {
            for (const op of options) {
                const item = await download(win, op.url, {
                    directory: dir,
                    onProgress: (progress) => {
                        const current: number = Math.round((progress.totalBytes * progress.percent + downloadedBytes) * 100 / totalBytes);
                        stateTick(current, 1, op.name);
                        console.log(progress);
                        console.log(current);
                    },
                });
                downloadedBytes += item.getTotalBytes();
            }

        } catch (err) {
            console.error('Download failed:', err);
            win.webContents.send('download-error', err.message);
        }

        if (zips) {
            // state => unzip
            for (const [index, zip] of zips.entries()) {
                console.log(`Extracting ${zip.name}...`);
                await extractZip(zip.fullPath);
                stateTick(100, 2, zip.name);
                console.log(`Done extracting: ${zip.name}!`);
            }
        }

        // state => installing
        if (installers) {
            for (const [index, ins] of installers.entries()) {
                await runInstaller(ins.fullPath);
                stateTick(100, 2, ins.name);
            }
        }

        // state => finish
        stateTick(100, 4, null);
    });
}

const calcSize = async (urls: string[]) => {
    console.log(urls);
    const sizes = await Promise.all(
        urls.map(async (url) => {
            const res = await axios.head(url);
            const len = res.headers['content-length'];
            return len ? parseInt(len, 10) : 0;
        })
    );
    return sizes.reduce((acc, size) => acc + size, 0);
};

const extractZip = async (zipPath: string): Promise<void> => {
    await extract(zipPath, { dir: path.dirname(zipPath) });
};

const runInstaller = (exePath: string): Promise<void> => {
    return new Promise((resolve, reject) => {
        const command = `"${path.resolve(exePath)}"`;
        const options = {
            name: 'MCSR Starter App Installer',
        };

        sudo.exec(command, options, (error, stdout, stderr) => {
            if (error) {
                console.error('Installer failed:', error);
                reject(error);
            } else {
                console.log('Installer finished successfully.');
                resolve();
            }
        });
    });
};