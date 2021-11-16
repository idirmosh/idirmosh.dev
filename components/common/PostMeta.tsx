import { meta } from '@styles/common';
import { text } from '@styles/typography';
import { format, parseISO } from 'date-fns';
import React from 'react';

function PostMeta({ date, readTime }) {
  return (
    <div className={meta({ css: { margin: '1.8rem 0 0 0' } })}>
      <time className={text({ type: 'xSmall' })}>{format(parseISO(date), 'MMM dd, yyyy')}</time>
      <span className={text({ type: 'xSmall' })}>{readTime}</span>
    </div>
  );
}

export default PostMeta;
