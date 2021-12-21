import { text } from '@styles/typography';
import React from 'react';

import { css } from 'stitches.config';
import { flexRow } from '@styles/common';
import { CopyURL, Facebook, Twitter } from './icons';

function BlogPostShare() {
  const share = css({
    justifyContent: 'space-around',
    cursor: 'pointer',
    borderRadius: '9px',
    color: '$neutral7',
    padding: '8px',
    backgroundColor: '$neutral6',
    marginRight: '8px',
    transition: 'all .2s ease',
    svg: {
      fill: '$neutral2',
    },
    '&:hover': {
      backgroundColor: '$neutral5',
    },
    '&:last-of-type': {
      margin: '0',
      padding: '8px 12px',
      svg: {
        marginRight: '4px',
      },
    },
  });
  return (
    <div className={flexRow()} title="Retweet" aria-label="Retweet">
      <span className={share(flexRow())}>
        <Twitter width="16px" />
      </span>
      <span className={share(flexRow())} title="Share on Facebook" aria-label="Share on Facebook">
        <Facebook width="16px" />
      </span>
      <span className={share(flexRow())} title="Copy Post URL" aria-label="Copy Post URL">
        <CopyURL width="16px" />
        <p className={text({ type: 'small', css: { margin: '0' } })}>Copy URL</p>
      </span>
    </div>
  );
}

export default BlogPostShare;
