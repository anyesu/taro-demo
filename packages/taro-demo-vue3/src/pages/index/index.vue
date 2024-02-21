<template>
  <view class="index">
    <view class="index-header">
      <image :src="NUT_UI_LOGO" />
      <view class="info">
        <h1>NutUI</h1>
        <p>京东风格的轻量级小程序组件库</p>
      </view>
    </view>
    <view class="index-navs">
      <nut-cell-group v-for="group in navs" :key="group.name" :title="group.name">
        <template v-for="{ name, path } in group.children" :key="name">
          <nut-cell :is-link="true" :title="name" @click="navigateTo(group.path, path)" />
        </template>
      </nut-cell-group>
    </view>
  </view>
</template>

<script setup lang="ts">
import Taro from '@tarojs/taro';
import { navs, NUT_UI_LOGO } from './constants';

function navigateTo(group: string, path: string) {
  Taro.navigateTo({ url: `/pages/${group}/${path}` });
}
</script>

<style lang="scss">
.index {
  height: 100%;
  width: 100%;

  &-header {
    display: flex;
    align-items: center;
    padding: 0 34px;
    height: 117px;
    > image {
      width: 67px;
      height: 67px;
      margin-right: 18px;
      flex-shrink: 0;
    }
    .info {
      display: flex;
      flex-direction: column;
      h1 {
        height: 48px;
        line-height: 48px;
        font-size: 34px;
        color: rgba(51, 51, 51, 1);
        font-weight: 500;
      }
      p {
        height: 18px;
        line-height: 18px;
        font-size: 12px;
        color: rgba(154, 155, 157, 1);
      }
    }
  }
  &-navs {
    background: #f7f8fa;
    border-radius: 30px 30px 0 0;
    overflow: hidden;
    padding: 30px 25px;
  }
}
</style>
