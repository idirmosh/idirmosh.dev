import { BLOG_CARD_GAP, BLOG_CARD_WIDTH } from '@lib/constants';
import { box, wrapper } from '@styles/common';
import React from 'react';

function BlogListWrapper(props) {
  return (
    <div
      className={box(
        wrapper({
          css: {
            display: 'grid',
            gridTemplateColumns: `repeat(auto-fit, minmax(${BLOG_CARD_WIDTH}px, 1fr))`,
            gridGap: `${BLOG_CARD_GAP}px`,
          },
        })
      )}
    >
      {props.children}
    </div>
  );
}

export default BlogListWrapper;
