import React from 'react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import { getCssText } from 'stitches.config';
import { globalStyles } from '@styles/global';

const INTER_FONT = 'https://fonts.googleapis.com/css?family=Inter:400,500,600,700&display=swap';

export default class Document extends NextDocument {
  render() {
    globalStyles();

    return (
      <Html lang="en">
        <Head>
          <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />

          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link href={INTER_FONT} rel="preload" as="style" />
          <link href={INTER_FONT} rel="stylesheet" media="all" />
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
