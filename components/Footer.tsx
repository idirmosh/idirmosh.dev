import { flexRow, Grid, linkReset, wrapper } from '@styles/common';
import { text } from '@styles/typography';
import React from 'react';
import { css } from 'stitches.config';
import Link from './common/Link';

function Footer(): React.ReactElement {
  const footer = css({
    borderTop: '1px solid $neutral6',
  });
  const paragraph = css({
    color: '$neutral2',
    margin: '0 !important',
    fontWeight: '500',
  });

  const footerLink = css(text, {
    color: '$neutral2',
    marginBottom: '$3 !important',
    fontSize: '.89rem',
    lineHeight: '1',
    transition: 'color .3s ease',
    fontWeight: '700',
    marginRight: '$3',

    '&:hover': {
      color: '$neutral1',
    },
    '&:last-of-type': {
      marginRight: '0',
    },
  });
  return (
    <footer className={footer()}>
      <div className={wrapper({ css: { margin: '$5 auto $4 auto' } })}>
        <div className={flexRow({ css: { marginBottom: '$4' } })}>
          <Link className={linkReset(footerLink())} href="/">
            Home
          </Link>
          <Link className={linkReset(footerLink())} href="/blog">
            Blog
          </Link>
          <Link className={linkReset(footerLink())} href="/contact">
            Contact
          </Link>
          <Link className={linkReset(footerLink())} title="RSS Feed" href="/feed.xml">
            RSS
          </Link>
          <Link className={linkReset(footerLink())} title="Sitemap" href="/sitemap.xml">
            Sitemap
          </Link>
        </div>
        <div
          className={flexRow({
            css: {
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              flexDirection: 'column',
              '@mobile': { flexDirection: 'row' },
            },
          })}
        >
          <p className={paragraph(text({ type: 'medium', css: { color: '$neutral1' } }))}>
            Built with this{' '}
            <Link
              className={linkReset(footerLink({ css: { color: '$brand_main' } }))}
              title="TechStack"
              href="/tech-stack"
            >
              TechStack
            </Link>
          </p>
          <p className={paragraph(text({ type: 'small' }))}>
            All rights reserved © Idir Hamouch 2021.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
