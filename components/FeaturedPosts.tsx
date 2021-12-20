import { format } from 'date-fns';
import { box, flexRow, Grid, wrapper } from '@styles/common';
import { heading, text } from '@styles/typography';
import { css } from 'stitches.config';
import Link from '@components/common/Link';
import { parseISO } from 'date-fns';
import { keyGen } from '@lib/helpers';
import { Post } from '.contentlayer/types';

function FeaturedPosts({ posts }: { posts: Post[] }) {
  const groupe = css({
    gridColumn: '1/13',
    '@desktop': {
      gridColumn: '1/7',
      //TODO: uncomment when there is two cards
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
    maxWidth: '22ch',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    margin: '0 !important',
    '@mobile': {
      maxWidth: '100%',
    },
  });
  return (
    <Grid className={wrapper()}>
      <div className={groupe()}>
        <h2 className={heading({ type: 'h2' })}>Writing</h2>
        <div className={box({ css: { marginBottom: '$4' } })}>
          {posts &&
            posts.map((post) => (
              <Link key={keyGen(post.slug)} href={`/blog/${post.slug}`} className={flexRow(link())}>
                <h6 className={title(heading({ type: 'h4' }))} title={post.title}>
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
    </Grid>
  );
}

export default FeaturedPosts;
