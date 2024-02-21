<template>
  <nut-config-provider class="layout-screen" :theme-vars>
    <biz-navbar v-if="isWeb" :title />
    <view class="layout-content">
      <slot />
    </view>
  </nut-config-provider>
</template>

<script setup lang="ts">
defineProps<Props>();

interface Props {
  title?: string;
}

const isWeb = process.env.TARO_ENV === 'h5';

const themeVars = ref({
  primaryColor: '#a681fd',
});
</script>

<style lang="scss">
.layout-screen {
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;

  .layout-content {
    flex: auto;
    min-height: 0;
    background: #f7f8fa;
    padding: 20px;
  }
}
</style>
