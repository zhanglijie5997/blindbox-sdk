interface Params {
    name: string;
    params: {
        pageId: string;
        type?: boolean;
    };
}
declare class CocosCore {
    static instance: CocosCore;
    /**
     * 跳转H5
     * @param v
     */
    callNativeCheckPaid(v: Params): void;
    /**
     * 跳转盲盒机
     * @param param0 id firstId
     * @param param1 type 是否打开弹窗
     */
    callNativeOpenMachine({ id, type }: {
        id: string;
        type: boolean;
    }): void;
}
declare const _default: CocosCore;
export default _default;
