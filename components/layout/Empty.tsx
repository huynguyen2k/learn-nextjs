import { LayoutProps } from '@/pages/_app';
import { useEffect } from 'react';

export function EmptyLayout({ children }: LayoutProps) {
  useEffect(() => {
    console.log('empty layout mount');

    return () => {
      console.log('empty layout unmount');
    };
  }, []);

  return <>{children}</>;
}
