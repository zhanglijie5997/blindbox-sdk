"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BlindBox {
    static instance = new BlindBox();
    constructor() {
        this.isInBindBox();
    }
    /**
     * 断言,判断是否在blindbox中
     */
    isInBindBox() {
        if (!window.blindbox) {
            throw Error("this sdk only suport to bindbox app.");
        }
    }
    /**
     * blindbox 支付页面
     * @param OrderId   订单id
     * @param OrderType 订单类型
     * @param callback  不在原生的回调
     */
    callNativeCheckPaid(OrderId, OrderType, callback) {
        try {
            const result = window.blindbox.callNativeCheckPaid(JSON.stringify({ OrderId, OrderType }));
        }
        catch (error) {
            callback?.();
        }
    }
    /**
     * 关闭页面
     * @param pageId    页面id
     * @param callback
     */
    callNativeCloseAndRedirectPage(pageId, callback) {
        try {
            window.blindbox.callNativeCloseAndRedirectPage(JSON.stringify(pageId));
        }
        catch (error) { }
    }
    /**
     * 获取API请求头
     * @param callback 如果在cocos界面会使用此回调
     * @returns {Object}
     */
    callNativeLoadHeader(callback) {
        return new Promise((res, rej) => {
            const result = window.blindbox.callNativeLoadHeader();
            // 如果存在
            callback?.call({
                name: BlindBoxName.callNativeLoadHeader,
                params: result,
            });
            res(result);
        });
    }
    /**
     * 通知app处理异常
     * @param v
     */
    callNativeHandleByErrorCode(value, callback) {
        try {
            window.blindbox.callNativeHandleByErrorCode(JSON.stringify(value));
        }
        catch (error) {
            callback?.();
        }
    }
    /**
     * 创建订单后调用
     * @param value 订单信息
     * @param callback
     */
    callNativeCloseUrl(value, callback) {
        try {
            window.blindbox.callNativeCloseUrl(JSON.stringify(value));
        }
        catch (error) {
            callback?.();
        }
    }
    /**
     * 收到推送通知h5跳转页面 需要传进去类型
     * @param callback
     * @returns
     */
    callJsByNotify(callback) {
        return new Promise((res, rej) => {
            const result = window.blindbox.callJsByNotify();
            res(result);
        });
    }
    /**
     * 余额支付成功
     * @param v
     */
    callNativePaySuccess(value, callback) {
        try {
            window.blindbox.callNativePaySuccess(JSON.stringify(value));
        }
        catch (error) {
            callback?.();
        }
    }
    /**
     * 插入数据
     * @param k             eg: 用户id + 接口名称
     * @param v             eg: 接口返回结果
     * @param Expiration    过期时间
     * @param callback
     */
    callNativeInsertDB(k, v, Expiration = 0, callback) {
        try {
            window.blindbox.callNativeInsertDB(JSON.stringify({
                key: k,
                response: v,
                Expiration: v.Expiration || Expiration,
            }));
        }
        catch (error) {
            callback?.();
        }
    }
    /**
     * 获取参数
     * @param k eg: 用户id + 接口名称
     * @returns
     */
    callNativeSelectDB(k) {
        return new Promise((res, rej) => {
            const result = window.blindbox.callNativeSelectDB(k);
            res(result);
        });
    }
    /**
     * 修改状态栏颜色
     * @param v hex色值
     * @param callback
     */
    callNativeUpdateStatusBar(v, callback) {
        try {
            window.blindbox.callNativeUpdateStatusBar(v);
        }
        catch (error) {
            callback?.();
        }
    }
    /**
     * 跳转首页导航
     * @param v 0 -> 首页 1 -> 游戏大厅 2 -> 商城 3 —> 仓库 4 -> 我的
     */
    callNativeBackHome(v, callback) {
        try {
            window.blindbox.callNativeBackHome(v);
        }
        catch (error) {
            callback?.();
        }
    }
    /**
     * 返回
     * @param callback
     */
    callNativeBack(callback) {
        try {
            window.blindbox.callNativeBack();
        }
        catch (error) {
            callback?.();
        }
    }
    /**
     * scheme跳转
     * @param v 路径
     * @param isCloseCurrentPage 是否关闭当前界面
     * @param jumpType 原生0，h5 1
     * @param statusBarType true -> 原生 false -> 无导航
     */
    callNativePagesJump(v, isCloseCurrentPage = false, jumpType = 0, statusBarType = true, callback) {
        try {
            window.blindbox.callNativePagesJump(JSON.stringify({
                jumpType,
                jumpScheme: v,
                statusBarType,
                isCloseCurrentPage, // 是否关闭当前界面
            }));
        }
        catch (error) {
            callback?.();
        }
    }
    /**
     * 跳转H5
     * @param pageId
     * @param statusBarType  true -> 原生控制导航栏
     * @param callback
     */
    callNativePagesJumpWeb(pageId, statusBarType = true, callback) {
        try {
            window.blindbox.callNativePagesJumpWeb(JSON.stringify({
                pageId,
                statusBarType,
            }));
        }
        catch (error) {
            callback?.();
        }
    }
    /**
     * 跳转盲盒机
     * @param MachineId
     * @param openPayDialog 打开弹窗
     */
    callNativeOpenMachine(MachineId, openPayDialog = false, callback) {
        try {
            window.blindbox.callNativeOpenMachine(MachineId, openPayDialog);
        }
        catch (error) {
            callback?.();
        }
    }
    /**
     * 播放音频
     * @param v
     */
    callNativePlayerAudio(v, callback) {
        try {
            window.blindbox.callNativePlayerAudio(v);
        }
        catch (error) {
            callback?.();
        }
    }
}
exports.default = BlindBox.instance;
