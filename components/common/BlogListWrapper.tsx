import { BLOG_CARD_GAP, BLOG_CARD_WIDTH } from '@lib/constants';
import { wrapper } from '@styles/common';
import { FC, ReactNode } from 'react';
import { css } from 'stitches.config';

const BlogListWrapper: FC<ReactNode> = ({ children }) => {
  const grid = css({
    display: 'grid',
    gridTemplateColumns: `repeat(auto-fit, minmax(${BLOG_CARD_WIDTH}px, 1fr))`,
    gridGap: `${BLOG_CARD_GAP}px`,
  });
  return <div className={grid(wrapper())}>{children}</div>;
};

export default BlogListWrapper;
