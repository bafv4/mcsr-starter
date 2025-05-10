import MssButton from '@/views/assemblies/MssButton.vue'
import MssLangSelector from '@/views/assemblies/MssLangSelector.vue'
import MssIconButton from '@/views/assemblies/MssIconButton.vue'

export function useAssembly() {
    return {
        /** ## 汎用ボタン */
        MssButton: MssButton,
        /** ## 言語選択 */
        MssLangSelector: MssLangSelector,
        /** ## アイコンボタン */
        MssIconButton: MssIconButton,
    };
}