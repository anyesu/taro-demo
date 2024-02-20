import { Image, View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { ArrowRight } from '@nutui/icons-react-taro';
import { Cell, CellGroup } from '@nutui/nutui-react-taro';
import { navs, NUT_UI_LOGO } from './constants';
import styles from './index.module.scss';

async function navigateTo(group: string, path: string) {
  await Taro.navigateTo({ url: `/pages/${group}/${path}` });
}

export default function Index() {
  return (
    <View className={styles.index}>
      <View className={styles.index__header}>
        <Image src={NUT_UI_LOGO} />
        <View className={styles.index__header__info}>
          <h1>NutUI React</h1>
          <p>京东风格的轻量级小程序组件库 React 版</p>
        </View>
      </View>
      <View className={styles.index__navs}>
        {navs.map((group) => (
          <CellGroup key={group.path} title={group.name}>
            {group.children.map(({ name, path }) => {
              const onClick = () => navigateTo(group.path, path);
              return <Cell key={path} title={name} extra={<ArrowRight />} onClick={onClick} />;
            })}
          </CellGroup>
        ))}
      </View>
    </View>
  );
}
