import React from 'react';
import NextDocument, { Html, Main, NextScript, Head } from 'next/document';
import { getCssText } from 'stitches.config';
import { GA_TRACKING_ID } from '@lib/analytics';

const INTER_FONT = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"';

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />

          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link href={INTER_FONT} rel="preload" as="style" />
          <link href={INTER_FONT} rel="stylesheet" media="all" />

          <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
          <script
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
            });`,
            }}
          />

          <noscript>
            <link href={INTER_FONT} rel="stylesheet" />
          </noscript>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
