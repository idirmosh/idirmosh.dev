import React from 'react';
import { Applause, Link } from 'components/common';
import { flexRow, linkReset } from '@styles/common';
import { css } from 'stitches.config';

function BlogPostAction(): React.ReactElement {
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

// Styles
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

export default BlogPostAction;
