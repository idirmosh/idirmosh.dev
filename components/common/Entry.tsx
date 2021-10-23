import { entry, views } from '@styles/common';
import { text } from '@styles/typography';
import { parseISO, format } from 'date-fns';
import type { FC } from 'react';
import type { IEntry } from 'global';

const Entry: FC<IEntry> = ({ date, readingTime }) => {
  return (
    <div className={entry()}>
      <time className={text({ type: 'small' })}>{format(parseISO(date), 'MMM dd, yyyy')}</time>
      <span className={text({ type: 'small' })}>{readingTime.text}</span>
    </div>
  );
};

export default Entry;
