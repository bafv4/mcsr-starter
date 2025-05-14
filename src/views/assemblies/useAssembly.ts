import MssButton from '@/views/assemblies/MssButton.vue'
import MssLangSelector from '@/views/assemblies/MssLangSelector.vue'
import MssIconButton from '@/views/assemblies/MssIconButton.vue'
import MssIcon from '@/views/assemblies/MssIcon.vue'
import MarkdownViewer from '@/views/assemblies/MarkdownViewer.vue'
import MssModal from '@/views/assemblies/MssModal.vue'

export function useAssembly() {
    return {
        /** 汎用ボタン */
        MssButton: MssButton,
        /** 言語選択 */
        MssLangSelector: MssLangSelector,
        /** アイコンボタン */
        MssIconButton: MssIconButton,
        /** Googleアイコン使用用コンポーネント */
        MssIcon: MssIcon,
        /** MarkdownをVueに読み込むためのコンポーネント */
        MarkdownViewer: MarkdownViewer,
        /** モーダルウィンドウ（風） */
        MssModal: MssModal,
    };
}