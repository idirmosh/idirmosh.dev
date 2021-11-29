import { heading, text } from '@styles/typography';
import React from 'react';
import { css } from 'stitches.config';
import Applause from './common/Applause';
import TagList from './common/TagList';
import PostMeta from './common/PostMeta';
import Link from '@components/common/Link';
import Image from 'next/image';
import { wrapper } from '@styles/common';
import { BLOG_CARD_WIDTH } from '@lib/constants';

function BlogCard({ post, viewProp = 'test' }) {
  console.log('props');
  return (
    <article className={cardWrapper()}>
      <Link href={`/blog/${post.slug}`} className={cardMedia()} aria-hidden="true">
        <Image
          src={post.image}
          width={374}
          height={374 / 1.6}
          layout="responsive"
          objectFit="cover"
          alt={post.title}
          title={post.title}
        />
      </Link>

      <div className={cardContent()}>
        <PostMeta date={post.publishedAt} readTime={post.readingTime.text} />
        <h2 className={heading({ type: 'h2' })}>
          <Link href={`/blog/${post.slug}`} className={titleLink()}>
            {post.title}
          </Link>
        </h2>
        <p className={text({ type: 'medium' })}>{post.summary}</p>
      </div>
      <div className={cardFooter()}>
        <TagList tags={post.tags} />
        <Applause />
      </div>
    </article>
  );
}

export const titleLink = css({
  transition: 'textDecoration .3s ease',
  color: '$neutral0',

  '&:not(:hover)': {
    textDecoration: 'none',
  },
});

export const cardWrapper = css({
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'column',
  minWidth: `${BLOG_CARD_WIDTH}px`,
  height: 'auto',
  borderRadius: '10px',
  overflow: 'hidden',
  border: '1px solid $neutral5',
  '&:hover': {
    backgroundColor: '$neutral6',
  },
});

export const cardMedia = css({
  width: '100%',
  overflow: 'hidden',
  img: {
    width: '100%',
    aspectRatio: '5/3',
    objectFit: 'cover',
    display: 'block',
    maxWidth: '100%',
    height: 'auto',
  },
});

export const cardContent = css({
  display: 'block',
  flex: 'auto',
  flexGrow: '1',
  flexShrink: '1',
  padding: '0 20px',
});

export const cardFooter = css({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  margin: '1.8rem 0 0 0',
  padding: '0 20px 20px 20px',
});

export default BlogCard;
