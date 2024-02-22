import type { Ref } from 'vue';
import { setTitle } from '@/utils';

export type MaybeRefOrGetter<T> = T | Ref<T> | (() => T);

/**
 * ref: https://vueuse.org/core/useTitle
 */
export default function useTitle(newTitle?: MaybeRefOrGetter<string | null | undefined>) {
  const title = toRef(newTitle);

  watchEffect(() => {
    setTitle(title.value);
  });

  return title;
}
