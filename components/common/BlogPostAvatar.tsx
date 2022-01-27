import React from 'react';
import Image from 'next/image';
import { PostMeta, Link } from 'components/common';
import { heading } from '@styles/typography';
import { css } from 'stitches.config';
import { flexColumn, flexRow, linkReset, meta } from '@styles/common';
import { AVATAR, NAME } from '@lib/constants';

type Props = {
  date: string;
  readTime: string;
};

function BlogPostAvatar({ date, readTime }: Props): React.ReactElement {
  return (
    <div className={flexRow({ css: { alignItems: 'center' } })}>
      <Link className={flexRow({ css: { marginRight: '$2' } })} href="/about">
        <Image className={avatar()} width={32} height={32} src={AVATAR} alt={NAME} />
      </Link>
      <div className={flexColumn({})}>
        <Link className={linkReset(heading({ type: 'h5' }))} href="/about">
          {NAME}
        </Link>
        <PostMeta className={meta({})} date={date} readTime={readTime} />
      </div>
    </div>
  );
}

// Styles
const avatar = css({
  width: '$4',
  height: '$4',
  marginRight: '$2',
  borderRadius: '9999px',
  boxShadow: '0px 0px 0px 1px $colors$neutral4',
});
export default BlogPostAvatar;
