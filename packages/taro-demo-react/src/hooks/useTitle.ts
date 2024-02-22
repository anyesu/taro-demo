import { useEffect } from 'react';
import { setTitle } from '@/utils';

/**
 * ref: https://ahooks.gitee.io/hooks/use-title
 */
export default function useTitle(title?: string) {
  useEffect(() => {
    setTitle(title);
  }, [title]);
}
