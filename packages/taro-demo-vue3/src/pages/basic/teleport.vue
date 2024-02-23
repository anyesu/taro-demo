<template>
  <biz-page title="Teleport 传送门">
    <demo v-slot="{ show }" v-bind="demos[0]">
      <nut-popup v-model:visible="show.value">
        <content>初始</content>
      </nut-popup>
    </demo>

    <demo v-slot="{ show }" v-bind="demos[1]">
      <biz-teleport>
        <nut-popup v-model:visible="show.value">
          <content>页面根节点</content>
        </nut-popup>
      </biz-teleport>
    </demo>

    <demo v-slot="{ show }" v-bind="demos[2]">
      <biz-popup v-model:visible="show.value">
        <content>第一子节点</content>
      </biz-popup>
    </demo>

    <biz-teleport-provider>
      <demo v-slot="{ show }" v-bind="demos[3]">
        <biz-teleport>
          <nut-popup v-model:visible="show.value">
            <content>Provider</content>
          </nut-popup>
        </biz-teleport>
      </demo>
    </biz-teleport-provider>

    <demo v-slot="{ show }" v-bind="demos[4]">
      <biz-teleport :target="targetRef">
        <nut-popup v-model:visible="show.value">
          <content>Ref</content>
        </nut-popup>
      </biz-teleport>
    </demo>
    <div v-if="isWeb" ref="targetRef" class="teleport-target" />
    <view v-else ref="targetRef" class="teleport-target" />
  </biz-page>
</template>

<script setup lang="tsx">
import { View } from '@tarojs/components';
import Taro, { useRouter } from '@tarojs/taro';
import type { SetupContext } from 'vue';
import { isWeb } from '@/utils';

interface DemoProps {
  title?: string;
  subTitle?: string;
  desc?: string;
}

const demos: DemoProps[] = [
  {
    title: '不使用 Teleport',
    desc: 'transform 使 fixed 失效',
  },
  {
    title: '使用 Vue 提供的 Teleport 将组件渲染到 DOM 树的任意位置',
    desc: '渲染到页面根节点，无法应用 UI 框架的主题配置（ CSS variables ）',
  },
  {
    subTitle: '渲染到页面根节点的第一个子节点',
    desc: '扩展 NutUI 的 Popup 以支持 Teleport',
  },
  {
    title: '渲染到指定节点：使用自增 id',
    subTitle: '组件 id 需要全局（所有页面）唯一，否则会失效',
    desc: '使用 Provider 提供用于渲染的节点',
  },
  {
    title: '渲染到指定节点：指定 DOM 元素对象',
    desc: '使用 ref 获取节点',
  },
];

/**
 * ref: https://vuejs.org/api/general.html#function-signature
 * ref: https://vuejs.org/guide/extras/render-function.html#typing-functional-components
 * ref: https://docs.taro.zone/docs/vue3#jsx
 */
const Demo = defineComponent(
  ({ title, subTitle, desc }: DemoProps, { slots }: SetupContext) => {
    const show = ref(false);
    return () => (
      <nut-cell-group title={title} desc={subTitle}>
        <View class="transform-container">
          <nut-cell is-link title={desc} onClick={() => (show.value = true)} />
          {slots.default({ show })}
        </View>
      </nut-cell-group>
    );
  },
  {
    name: 'demo',
    // eslint-disable-next-line vue/require-prop-types
    props: ['title', 'subTitle', 'desc'],
  },
);

const Content = (_, { slots }: SetupContext) => (
  <nut-button type="primary" onClick={navigate} style={{ margin: '30px' }}>
    {slots.default()}
  </nut-button>
);

const targetRef = ref();

const router = useRouter();

async function navigate() {
  await Taro.navigateTo({ url: router.path.split('?')[0] });
}
</script>

<style lang="scss">
.transform-container {
  transform: scale(1);
}

.nut-popup {
  max-height: unset;
}

.nut-cell-group__title {
  margin-top: 0;
}

.nut-cell-group__wrap {
  border-radius: 0; // fixme .nut-cell-group__wrap 同时设置了 `overflow: hidden` 和 `border-radius` 导致微信开发者工具中 fixed 失效时，切换 popup 会闪烁
}
</style>
