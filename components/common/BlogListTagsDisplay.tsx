import { capitalize, keyGen } from '@lib/helpers';
import { flexRow, linkReset } from '@styles/common';
import React from 'react';
import { css } from 'stitches.config';
import Link from './Link';

function BlogListTagsDisplay({ tags }) {
  const topics = css({});
  const seperator = css({
    display: 'inline-block',
    width: '1px',
    height: '$3',
    backgroundColor: '$neutral5',
    borderRadius: '999px',
    marginRight: '$3',
  });
  const topic = css({
    transition: 'all .3s',
    fontSize: '.8rem',
    lineHeight: '1',
    backgroundColor: '$neutral6',
    color: '$neutral3',
    padding: '$2 $3',
    borderRadius: '999px',
    marginRight: '$3',
    //position: 'relative',
    '&:last-of-type': {
      marginRight: '0',
    },
    '&:hover': {
      color: '$neutral2',
    },
  });
  return (
    <div className={flexRow()}>
      {tags.map((tag) => (
        <Link key={keyGen(tag)} href={`/tags/${tag}`} className={linkReset(topic())}>
          {capitalize(tag)}
        </Link>
      ))}
      <span className={seperator()}></span>
      <Link href="/tags" className={linkReset(topic({ css: { fontWeight: '700' } }))}>
        View All
      </Link>
    </div>
  );
}

export default BlogListTagsDisplay;
