import { View } from '@tarojs/components';
import type { TaroElement } from '@tarojs/runtime';
import { createContext, useCallback, useContext, useState, type PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';
import { useTaroPage } from '@/hooks/useTaro';

export type BizPortalTarget = TaroElement | null | undefined;

export interface BizPortalProps extends PropsWithChildren {
  /**
   * 是否从页面中脱离出来
   */
  enable?: boolean;
  /**
   * 传送的目标：DOM 元素对象
   */
  target?: BizPortalTarget;
  /**
   * 优先级小于 `target`
   *
   * `true`     - 渲染到页面根节点
   * `'first'`  - 渲染到页面根节点的第一个子节点，用于适配 `ConfigProvider` 全局配置
   */
  root?: boolean | 'first';
}

const BizPortalRefContext = createContext<BizPortalTarget>(null);

export const useBizPortalRef = () => useContext(BizPortalRefContext);

export function BizPortalProvider({ children }: PropsWithChildren) {
  // ref: https://stackoverflow.com/a/67906087
  const [dom, setDom] = useState<BizPortalTarget>();
  const ref = useCallback((node: BizPortalTarget) => node && setDom(node), []);

  return (
    <BizPortalRefContext.Provider value={dom}>
      {children}
      <View ref={ref} className="teleport-target" />
    </BizPortalRefContext.Provider>
  );
}

/**
 * ref: https://react.dev/reference/react-dom/createPortal
 * ref: https://docs.taro.zone/docs/components/viewContainer/root-portal
 * ref: https://github.com/NervJS/taro/issues/7282#issuecomment-1676778571
 */
export default function BizPortal(props: BizPortalProps) {
  const { children, enable = true, target, root } = props;
  const provideTarget = useBizPortalRef();
  const pageNode = useTaroPage();

  const targetNode =
    target ||
    (root ? (root === 'first' ? pageNode?.firstChild : pageNode) : provideTarget ?? pageNode);
  return enable && targetNode ? createPortal(children, targetNode as any) : children;
}
