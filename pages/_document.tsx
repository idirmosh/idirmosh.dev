import React from 'react';
import NextDocument, { Html, Main, NextScript, Head } from 'next/document';
import { getCssText } from 'stitches.config';

const INTER_FONT = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"';

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />

          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link href={INTER_FONT} rel="preload" as="font" />
          {/* <link href={INTER_FONT} rel="stylesheet" media="all" /> */}

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
