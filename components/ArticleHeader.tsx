import { heading, text } from '@styles/typography';
import React from 'react';
import Image from 'next/image';
import { CopyURL, Facebook, LeftArrow, Twitter } from './common/icons';
import { css } from 'stitches.config';
import { box, flexColumn, flexRow, linkReset, meta } from '@styles/common';
import Link from './common/Link';
import PostMeta from './common/PostMeta';
import Head from './Head';
import { AVATAR, NAME } from '@lib/constants';
import Applause from './common/Applause';
import BlogPostAvatar from './common/BlogPostAvatar';
import BlogPostShare from './common/BlogPostShare';
import BlogPostAction from './common/BlogPostAction';

function ArticleHeader({ post }) {
  const header = css({
    margin: '2rem auto',
  });

  const metaWrapper = css({
    justifyContent: 'space-between',
    margin: '0 0 $4 0',
  });

  const preview = css({
    display: 'flex',
    borderRadius: '6px',
    border: '1px solid $neutral5 !important',
    // margin: '1rem 0 !important',
  });

  return (
    <header className={header()}>
      <Head
        title={`${post.title} - The ${NAME}'s Blog`}
        description={post.summary}
        image={post.image}
      />

      <BlogPostAction />
      <h1 className={heading({ type: 'h1' })}>{post.title}</h1>
      <div className={metaWrapper(flexRow())}>
        <BlogPostAvatar post={post} />
        <BlogPostShare />
      </div>
      <p className={text({ css: { fontSize: '1.125rem', marginBottom: '$4' } })}>{post.summary}</p>
      <Image
        className={preview()}
        width={768}
        height={475}
        layout="responsive"
        objectFit="cover"
        src={post.image}
        alt={post.title}
        title={post.title}
      />
    </header>
  );
}

export default ArticleHeader;
