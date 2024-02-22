<template>
  <biz-page title="NavBar 头部导航">
    <nut-button :block="true" type="primary" @click="show = true">Hello world!</nut-button>
    <nut-popup v-model:visible="show" :style="{ padding: '30px' }">
      <text>正文</text>
    </nut-popup>
  </biz-page>
</template>

<script setup lang="ts">
const show = ref(false);
</script>

<style scoped lang="scss"></style>
