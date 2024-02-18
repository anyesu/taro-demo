import type { PropsWithChildren } from 'react';

// ref: https://docs.taro.zone/docs/next/envs/#processenvtaro_env

export const TargetH5 = ({ children }: PropsWithChildren) =>
  process.env.TARO_ENV === 'h5' && children;

export const TargetWeapp = ({ children }: PropsWithChildren) =>
  process.env.TARO_ENV === 'weapp' && children;
