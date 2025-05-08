/** ## naviUtils.ts: 共通ナビゲーションユーティリティ */
import { NavigationFailure, useRouter } from 'vue-router';
import { routes } from '@/router';

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
        to: (path: pages): Promise<void | NavigationFailure> => router.push(path),
    };
}