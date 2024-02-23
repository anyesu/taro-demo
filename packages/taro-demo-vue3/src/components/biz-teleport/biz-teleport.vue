<template>
  <teleport v-if="!enable || show" :disabled :to="computedTarget">
    <slot />
  </teleport>
</template>

<script setup lang="ts">
import type { TaroElement } from '@tarojs/runtime';
import { isString } from '@tarojs/shared';
import type { MaybeRef } from 'vue';
import { isWeb } from '@/utils';
import { TELEPORT_TARGET_KEY } from './constants';
import 'css.escape'; // polyfill `CSS.escape` ref: https://github.com/mathiasbynens/CSS.escape

const props = withDefaults(defineProps<Props>(), {
  enable: true,
  target: undefined,
  root: undefined,
});

/**
 * https://vuejs.org/guide/built-ins/teleport.html
 */
interface Props {
  /**
   * 是否从页面中脱离出来
   */
  enable?: boolean;
  /**
   * 传送的目标：可以是一个 DOM 元素对象或者其 id
   *
   * teleport 中用 class 选择器在小程序中会报错，因为 `querySelector` 是用 `getElementById` 模拟的
   *
   * ref: https://github.com/NervJS/taro/commit/2db9bdf289dab4e3c514c1ca151d4d5997a62260#diff-d7ae218b39f54c0aed1ec3bd9d0a3e57347bf7df7583e0e354ba6d9630433acaR36-R43
   *
   * 组件 id 需要全局（所有页面）唯一，否则会失效
   *
   * ref: https://github.com/NervJS/taro/issues/7317#issuecomment-722169193
   */
  target?: string | TaroElement | null;
  /**
   * 优先级小于 `target`
   *
   * `true`     - 渲染到页面根节点
   * `'first'`  - 渲染到页面根节点的第一个子节点，用于适配 `ConfigProvider` 全局配置
   */
  root?: boolean | 'first';
}

const show = ref(false);

onMounted(() => {
  // 卸载 teleport 会导致 slot 中的一些事件无法触发
  // 首次渲染完成前无法获取 dom 所以需要延迟显示 teleport ref: https://docs.taro.zone/docs/ref
  show.value = true;
});

const pageNode = useTaroPageRootElement();

const provideTarget = inject<MaybeRef<TaroElement> | null>(TELEPORT_TARGET_KEY, null);

function parseTarget(to?: MaybeRef<TaroElement> | string) {
  if (!isString(to)) {
    // 不同平台 ref 获取到的节点类型不同 ref: https://docs.taro.zone/docs/ref#ref-%E8%AF%AD%E6%B3%95
    return toRaw(toValue(to));
  }
  // use `CSS.escape` to escape the selector
  // ref: https://github.com/bootstrap-vue/bootstrap-vue/issues/5561
  // ref: https://github.com/facebook/react/issues/28404#issuecomment-1958470536
  return to ? `#${isWeb ? CSS.escape(to) : to}` : undefined;
}

const computedTarget = computed(() => {
  const { target, root } = props;

  return parseTarget(
    target ||
      (root
        ? root === 'first'
          ? pageNode.value?.firstChild
          : pageNode
        : provideTarget ?? pageNode),
  );
});

const disabled = computed(() => !(props.enable && computedTarget.value));
</script>
