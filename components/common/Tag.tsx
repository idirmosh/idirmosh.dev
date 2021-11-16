import { text } from '@styles/typography';
import React from 'react';
import Link from 'next/link';
import { css } from 'stitches.config';

function Tag({ tag }) {
  return (
    <Link href="#">
      <a href="/" className={tagStyles(text({ type: 'xSmall' }))}>
        {tag}
      </a>
    </Link>
  );
}

export const tagStyles = css({
  display: 'block',
  appearance: 'none',
  cursor: 'pointer',
  verticalAlign: 'middle',
  backgroundColor: 'transparent',
  textDecoration: 'none',
  lineHeight: '1',
  padding: '0.3rem 0.5rem',
  textTransform: 'capitalize',
  borderRadius: '2em',
  boxShadow: '0px 0px 0px 1px $colors$neutral4',
  transition: 'all .3s',
  '&:hover': {
    backgroundColor: '$brand_main',
    color: '$white',
    boxShadow: '0px',
  },
});

export default Tag;
