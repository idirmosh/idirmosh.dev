import React from 'react';
import Image from 'next/image';
import { Link, PostMeta, TagList } from 'components/common';
import { box, flexRow, meta } from '@styles/common';
import { text } from '@styles/typography';
import { css } from 'stitches.config';
import { Post } from '.contentlayer/types';

function BlogCardNew({ post }: { post: Post }): React.ReactElement {
  const cardWrapper = css({
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    borderBottom: '1px solid $neutral6',
    paddingBottom: '$3',
    marginBottom: '$4',
  });
  const link = css({
    transition: 'textDecoration .3s ease',
    color: 'inherit',
    '&:not(:hover)': {
      textDecoration: 'none',
    },
  });

  const title = css({
    margin: '$3 0',
    fontSize: '1.25rem',
    marginBottom: '$1',
    lineHeight: '1.2',
    color: '$neutral0',
    '@tablet': {
      marginBottom: '$2',
    },
    '@desktop': {
      fontSize: '1.5rem',
    },
  });
  const summary = css({
    display: 'none',
    color: '$neutral2',
    '@tablet': {
      display: 'block',
    },
  });
  const footer = css({
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    margin: '$4 0 0 0',
  });

  const image = css({
    display: 'grid',
    minWidth: '94px',
    aspectRatio: '4 / 3',
    border: '1px solid $neutral4',
    borderRadius: '3px',
    '@tablet': {
      minWidth: '$6',
      height: '$6',
      aspectRatio: '1/1',
      borderRadius: '7px',
    },
    img: {
      borderRadius: '2px',
      '@tablet': {
        borderRadius: '6px',
      },
    },
  });
  return (
    <article className={flexRow(cardWrapper())}>
      <div className={box({ css: { padding: '0 $4 0 0' } })}>
        <PostMeta className={meta()} date={post.publishedAt} readTime={post.readingTime.text} />
        <h3 className={title()}>
          <Link href={`/blog/${post.slug}`} className={link()}>
            {post.title}
          </Link>
        </h3>
        <p className={summary(text({ css: { margin: '0' } }))}>{post.summary}</p>
        <div className={footer()}>
          <TagList tags={post.tags} />
        </div>
      </div>

      <Link href={`/blog/${post.slug}`} className={image()}>
        <Image
          src={post.image}
          width="100%"
          height="100%"
          layout="responsive"
          objectFit="cover"
          alt={post.title}
          title={post.title}
        />
      </Link>
    </article>
  );
}

export default BlogCardNew;
