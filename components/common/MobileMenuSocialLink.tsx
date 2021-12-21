import { text } from '@styles/typography';
import React from 'react';
import { css } from 'stitches.config';
import Link from './Link';

function MobileMenuSocialLink({ href, textL }) {
  const link = css({
    fontSize: '1rem',
    marginBottom: '$3',
    '&:after': {
      bottom: '$1 !important',
    },
  });
  return (
    <Link href={href} className={link(text({ type: 'external-link' }))}>
      {textL}
    </Link>
  );
}

export default MobileMenuSocialLink;
