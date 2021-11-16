import Entry from '@components/common/Entry';
import Views from '@components/common/Views';
import { anchor, box, line, wrapper } from '@styles/common';
import { heading, text } from '@styles/typography';
import { parseISO, format } from 'date-fns';
import Link from 'next/link';
import { css } from 'stitches.config';

const PostCard = ({ post, viewProp }) => {
  return (
    <div className={box({ css: { maxWidth: '786px', margin: '0 auto' } })}>
      <span className={line()}></span>
      <div className={wrapper({ css: { margin: '0 auto' } })}>
        <Link href={`/blog/${post.slug}`}>
          <a className={anchor()}>
            <Entry date={post.publishedAt} readingTime={post.readingTime} />
            <h1 className={heading({ type: 'h1', css: { marginTop: '1rem' } })}>{post.title}</h1>
            <p className={text({ type: 'body', css: { marginBottom: '1rem' } })}>{post.summary}</p>
            <Views readingTime={post.readingTime} slug={post.slug} viewProp={viewProp} />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
