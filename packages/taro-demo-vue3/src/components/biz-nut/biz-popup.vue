<template>
  <biz-teleport :root :target="teleport">
    <nut-popup v-bind="$attrs">
      <slot />
    </nut-popup>
  </biz-teleport>
</template>

<script setup lang="ts">
import type { TaroElement } from '@tarojs/runtime';
import type { ExtractPropTypes } from 'vue';
import { popupProps } from '@nutui/nutui-taro/dist/types/__VUE/popup/props';

defineOptions({ inheritAttrs: false });

withDefaults(defineProps<Props>(), {
  teleport: undefined,
  root: 'first',
});

type PopupProps = Partial<ExtractPropTypes<typeof popupProps>>;

/**
 * 只需要类型提示，加 `@vue-ignore` 可以避免运行时注册为属性，直接透传
 */
interface Props extends /* @vue-ignore */ PopupProps {
  /**
   * 传送的目标：可以是一个 DOM 元素对象或者其 id
   */
  teleport?: string | TaroElement | null;
  /**
   * 优先级小于 `target`
   *
   * `true`     - 渲染到页面根节点
   * `'first'`  - 渲染到页面根节点的第一个子节点，用于适配 `ConfigProvider` 全局配置
   */
  root?: boolean | 'first';
}
</script>
