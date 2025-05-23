/** ## naviUtils.ts: 共通ナビゲーションユーティリティ */
import { useRouter } from 'vue-router';
import { routes } from '@renderer/Router';

// routerのroutesからpath部分だけを取り出してユニオン（型情報）とする
type pages = typeof routes[number]["path"];

export function useNavigator() {
    const router = useRouter();

    return {
        /** ## ナビゲーター
         * コンテキストパスを渡すとページ遷移を実行する
         * @argument path パス
         * 
         * 引数には**routerに登録してあるパスしか受け付けない**ので注意。
         */
        to: (path: pages) => router.push(path),
        /** ## ナビゲーター（エラーページ表示用）
         * エラーページに遷移し、エラーを表示
         * @param errtype エラータイプ
         */
        err: (errtype: string) => router.push({ name: 'Error', params: { type: `${errtype}`, } }),
        /** 指定リンクをブラウザで開く */
        openLink: (link: string) => window.bafv4.openExternal(link),
    };
}