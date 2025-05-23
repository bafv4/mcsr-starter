
export interface ItemInfo {
    id: string,
    resources: Resource[],
    props?: Record<string, any>,   // もし使わなかったら削除
}

interface Resource {
    name: string,
    ver?: string,
    url: string,
    tag: Tag,
};