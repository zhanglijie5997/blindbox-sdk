"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cocoscore = exports.core = void 0;
const core_1 = __importDefault(require("./core/core"));
exports.core = core_1.default;
const cocos_core_1 = __importDefault(require("./core/cocos_core"));
exports.cocoscore = cocos_core_1.default;
