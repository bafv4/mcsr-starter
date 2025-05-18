// components
import MssButton from '@/components/atoms/MssButton.vue'
import MssIconButton from '@/components/atoms/MssIconButton.vue'
import MssIcon from '@/components/atoms/MssIcon.vue'
import MssModal from '@/components/atoms/MssModal.vue'
import MssWideButton from '@/components/atoms/MssWideButton.vue'
import MssTooltips from '@/components/atoms/MssTooltips.vue'
// modules
import MssLangSelector from '@/components/modules/MssLangSelector.vue'
import MssDirSelector from '@/components/modules/MssDirSelector.vue'
// layouts
import MssWizard from '@/components/layouts/MssWizard.vue'
import MssPage from '@/components/layouts/MssPage.vue'

export function useComponent() {
    return {
        /** 汎用ボタン */
        MssButton: MssButton,
        /** 言語選択 */
        MssLangSelector: MssLangSelector,
        /** アイコンボタン */
        MssIconButton: MssIconButton,
        /** Googleアイコン使用用コンポーネント */
        MssIcon: MssIcon,
        /** モーダルウィンドウ（風） */
        MssModal: MssModal,
        /** 画面幅のボタン */
        MssWideButton: MssWideButton,
        /** フォルダ選択 */
        MssDirSelector: MssDirSelector,
        /** ツールチップ */
        MssTooltips: MssTooltips,
    };
}

export function useLayout() {
    return {
        /** ## インストーラ風レイアウト */
        MssWizard: MssWizard,
        /** ## フルページレイアウト */
        MssPage: MssPage,
    };
}