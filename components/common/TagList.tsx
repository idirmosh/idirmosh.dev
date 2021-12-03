import React from 'react';
import { css } from 'stitches.config';
import Tag from './Tag';

function TagList({ tags }: { tags: string[] }) {
  const styles = css({
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
    justifyContent: 'flex-start',
    alignItems: 'center',
  });
  return (
    <div className={styles()} aria-label="tags for this post">
      {tags && tags.map((tag) => <Tag key={tag + Math.random()} tag={tag} />)}
    </div>
  );
}

export default TagList;
