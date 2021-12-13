import { format } from 'date-fns';
import { box, flexRow, wrapper } from '@styles/common';
import { heading, text } from '@styles/typography';
import { css } from 'stitches.config';
import Link from '@components/common/Link';
import { parseISO } from 'date-fns';
import { keyGen } from '@lib/helpers';
import { Post } from '.contentlayer/types';

function FeaturedPosts({ posts }: { posts: Post[] }) {
  const container = css({
    display: 'grid',
    gridTemplateColumns: 'repeat(12,minmax(0,1fr))',
    gap: '32px',
    margin: '6rem auto',
    '@desktop': {
      margin: '10rem auto',
    },
  });
  const groupe = css({
    gridColumnStart: '1',
    gridColumnEnd: '13',
    '@desktop': {
      gridColumnStart: '1',
      gridColumnEnd: '7',
      // TODO: uncomment when there is two cards
      //'&:last-of-type': {
      //  gridColumnStart: '7',
      //  gridColumnEnd: '13',
      //},
    },
  });

  const link = css({
    justifyContent: 'space-between',
    textDecoration: 'none',
    padding: '0.8rem 0',
    borderBottom: '1px solid $neutral6',
  });

  const title = css({
    color: '$neutral2',
    maxWidth: '24ch',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    '@mobile': {
      maxWidth: '100%',
    },
  });
  return (
    <div className={wrapper(container())}>
      <div className={groupe()}>
        <h2 className={heading({ type: 'h2', css: { marginBottom: '24px', color: '$neutral1' } })}>
          Writing
        </h2>
        <div className={box({ css: { marginBottom: '1.5rem' } })}>
          {posts &&
            posts.map((post) => (
              <Link key={keyGen(post.slug)} href={`/blog/${post.slug}`} className={flexRow(link())}>
                <h6
                  className={title(
                    heading({ type: 'h4', css: { margin: '0', fontWeight: '500' } })
                  )}
                  title={post.title}
                >
                  {post.title}
                </h6>
                <time className={text({ type: 'small', css: { color: '$neutral3', margin: '0' } })}>
                  {format(parseISO(post.publishedAt), 'MMM dd, yyyy')}
                </time>
              </Link>
            ))}
        </div>
        <Link className={text({ type: 'link' })} href="/blog">
          View all posts
        </Link>
      </div>
    </div>
  );
}

export default FeaturedPosts;
