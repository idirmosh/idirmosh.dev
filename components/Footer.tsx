import { wrapper } from '@styles/common';
import { text } from '@styles/typography';
import React from 'react';
import { css } from 'stitches.config';
import Link from './common/Link';

function Footer() {
  const footer = css({
    padding: '2rem 0',
  });
  const paragraph = css({
    margin: '0 !important',
    fontWeight: '500',
  });
  return (
    <footer className={footer()}>
      <div className={wrapper()}>
        <div>
          <div></div>
          <p className={paragraph(text({ type: 'small' }))}>
            All rights reserved © Idir Hamouch 2021.
          </p>
        </div>
        <p className={paragraph(text({ type: 'small' }))}>
          Find out the <Link href="/blog/tech-stach">Technology Stack</Link> of my website.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
