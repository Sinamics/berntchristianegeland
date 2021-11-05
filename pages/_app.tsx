import type { AppProps } from 'next/app';
import React from 'react';
import { LayoutPublic } from '@components/layouts';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LayoutPublic>
      <Component {...pageProps} />
    </LayoutPublic>
  );
}

export default MyApp;
