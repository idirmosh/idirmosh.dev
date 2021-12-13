import { heading, text } from '@styles/typography';
import React from 'react';
import { css } from 'stitches.config';
import Applause from './common/Applause';
import TagList from './common/TagList';
import PostMeta from './common/PostMeta';
import Link from '@components/common/Link';
import Image from 'next/image';
import { meta, wrapper } from '@styles/common';
import { MAIN_CARD_WIDTH } from '@lib/constants';

function BlogCardNew({ post }) {
  const cardWrapper = css({
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottom: '1px solid $neutral5',
    paddingBottom: '1rem',
    marginBottom: '2rem',
  });
  const link = css({
    transition: 'textDecoration .3s ease',
    color: 'inherit',
    fontSise: 'inherit',

    '&:not(:hover)': {
      textDecoration: 'none',
    },
  });

  const cardContent = css({
    padding: '0 2rem 0 0',
  });
  const title = css({
    margin: '0.5rem 0',
    fontSize: '1rem',
    marginBottom: '0.5rem',
    lineHeight: '1.25rem',

    '@tablet': {
      fontSize: '1.25rem',
      marginBottom: '0.5rem',
      lineHeight: '1.75rem',
    },
    '@desktop': {
      fontSize: '1.5rem',
      marginBottom: '.5rem',
      lineHeight: '1.75rem',
    },
  });
  const summary = css({
    display: 'none',
    '@tablet': {
      display: 'block',
    },
  });
  const footer = css({
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    margin: '1.4rem 0 0 0',
  });

  const image = css({
    display: 'grid',
    minWidth: '70px',
    aspectRatio: '4 / 3',
    border: '1px solid $neutral4',
    borderRadius: '3px',
    '@tablet': {
      minWidth: '144px',
      height: '144px',
      aspectRatio: '1/1',
      borderRadius: '7px',
    },
    img: {
      borderRadius: '6px',
    },
  });
  return (
    <article className={cardWrapper()}>
      <div className={cardContent()}>
        <PostMeta className={meta({})} date={post.publishedAt} readTime={post.readingTime.text} />
        <h2 className={title()}>
          <Link href={`/blog/${post.slug}`} className={link()}>
            {post.title}
          </Link>
        </h2>
        <p className={summary(text({ type: 'medium', css: { marginTop: '.5rem' } }))}>
          {post.summary}
        </p>
        <div className={footer()}>
          <TagList tags={post.tags} />
        </div>
      </div>

      <Link href={`/blog/${post.slug}`} className={image()} aria-hidden="true">
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
