import MssWizard from '@/views/layouts/MssWizard.vue'
import MssPage from '@/views/layouts/MssPage.vue'

export function useLayout() {
    return {
        /** ## インストーラ風レイアウト */
        MssWizard: MssWizard,
        /** ## フルページレイアウト */
        MssPage: MssPage,
    };
}