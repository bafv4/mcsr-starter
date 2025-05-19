import { reactive } from 'vue';

export interface ModalOptions {
    content: any;
    closable?: boolean,
    props?: Record<string, any>;
    width?: string,
    height?: string,
}

const state = reactive({
    currentModal: null as ModalOptions | null
});

export const modalService = {
    show(modal: ModalOptions) {
        if (!modal.closable) {
            modal.closable = false;
        }
        state.currentModal = modal;
    },
    close() {
        state.currentModal = null;
    },
    getState() {
        return state;
    },
    isClosable() {
        return state.currentModal.closable;
    }
};