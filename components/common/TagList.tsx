import React from 'react';
import { css } from 'stitches.config';
import Tag from './Tag';

function TagList({ tags }) {
  return (
    <div className={tagListStyles()}>
      {tags && tags.map((tag) => <Tag key={tag + Math.random()} tag={tag} />)}
    </div>
  );
}

export const tagListStyles = css({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '0.5rem',
  justifyContent: 'flex-start',
  alignItems: 'center',
});

export default TagList;
