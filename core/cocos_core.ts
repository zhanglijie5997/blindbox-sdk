import core from "./core";

interface Params {
    name: string;
    params: {
        pageId: string;
        type?: boolean;
    };
}

class CocosCore {
    public static instance = new CocosCore();

    /**
     * 跳转H5
     * @param v 跳转路径
     */
    callNativeCheckPaid(v: Params) {
        core.callNativePagesJumpWeb(v.params.pageId, v.params.type);
    }

    /**
     * 跳转盲盒机
     * @param param0 id firstId
     * @param param1 type 是否打开弹窗
     */
    callNativeOpenMachine({ id, type }: { id: string; type: boolean }) {
        core.callNativeOpenMachine(id, type);
    }

    /**
     * 跳转web
     * @param param0 web路径
     * @param type   true -> 原生控制导航栏
     */
    callNativePagesJumpWeb({
        pageId,
        type,
    }: {
        pageId: string;
        type: boolean;
    }) {
        core.callNativePagesJumpWeb(pageId, type);
    }

    /**
     * 设置进度条
     * @param progress 进度
     * @param fn
     */
    callNativeSetLoadingProgress(progress: number) {
        core.callNativeSetLoadingProgress(progress);
    }
}

export default CocosCore.instance;
