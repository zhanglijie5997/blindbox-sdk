interface CallNativeCheckPaidJsonString<T> extends string {}

/**
 * @interface CallNativeCheckPaidParams
 * @param OrderId 订单id
 * @param OrderType 订单类型
 */
declare interface CallNativeCheckPaidParams {
    OrderId: string;
    OrderType: number;
}

declare interface CallNativeCloseAndRedirectPageParams {
    pageId: "MyOrderActivity" | "GoodsShopActivity" | "paySuccess" | "dialog";
}

declare interface CallNativeLoadHeaderType {
    bbcid: string;
    bbctoken: string;
    bbInsideH5: number;
    bbClientPaid: number;
    bbOS: string;
    bbVersionName: string;
    bbVersionCode: string;
    bbHotUpdateCode: string;
    bbChannel: string;
    bbChild: string;
    // "Connection": "keep-alive",
    bbIMEI: string;
    bbIMEI_MD5: string;
    bbANDROIDID: string;
    bbANDROIDID_MD5: string;
    bbOAID: string;
    bbOAID_MD5: string;
    bbMAC: string;
    bbMAC1: string;
    bbUA: string;
    bbMODEL: string;
}

declare enum BlindBoxName {
    callNativeCheckPaid = "callNativeCheckPaid",
    callNativeCloseAndRedirectPage = "callNativeCloseAndRedirectPage",
    callNativeLoadHeader = "callNativeLoadHeader",
    callNativeHandleByErrorCode = "callNativeHandleByErrorCode",
}

declare interface Window {
    blindbox: {
        /**
         * 调起支付页面
         * @param value
         */
        callNativeCheckPaid: (
            value: CallNativeCheckPaidJsonString<CallNativeCheckPaidParams>
        ) => void;
        /**
         * 关闭页面
         * @param page
         */
        callNativeCloseAndRedirectPage: (
            value: CallNativeCheckPaidJsonString<CallNativeCloseAndRedirectPageParams>
        ) => void;
        /**
         * 获取app请求头
         * @return
         */
        callNativeLoadHeader: () => CallNativeLoadHeaderType | undefined;

        /**
         * 通知app处理异常
         * @param v
         */
        callNativeHandleByErrorCode: (v: string) => void;

        /**
         * 创建订单后调用
         * @param v 订单信息
         */
        callNativeCloseUrl: (v: string) => void;
        /**
         * 收到推送通知h5跳转页面
         * @return {Object}
         */
        callJsByNotify: () => Object;
        /**
         * 余额支付成功
         */
        callNativePaySuccess: (v: string) => void;
        /**
         * 插入数据
         * @param v
         */
        callNativeInsertDB: (v: string) => void;

        /**
         * 获取参数
         * @param {string} key eg: 用户id + 接口名称
         * @return Promise<any>
         */
        callNativeSelectDB: <T>(k: string) => T;

        /**
         * 修改状态栏颜色
         * @param v hex色值
         */
        callNativeUpdateStatusBar: (v: string) => void;

        /**
         * 跳转首页导航
         * @param v
         */
        callNativeBackHome: (v: number) => void;
        /**
         * 返回
         */
        callNativeBack: () => void;
        /**
         * scheme跳转
         */
        callNativePagesJump: (v: string) => void;

        /**
         * 跳转H5
         */
        callNativePagesJumpWeb: (string) => void;

        /**
         * 跳转盲盒机
         */
        callNativeOpenMachine: (
            MachineId: string,
            openPayDialog: boolean
        ) => void;

        /**
         * 播放音频
         */
        callNativePlayerAudio: (v: string) => void;
    };
}
