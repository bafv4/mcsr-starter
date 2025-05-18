import { reactive } from 'vue'

interface Toast {
    id: number,
    message: string,
    timeout: number,
    timer?: any,
    paused: boolean,
    err: boolean
}

const duration = 5000;
const toasts = reactive<Toast[]>([]);
let idCounter = 0;

export function useToastService() {
    const add = (message: string, err: boolean) => {
        if (toasts.length >= 3) { toasts.shift(); }
        const id = ++idCounter;
        const toast: Toast = {
            id,
            message,
            timeout: duration,
            paused: false,
            err
        };
        toasts.push(toast);
        startTimer(toast);
    }

    const startTimer = (toast: Toast) => {
        toast.timer = setTimeout(() => {
            remove(toast.id)
        }, toast.timeout)
    }

    const pause = (id: number) => {
        const toast = toasts.find(t => t.id === id);
        if (toast && toast.timer) {
            clearTimeout(toast.timer);
            toast.paused = true;
        }
    }

    const resume = (id: number) => {
        const toast = toasts.find(t => t.id === id);
        if (toast && toast.paused) {
            toast.paused = false;
            startTimer(toast);
        }
    }

    const remove = (id: number) => {
        const index = toasts.findIndex(t => t.id === id);
        if (index !== -1) {
            clearTimeout(toasts[index].timer);
            toasts.splice(index, 1);
        }
    }

    return {
        toasts,
        add,
        remove,
        pause,
        resume,
    }
}
