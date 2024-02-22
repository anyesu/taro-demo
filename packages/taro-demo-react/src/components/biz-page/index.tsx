import { View } from '@tarojs/components';
import type { PropsWithChildren } from 'react';
import { ConfigProvider } from '@nutui/nutui-react-taro';
import classNames from 'classnames';
import { BizNavBar, TargetH5 } from '@/components';
import useTitle from '@/hooks/useTitle';
import './index.scss';

export interface BizPageProps extends PropsWithChildren {
  className?: string;
  title?: string;
}

const primaryColor = '#a681fd';

const theme = {
  nutuiColorPrimary: primaryColor,
  nutuiColorPrimaryStop1: primaryColor,
  nutuiColorPrimaryStop2: primaryColor,
};

export default function BizPage(props: BizPageProps) {
  const { className, title, children } = props;

  useTitle(title);

  return (
    <ConfigProvider className={classNames('layout-screen', className)} theme={theme}>
      <TargetH5>
        <BizNavBar title={title} />
      </TargetH5>
      <View className="layout-content">{children}</View>
    </ConfigProvider>
  );
}
