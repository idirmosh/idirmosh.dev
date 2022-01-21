import { flexRow, linkReset } from '@styles/common';
import React from 'react';
import { css } from 'stitches.config';
import Applause from './Applause';
import Link from './Link';

function BlogPostAction(): React.ReactElement {
  const wrap = css({
    margin: '$3 0',
    justifyContent: 'space-between',
    transition: 'opacity .15s',
    '&:hover': {
      opacity: '.9',
    },
  });
  const link = css({
    fontWeight: '700',
    color: '$neutral1',
    marginRight: '$2',
  });
  return (
    <div className={flexRow(wrap())}>
      <p>
        <Link href="/blog" className={linkReset(link())}>
          Blog
        </Link>
        for web developers.
      </p>
      <Applause />
    </div>
  );
}

export default BlogPostAction;
