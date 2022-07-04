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
}

export default CocosCore.instance;
