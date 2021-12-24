import React from 'react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import { getCssText } from 'stitches.config';

const INTER_FONT = 'https://fonts.googleapis.com/css?family=Inter:400,700&display=optional';
const FIRA_FONT = 'https://fonts.googleapis.com/css?family=Fira+Mono&display=optional';

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />

          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link href={INTER_FONT} rel="preload" as="style" />
          <link href={INTER_FONT} rel="stylesheet" media="all" />

          <link href={FIRA_FONT} rel="preload" as="style" />
          <link href={FIRA_FONT} rel="stylesheet" media="all" />
          <noscript>
            <link href={INTER_FONT} rel="stylesheet" />
            <link href={FIRA_FONT} rel="stylesheet" />
          </noscript>
        </Head>
        <body>
          <div id="mobile-menu" />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
