import type { TaroElement } from '@tarojs/runtime';
import type { Router } from '@tarojs/runtime/dist/current';
import { useRouter } from '@tarojs/taro';
import { useLayoutEffect, useState } from 'react';

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
 * 根据 id 获取 DOM 元素对象
 */
export function useTaroElement(id?: string) {
  const [dom, setDom] = useState<TaroElement | null>(null);

  useLayoutEffect(() => {
    if (!id) return;
    const node = document.getElementById(id) as TaroElement | null;
    setDom(node);
  }, [id]);

  return dom;
}

/**
 * 获取页面根节点
 *
 * ref: https://github.com/NervJS/taro/issues/7282#issuecomment-1676778571
 */
export function useTaroPage() {
  const pageId = useTaroPageId();
  return useTaroElement(pageId);
}
