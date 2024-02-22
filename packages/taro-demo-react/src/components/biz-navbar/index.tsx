import { Image, Text, View } from '@tarojs/components';
import { ArrowLeft } from '@nutui/icons-react-taro';
import './index.scss';

export interface BizNavBarProps {
  title?: string;
}

const appletsIcon =
  'https://img13.360buyimg.com/imagetools/jfs/t1/67106/30/23857/9375/63b4df85Fce5fd959/35265019206515fe.png';

function onClickBack() {
  window.history.back();
}

export default function BizNavBar({ title }: BizNavBarProps) {
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
