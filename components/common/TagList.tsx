import React from 'react';
import { Tag } from 'components/common';
import { css } from 'stitches.config';

function TagList({ tags }: { tags: string[] }): React.ReactElement {
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
