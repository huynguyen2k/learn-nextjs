import { LayoutProps } from '@/pages/_app';
import Link from 'next/link';
import { useEffect } from 'react';

export function AdminLayout({ children }: LayoutProps) {
  useEffect(() => {
    console.log('admin layout mount');

    return () => {
      console.log('admin layout unmount');
    };
  }, []);

  return (
    <div>
      <h1>Admin Layout</h1>

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
