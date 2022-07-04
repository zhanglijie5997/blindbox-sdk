"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __importDefault(require("./core"));
class CocosCore {
    static instance = new CocosCore();
    /**
     * 跳转H5
     * @param v
     */
    callNativeCheckPaid(v) {
        core_1.default.callNativePagesJumpWeb(v.params.pageId, v.params.type);
    }
    /**
     * 跳转盲盒机
     * @param param0 id firstId
     * @param param1 type 是否打开弹窗
     */
    callNativeOpenMachine({ id, type }) {
        core_1.default.callNativeOpenMachine(id, type);
    }
}
exports.default = CocosCore.instance;
