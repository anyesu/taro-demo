<template>
  <view class="applets-demo-header">
    <view class="back" @click="onClickBack">
      <left />
    </view>
    <view class="applets-icon">
      <image :src="appletsIcon" />
    </view>
    <text>{{ title }}</text>
  </view>
</template>

<script setup lang="ts">
import Taro from '@tarojs/taro';
import { Left } from '@nutui/icons-vue-taro';

defineProps<Props>();

interface Props {
  title?: string;
}

const appletsIcon =
  'https://img13.360buyimg.com/imagetools/jfs/t1/67106/30/23857/9375/63b4df85Fce5fd959/35265019206515fe.png';

async function onClickBack() {
  await Taro.navigateBack();
}
</script>

<style scoped lang="scss">
.applets-demo-header {
  position: relative;
  height: 57px;
  line-height: 57px;
  text-align: center;
  background: #fff;
  font-weight: bold;
  font-size: 20px;
  color: rgb(51 51 51 / 100%);
  box-shadow: 0 4px 10px 0 rgb(0 0 0 / 7%);
  .back {
    position: absolute;
    left: 0;
    height: 100%;
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-weight: normal;
  }
  .home-icon {
    display: inline-block;
    width: 32px;
    height: 32px;
    background: url('https://storage.360buyimg.com/imgtools/8cbe8f9dbb-63411260-9091-11ed-aa68-651117499129.png')
      no-repeat 0 0/100% 100%;
  }
  .applets-icon {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    > image {
      width: 87px;
      height: 36px;
    }
  }
}
</style>
