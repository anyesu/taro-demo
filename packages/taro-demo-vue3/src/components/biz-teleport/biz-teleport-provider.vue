<template>
  <slot />
  <view :id="teleportId" />
</template>

<script setup lang="ts">
import { nextTeleportId, TELEPORT_TARGET_KEY } from './constants';

defineOptions({ inheritAttrs: false });

const teleportId = nextTeleportId();

provide(TELEPORT_TARGET_KEY, teleportId);
</script>
