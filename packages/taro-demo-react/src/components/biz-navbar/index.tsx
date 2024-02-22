import { Image, Text, View } from '@tarojs/components';
import type { PropsWithChildren } from 'react';
import { ArrowLeft } from '@nutui/icons-react-taro';
import './index.scss';

interface Props {
  title?: string;
}

const appletsIcon =
  'https://img13.360buyimg.com/imagetools/jfs/t1/67106/30/23857/9375/63b4df85Fce5fd959/35265019206515fe.png';

function onClickBack() {
  window.history.back();
}

export default function BizNavBar({ title }: PropsWithChildren<Props>) {
  return (
    <View className="applets-demo-header-wrapper">
      <View className="applets-demo-header">
        <View className="back" onClick={onClickBack}>
          <ArrowLeft />
        </View>
        <View className="applets-icon">
          <Image src={appletsIcon} />
        </View>
        <Text>{title}</Text>
      </View>
    </View>
  );
}
