import { text } from '@styles/typography';
import React, { FC } from 'react';
import Link from 'next/link';
import { css } from 'stitches.config';

function Tag({ tag }: { tag: string }) {
  const styles = css({
    display: 'block',
    appearance: 'none',
    cursor: 'pointer',
    verticalAlign: 'middle',
    backgroundColor: 'transparent',
    textDecoration: 'none',
    lineHeight: '1',
    padding: '0.3rem 0.6rem',
    textTransform: 'capitalize',
    borderRadius: '2em',
    boxShadow: '0px 0px 0px 1px $colors$neutral4',
    transition: 'all .3s',
    '&:hover': {
      backgroundColor: '$brand_main',
      color: '$white',
      boxShadow: 'none',
    },
  });
  return (
    <Link href={`/tags/${tag}`}>
      <a href={`/tags/${tag}`} className={styles(text({ type: 'small' }))}>
        {tag}
      </a>
    </Link>
  );
}

export default Tag;
