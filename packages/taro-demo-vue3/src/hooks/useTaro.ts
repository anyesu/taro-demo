import type { TaroRootElement } from '@tarojs/runtime';
import type { Router } from '@tarojs/runtime/dist/current';
import { nextTick, useRouter } from '@tarojs/taro';

/**
 * 注入页面根节点 id
 *
 * ref: https://github.com/NervJS/taro/blob/v3.6.25/packages/taro-plugin-vue3/src/runtime/connect.ts#L88
 */
export function injectTaroPageId() {
  return inject('id') as string;
}

/**
 * 获取页面根节点 id
 *
 * ref: https://github.com/NervJS/taro/blob/v3.6.25/packages/taro-runtime/src/next-tick.ts#L21
 */
export function useTaroPageId() {
  const router = useRouter();
  return (router as unknown as Router).$taroPath;
}

/**
 * 获取页面根节点
 */
export function useTaroPageRootElement() {
  const pageId = useTaroPageId();
  const dom = ref<TaroRootElement | null>();

  nextTick(() => {
    dom.value = document.getElementById(pageId) as TaroRootElement | null;
  });

  return dom;
}
