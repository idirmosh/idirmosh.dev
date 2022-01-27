import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { darkTheme } from 'stitches.config';
import { globalStyles } from '@styles/global';
import { useRouter } from 'next/router';
import { isProd } from '@lib/constants';
import { useEffect } from 'react';
import Script from 'next/script';

import * as gtag from '@lib/analytics';
import Head from 'next/head';

globalStyles();

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      /* invoke analytics function only for production */
      if (isProd) gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      value={{
        dark: darkTheme.className,
        light: 'light',
      }}
    >
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default MyApp;
