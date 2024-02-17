import { Image, Text, View } from '@tarojs/components';
import { navs, type NavConfig } from './constants';
import Nav, { NavBlock } from './nav';
import styles from './index.module.scss';

function renderNavBlocks(group: string, children: NavConfig[]) {
  return children.map(({ name, path }) => (
    <NavBlock key={path} href={`/pages/${group}/${path}`} title={name} />
  ));
}

function renderNavs() {
  return navs.map(({ name, path, children }) => (
    <Nav key={path} title={name}>
      {renderNavBlocks(path, children)}
    </Nav>
  ));
}

export default function Home() {
  return (
    <View className={styles.home}>
      <View className={styles.home__title}>
        <Image
          className={styles.home__logo}
          mode="aspectFit"
          src="https://img01.yzcdn.cn/vant/logo.png"
        />
        <Text className={styles.home__name}>Taroify</Text>
      </View>
      <View className={styles.home__description}>轻量、可靠的小程序端 Taro 组件库</View>
      {renderNavs()}
    </View>
  );
}
