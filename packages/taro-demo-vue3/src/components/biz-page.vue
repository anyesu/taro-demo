<template>
  <nut-config-provider class="layout-screen" :theme-vars>
    <view class="layout-content">
      <slot />
    </view>
  </nut-config-provider>
</template>

<script setup lang="ts">
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
    height: 100%;
    background: #f7f8fa;
    padding: 30px 25px;
  }
}
</style>
