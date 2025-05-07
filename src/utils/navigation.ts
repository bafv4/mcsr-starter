// navigation.ts: 画面遷移用Utils

import { useRouter } from 'vue-router';

const router = useRouter();

const handleNavigate = (path: string) => {
    // 次のページに遷移
    router.push(path);
};

export {
    handleNavigate,
};