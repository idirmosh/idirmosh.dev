import { Grid, linkReset, wrapper } from '@styles/common';
import { text } from '@styles/typography';
import React from 'react';
import { css } from 'stitches.config';
import { Github, Linkedin, Twitter } from './common/icons';
import Link from './common/Link';
import FooterCard from './FooterCard';

function Footer() {
  const footer = css({
    borderTop: '1px solid $neutral6',
  });
  const paragraph = css({
    color: '$neutral3',
    margin: '0 !important',
    fontWeight: '500',
  });

  const footerLink = css(text, {
    color: '$neutral3',
    marginBottom: '$3 !important',
    fontSize: '1rem',
    lineHeight: '1.5',
    transition: 'color .3s ease',
    '&:hover': {
      color: '$neutral1',
    },
  });
  return (
    <footer className={footer()}>
      <div className={wrapper()}>
        <Grid>
          <FooterCard title="Idir Hamouch" desc="Full Stack Javascript developer" pos="1/4">
            <Link href="/" title="Github">
              <Github width="32px" />
            </Link>
            <Link href="/" title="Twitter">
              <Twitter width="32px" />
            </Link>
            <Link href="/" title="Linkedin">
              <Linkedin width="32px" />
            </Link>
          </FooterCard>

          <FooterCard title="Contact" pos="10/12">
            <Link className={linkReset(footerLink())} href="/">
              Email
            </Link>
          </FooterCard>

          <FooterCard pos="12/13" title="Links">
            <Link className={linkReset(footerLink())} title="RSS Feed" href="/feed.xml">
              RSS
            </Link>
            <Link className={linkReset(footerLink())} title="Sitemap" href="/sitemap.xml">
              Sitemap
            </Link>
            <Link
              className={linkReset(footerLink())}
              title="Technology Stack of this website"
              href="/blog/tech-stach"
            >
              Tech Stack
            </Link>
          </FooterCard>
        </Grid>

        <p className={paragraph(text({ type: 'small' }))}>
          All rights reserved © Idir Hamouch 2021.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
