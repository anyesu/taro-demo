import { View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import type { PropsWithChildren } from 'react';
import { ArrowLeft } from '@taroify/icons';
import classNames from 'classnames';
import { TargetH5 } from './Target';
import styles from './BizPage.module.scss';

interface PageProps {
  className?: string;
  title?: string;
}

async function onClickBack() {
  await Taro.navigateBack();
}

export default function BizPage(props: PropsWithChildren<PageProps>) {
  const { className, title, children } = props;

  return (
    <View className={classNames(styles.page, className)}>
      <TargetH5>
        <View className={styles.page__nav}>
          <ArrowLeft className={styles.page__nav__back} onClick={onClickBack} />
          <View className={styles.page__nav__title}>{title}</View>
        </View>
      </TargetH5>
      <View className={styles.page__content}>{children}</View>
    </View>
  );
}
