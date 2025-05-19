type tag = "mod" | "installer" | "zip" | "jar" | "other";

export interface ItemInfo {
    id: string,
    name: string,
    resources: Resources[],
    description?: string,
    props ?: Record<string, any>,   // もし使わなかったら削除
};

interface Resources {
    ver: string,
    url: string,
    tag?: tag,
}