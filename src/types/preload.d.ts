// preload's type settings for typescript

export { };

declare global {
    interface Window {
        mssAPIs: {
            selectDest: () => Promise<string | null>,
        };
    }
}