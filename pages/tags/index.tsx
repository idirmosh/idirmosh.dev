import type { GetStaticProps, NextPage } from 'next';
import { allPosts } from '.contentlayer/data';
import type { Post } from '.contentlayer/types';
import { filterTags, keyGen, randGen, reduceTags } from '@lib/helpers';
import { ITag, ITags } from 'global';
import { FC } from 'react';
import { css } from 'stitches.config';
import Layout from '@components/Layout';
import { box, blogWrapper, Grid } from '@styles/common';
import Link from '@components/common/Link';
import { heading, text } from '@styles/typography';
import Head from '@components/Head';
import BlogListHeader from '@components/common/BlogListHeader';

const TagsPage: NextPage<ITags> = ({ tags }) => {
  const container = css(Grid, {
    gridAutoColumns: 'auto !important',
    gridTemplateColumns: '1fr !important',
    gridRowGap: '$3',
    gridColumnGap: '$3',
    '@mobile': {
      gridTemplateColumns: '1fr 1fr !important',
    },
  });
  return (
    <Layout>
      <Head title="Tags" description="Latest articles about web development." />
      <div className={blogWrapper()}>
        <BlogListHeader title="Topics" />
        <div className={container()}>
          {tags.map((tag) => (
            <TagCard key={keyGen(tag)} tag={tag} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

const TagCard = ({ tag }) => {
  const card = css({
    padding: '$3 0',
    '&:hover': {
      boxShadow: '0 2px 2px -2px $colors$neutral4',
    },
  });
  const container = css({
    display: 'flex',
    alignItems: 'center',
  });
  const circle = css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    minWidth: '2.4rem',
    height: '2.4rem',
    backgroundColor: '$neutral6',
    borderRadius: '999px',
    fontSize: '1.2rem',
    fontWeight: '600',
    textTransform: 'uppercase',
    color: '$neutral4',
  });
  return (
    <article className={card()}>
      <Link
        href={`/tags/${tag}`}
        className={box({ css: { textDecoration: 'none', color: '$neutral0' } })}
      >
        <div className={container()}>
          <div className={circle()}>#</div>
          <span className={box({ css: { marginLeft: '1rem' } })}>
            <h2
              className={heading({ type: 'h4', css: { textTransform: 'capitalize', margin: '0' } })}
            >
              {tag}
            </h2>
            <p
              className={text({ type: 'small', css: { margin: '2px 0 0 0' } })}
            >{`Latest updates, tutorials, and news about ${tag}.`}</p>
          </span>
        </div>
      </Link>
    </article>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const tags = allPosts.reduce(reduceTags, []).filter(filterTags);

  return { props: { tags } };
};

export default TagsPage;
