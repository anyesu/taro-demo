import { View } from '@tarojs/components';
import { incrementId } from '@tarojs/runtime';
import Taro, { useRouter } from '@tarojs/taro';
import { useRef, useState, type PropsWithChildren, type ReactNode } from 'react';
import { ArrowRight } from '@nutui/icons-react-taro';
import { Button, Cell, CellGroup, Popup } from '@nutui/nutui-react-taro';
import { BizPage, BizPopup, BizPortal, BizPortalProvider } from '@/components';
import { useTaroElement } from '@/hooks/useTaro';
import './portal.scss';

interface SlotProps {
  show: boolean;
  setShow: (show: boolean) => void;
}

interface DemoProps {
  title?: ReactNode;
  subTitle?: ReactNode;
  desc?: ReactNode;
  children?: (slotProps: SlotProps) => ReactNode;
}

const demos: DemoProps[] = [
  {
    title: '不使用 Portal',
    desc: 'transform 使 fixed 失效',
  },
  {
    title: '使用 React 提供的 createPortal 将组件渲染到 DOM 树的任意位置',
    desc: '渲染到页面根节点，无法应用 UI 框架的主题配置（ CSS variables ）',
  },
  {
    subTitle: '渲染到页面根节点的第一个子节点',
    desc: '扩展 NutUI 的 Popup 以支持 Portal',
  },
  {
    title: '渲染到指定节点：使用 ref 获取节点',
    desc: '使用 Provider 提供用于渲染的节点',
  },
  {
    title: '渲染到指定节点：使用自增 id',
    subTitle: '组件 id 需要全局（所有页面）唯一，否则会失效',
    desc: '使用 id 获取节点',
  },
];

const nodeId = incrementId(); // 自增 id
const nextTeleportId = () => `teleport-${nodeId()}`;

/**
 * ref: https://stackoverflow.com/a/73416994
 */
function Demo({ children, title, subTitle, desc }: DemoProps) {
  const [show, setShow] = useState(false);
  return (
    <CellGroup title={title} description={subTitle}>
      <View className="transform-container">
        <Cell title={desc} extra={<ArrowRight />} onClick={() => setShow(true)} />
        {children?.({ show, setShow })}
      </View>
    </CellGroup>
  );
}

function Content({ children }: PropsWithChildren) {
  const router = useRouter();
  async function navigate() {
    await Taro.navigateTo({ url: router.path.split('?')[0] });
  }
  return (
    <Button type="primary" onClick={navigate} style={{ margin: '30px' }}>
      {children}
    </Button>
  );
}

export default function Page() {
  const targetId = useRef(nextTeleportId());
  const targetRef = useTaroElement(targetId.current);

  return (
    <BizPage title="Portal 传送门">
      <Demo {...demos[0]}>
        {({ show, setShow }) => (
          <Popup visible={show} onClose={() => setShow(false)}>
            <Content>初始</Content>
          </Popup>
        )}
      </Demo>

      <Demo {...demos[1]}>
        {({ show, setShow }) => (
          <BizPortal>
            <Popup visible={show} onClose={() => setShow(false)}>
              <Content>页面根节点</Content>
            </Popup>
          </BizPortal>
        )}
      </Demo>

      <Demo {...demos[2]}>
        {({ show, setShow }) => (
          <BizPopup visible={show} onClose={() => setShow(false)}>
            <Content>第一子节点</Content>
          </BizPopup>
        )}
      </Demo>

      <BizPortalProvider>
        <Demo {...demos[3]}>
          {({ show, setShow }) => (
            <BizPortal>
              <Popup visible={show} onClose={() => setShow(false)}>
                <Content>Provider</Content>
              </Popup>
            </BizPortal>
          )}
        </Demo>
      </BizPortalProvider>

      <Demo {...demos[4]}>
        {({ show, setShow }) => (
          <BizPortal target={targetRef}>
            <Popup visible={show} onClose={() => setShow(false)}>
              <Content>targetId</Content>
            </Popup>
          </BizPortal>
        )}
      </Demo>
      <View id={targetId.current} />
    </BizPage>
  );
}
