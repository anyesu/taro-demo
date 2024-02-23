import { incrementId } from '@tarojs/runtime';

export const TELEPORT_TARGET_KEY = Symbol('teleport-target');

export const nodeId = incrementId(); // 自增 id ref: https://github.com/NervJS/taro/blob/v3.6.25/packages/taro-runtime/src/dom/node.ts#L23

export const nextTeleportId = () => `teleport-${nodeId()}`;
