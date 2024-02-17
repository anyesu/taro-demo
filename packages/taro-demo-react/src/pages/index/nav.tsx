import { Navigator, View } from '@tarojs/components';
import type { ReactNode } from 'react';
import { ArrowRight } from '@taroify/icons';
import styles from './nav.module.scss';

interface NavBlockProps {
  title?: ReactNode;
  href?: string;
}

export function NavBlock(props: NavBlockProps) {
  const { title, href } = props;

  return (
    <Navigator className={styles.nav__block} url={href}>
      {title}
      <ArrowRight size="small" />
    </Navigator>
  );
}

interface NavProps {
  title?: string;
  children?: ReactNode;
}

export default function Nav(props: NavProps) {
  const { title, children } = props;
  return (
    <View className={styles.nav}>
      <View className={styles.nav__title}>{title}</View>
      <View className={styles.nav__blocks}>{children}</View>
    </View>
  );
}
