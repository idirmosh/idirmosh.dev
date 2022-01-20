import { text } from '@styles/typography';
import { format, parseISO } from 'date-fns';
import React, { FC } from 'react';

const PostMeta: FC<{ date: string; readTime: string; [x: string]: any }> = ({
  date,
  readTime,
  ...rest
}) => {
  return (
    <div {...rest}>
      <time className={text({ type: 'small' })}>{format(parseISO(date), 'MMM dd, yyyy')}</time>
      <span className={text({ type: 'small' })}>{readTime}</span>
    </div>
  );
};

export default PostMeta;
