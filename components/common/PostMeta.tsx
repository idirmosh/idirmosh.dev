import { meta } from '@styles/common';
import { text } from '@styles/typography';
import { format, parseISO } from 'date-fns';
import React from 'react';

function PostMeta({ date, readTime }) {
  return (
    <div className={meta()}>
      <time className={text({ type: 'small' })}>{format(parseISO(date), 'MMM dd, yyyy')}</time>
      <span className={text({ type: 'small' })}>{readTime}</span>
    </div>
  );
}

export default PostMeta;
