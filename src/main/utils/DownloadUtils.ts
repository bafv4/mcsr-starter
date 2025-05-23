import * as fs from 'fs';
import * as https from 'https'
import * as http from 'http'
import { URL } from "url";
import path from 'path';
import sudo from 'sudo-prompt';
import extract = require("extract-zip");
import { ItemInfo } from 'src/@types/item';

type Tag = "mod" | "installer" | "zip" | "jar" | "other";
type ProgressCallback = (bytes: number) => void
/** ## 進捗状況
 * 0=開始前 1=ダウンロード中 2=解凍中 3=インストール中 4=終わり */
type process = 0 | 1 | 2 | 3 | 4;

export const main = async (
    items: ItemInfo[], 
    dir: string,
    callbackState: (prog: number, state: process) => void,
) => {

    callbackState(0, 0);

    let downloadedBytes = 0;
    let totalBytes: number = 0;

    const getFullPath = (url: string): string => {
        return path.join(dir, URL.parse(url).pathname.split('/').pop());
    };

    const resources = items.flatMap(item => item.resources);

    const rssWFullPath = resources.map(rs => ({
        ...rs,
        fullPath: getFullPath(rs.url)
    }));

    /** zips */
    const zips = rssWFullPath.filter(rs => rs.tag == "zip");
    /** installers */
    const installers = rssWFullPath.filter(rs => rs.tag == "installer");

    try {
        totalBytes = await calcSize(resources.map(rs => rs.url));
    } catch (err) {
        throw new Error(err);
    }

    // state => downloading
    callbackState(0, 1);

    await Promise.all(
        rssWFullPath.map(async (rss) => {
            console.log(`Downloading ${rss.name}...`);
            await download(rss.url, rss.fullPath, (chunkSize) => {
                downloadedBytes += chunkSize;
                callbackState(Math.round(downloadedBytes*100 / totalBytes), 1);
            });
            console.log(`Downloaded ${rss.name}!`);
        })
    );

    if (zips) {
        // state => unzip
        callbackState(100, 2);
        for (const zip of zips) {
            console.log(`Extracting ${zip.name}...`);
            await extractZip(zip.fullPath);
        }
    }

    // state => installing
    if (installers) {
        callbackState(100, 3);
        for (const ins of installers) {
            console.log(`Running Installer ${ins.name}...`);
            await runInstaller(ins.fullPath);
            console.log(`Installed ${ins.name}!`);
        }
    }

    // state => finish
    callbackState(100, 4);
};

const calcSize = async (urls: string[]) => {
    let total = 0;
    urls.forEach(async url => {
        let temp = await getFileSize(url);
        if (!temp) throw new Error('Could not get a file size');
        total += temp;
    });

    return total;
};

const getFileSize = async (url: string): Promise<number | null> => {
    const res = await fetch(url, { method: 'head' });

    if (!res.ok) {
        throw new Error('network err');
    }

    const size: string = res.headers.get('Content-Length');
    return size ? parseInt(size) : null;
};

const download = (
    fileUrl: string,
    outputPath: string,
    onProgress?: ProgressCallback
): Promise<void> => {
    const urlObj = new URL(fileUrl);
    const client = urlObj.protocol === 'https:' ? https : http;

    return new Promise((resolve, reject) => {
        const req = client.get(fileUrl, (res) => {
            if (res.statusCode && res.statusCode >= 400) {
                return reject(new Error(`Request failed. Status code: ${res.statusCode}`));
            }

            const total = parseInt(res.headers['content-length'] || '0', 10);
            let downloaded = 0;

            const fileStream = fs.createWriteStream(outputPath);
            res.pipe(fileStream);

            res.on('data', (chunk) => {
                downloaded += chunk.length;
                if (onProgress) onProgress(downloaded);
            });

            fileStream.on('finish', () => {
                fileStream.close(() => resolve());
            });

            res.on('error', (err) => {
                fs.unlink(outputPath, () => reject(err));
            });

            fileStream.on('error', (err) => {
                fs.unlink(outputPath, () => reject(err));
            });
        });

        req.on('error', reject);
    });
};

const extractZip = async (zipPath: string): Promise<void> => {
    await extract(zipPath, { dir: path.dirname(zipPath) });
};

const runInstaller = (exePath: string): Promise<void> => {
    return new Promise((resolve, reject) => {
        const command = `"${path.resolve(exePath)}"`;
        const options = {
            name: 'My Electron App Installer',
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