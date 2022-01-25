import { heading, text } from '@styles/typography';
import React, { ReactElement } from 'react';
import Image from 'next/image';
import { css } from 'stitches.config';
import { flexRow } from '@styles/common';
import Head from './Head';
import { NAME } from '@lib/constants';
import { BlogPostAction, BlogPostShare, BlogPostAvatar } from 'components/common';
import { Post } from '.contentlayer/types';

const FIRA_FONT = 'https://fonts.googleapis.com/css?family=Fira+Mono&display=swap';

function ArticleHeader({ post }: { post: Post }): ReactElement {
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
      >
        <link href={FIRA_FONT} rel="preload" as="style" />
        <link href={FIRA_FONT} rel="stylesheet" media="all" />
        <noscript>
          <link href={FIRA_FONT} rel="stylesheet" />
        </noscript>
      </Head>

      <BlogPostAction />
      <h1 className={heading({ type: 'h1' })}>{post.title}</h1>
      <div className={metaWrapper(flexRow())}>
        <BlogPostAvatar date={post.publishedAt} readTime={post.readingTime.text} />
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
