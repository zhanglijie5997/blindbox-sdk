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
     * @param v 跳转路径
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
    /**
     * 跳转web
     * @param param0 web路径
     * @param type   true -> 原生控制导航栏
     */
    callNativePagesJumpWeb({ pageId, type, }: {
        pageId: string;
        type: boolean;
    }): void;
    /**
     * 设置进度条
     * @param progress 进度
     * @param fn
     */
    callNativeSetLoadingProgress(progress: number): void;
}
declare const _default: CocosCore;

export { _default as default };
