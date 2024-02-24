import type { TaroElement } from '@tarojs/runtime';
import { Popup, type PopupProps } from '@nutui/nutui-react-taro';
import { BizPortal } from '@/components';

export interface BizPopupProps extends Partial<PopupProps> {
  /**
   * 传送的目标：DOM 元素对象
   *
   * 不覆盖 `PopupProps['portal']`
   */
  teleport?: TaroElement | null;
  /**
   * 优先级小于 `target`
   *
   * `true`     - 渲染到页面根节点
   * `'first'`  - 渲染到页面根节点的第一个子节点，用于适配 `ConfigProvider` 全局配置
   */
  root?: boolean | 'first';
}

export default function BizPopup({ root = 'first', teleport, ...rest }: BizPopupProps) {
  return (
    <BizPortal root={root} target={teleport}>
      <Popup {...rest} />
    </BizPortal>
  );
}
