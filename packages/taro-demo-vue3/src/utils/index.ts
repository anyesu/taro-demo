import Taro from '@tarojs/taro';

export const isWeb = process.env.TARO_ENV === 'h5';

/**
 * ref: https://docs.taro.zone/docs/envs#%E5%A4%9A%E7%AB%AF%E8%84%9A%E6%9C%AC%E9%80%BB%E8%BE%91
 */
export function setTitle(title?: string | null) {
  title ??= '';
  if (isWeb) {
    document.title = title;
  } else {
    Taro.setNavigationBarTitle({
      title,
    }).then();
  }
}
