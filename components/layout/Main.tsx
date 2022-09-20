import { LayoutProps } from '@/pages/_app';
import Link from 'next/link';
import { useEffect } from 'react';

export function MainLayout({ children }: LayoutProps) {
  useEffect(() => {
    console.log('main layout mount');

    return () => {
      console.log('main layout unmount');
    };
  }, []);

  return (
    <div>
      <h1>Main Layout</h1>

      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/login">Login</Link>
        </li>
        <li>
          <Link href="/register">Register</Link>
        </li>
      </ul>

      <div>{children}</div>
    </div>
  );
}
