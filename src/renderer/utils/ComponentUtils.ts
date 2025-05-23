// components
import MssButton from '@renderer/components/atoms/MssButton.vue'
import MssIconButton from '@renderer/components/atoms/MssIconButton.vue'
import MssIcon from '@renderer/components/atoms/MssIcon.vue'
import MssWideButton from '@renderer/components/atoms/MssWideButton.vue'
import MssTooltips from '@renderer/components/atoms/MssTooltips.vue'
import MssProgressBar from '@renderer/components/atoms/MssProgressBar.vue'
// modules
import MssCheckList from '@renderer/components/modules/MssCheckList.vue'
import MssLangSelector from '@renderer/components/modules/MssLangSelector.vue'
import MssDirSelector from '@renderer/components/modules/MssDirSelector.vue'
// layouts
import MssWizard from '@renderer/components/layouts/MssWizard.vue'
import MssPage from '@renderer/components/layouts/MssPage.vue'

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
        /** 画面幅のボタン */
        MssWideButton: MssWideButton,
        /** 進捗バー */
        MssProgressBar: MssProgressBar,
        /** チェックボックスのリスト */
        MssCheckList: MssCheckList,
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