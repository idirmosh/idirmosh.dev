import React from 'react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import { getCssText } from 'stitches.config';

const SSP_FONT =
  'https://fonts.googleapis.com/css?family=Source+Sans+Pro:wght@400;600;700&display=swap';

const FIRA_MONO = 'https://fonts.googleapis.com/css?family=Fira+Mono&display=swap';

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />

          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link href={SSP_FONT} rel="preload" as="style" />
          <link href={SSP_FONT} rel="stylesheet" media="all" />
          <link href={FIRA_MONO} rel="preload" as="style" />
          <link href={FIRA_MONO} rel="stylesheet" media="all" />
          <noscript>
            <link href={SSP_FONT} rel="stylesheet" />
            <link href={FIRA_MONO} rel="stylesheet" />
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
