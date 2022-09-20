import { EmptyLayout } from '@/components/layout';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';
import '../styles/globals.css';

export type LayoutProps = {
  children: ReactNode;
};

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  Layout?: (props: LayoutProps) => ReactElement;
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.Layout ?? EmptyLayout;

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
