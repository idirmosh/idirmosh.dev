import { meta } from '@styles/common';
import { heading, text } from '@styles/typography';
import { format, parseISO } from 'date-fns';
import React from 'react';
import { css } from 'stitches.config';
import Applause from './common/Applause';
import TagList from './common/TagList';
import PostMeta from './common/PostMeta';

function BlogCard({ post, viewProp }) {
  console.log(post);
  return (
    <article className={cardWrapper()}>
      <a href="/" className={cardMedia()}>
        <img src={post.image} alt="none" />
      </a>

      <div className={cardContent()}>
        <PostMeta date={post.publishedAt} readTime={post.readingTime.text} />
        <h2 className={heading({ type: 'h3', css: { margin: '0.9rem 0 0 0' } })}>{post.title}</h2>
        <p className={text({ type: 'small', css: { margin: '0.9rem 0 0 0' } })}>{post.summary}</p>
      </div>
      <div className={cardFooter()}>
        <TagList tags={post.tags} />
        <Applause />
      </div>
    </article>
  );
}

export const cardWrapper = css({
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'column',
  minWidth: '342px',
  height: 'auto',
  margin: '4px',
  borderRadius: '10px',
  overflow: 'hidden',
  border: '1px solid $neutral4',
});

export const cardMedia = css({
  width: '374px',
  //height: '170px',
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
