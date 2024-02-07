<template>
  <view class="index">
    <text>{{ msg }}</text>
  </view>
</template>

<script lang="ts">
import { ref } from 'vue';
import './index.scss';

export default {
  setup() {
    const msg = ref('Hello world');
    return {
      msg,
    };
  },
};
</script>
