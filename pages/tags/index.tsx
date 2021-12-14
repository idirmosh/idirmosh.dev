import type { GetStaticProps, NextPage } from 'next';
import * as styles from '@components/MDXComponents/styles';
import { allPosts } from '.contentlayer/data';
import type { Post } from '.contentlayer/types';
import { filterTags, keyGen, randGen, reduceTags } from '@lib/helpers';
import { ITag, ITags } from 'global';
import { FC } from 'react';
import { css } from 'stitches.config';
import Layout from '@components/Layout';
import { box, singlePostWrapper } from '@styles/common';
import Link from '@components/common/Link';
import { heading, text } from '@styles/typography';

const TagsPage: NextPage<ITags> = ({ tags }) => {
  const container = css({
    display: 'grid',
    gridAutoColumns: 'auto',
    gridTemplateColumns: '1fr',
    gridRowGap: '1rem',
    gridColumnGap: '1rem',
    '@mobile': {
      gridTemplateColumns: '1fr 1fr',
    },
  });
  const info = css({ margin: '2rem AUTO' });
  return (
    <Layout>
      <div className={singlePostWrapper()}>
        <div className={info()}>
          <h1>TAGS</h1>
        </div>
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
    padding: '1rem 0',
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
            <h4
              className={heading({ type: 'h4', css: { textTransform: 'capitalize', margin: '0' } })}
            >
              {tag}
            </h4>
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
