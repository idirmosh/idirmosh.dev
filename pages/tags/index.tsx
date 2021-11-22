import type { GetStaticProps, NextPage } from 'next';
import * as styles from '@components/MDXComponents/styles';
import { allPosts } from '.contentlayer/data';
import type { Post } from '.contentlayer/types';
import { filterTags, keyGen, randGen, reduceTags } from '@lib/helpers';
import { ITag, ITags } from 'global';
import { FC } from 'react';
import { css } from 'stitches.config';
import Link from 'next/link';

const cont = css({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  flexFlow: 'row wrap',
  gridColumnGap: '18px',
  gridRowGap: '18px',
});

const TagsPage: NextPage<ITags> = ({ tags }) => {
  return (
    <div className={styles.container({})}>
      <div className={styles.box({ my: '$5' })}>
        <h1>Tags</h1>
        <div className={cont()}>
          {tags.map((tag) => (
            <TagCard key={keyGen(tag)} tag={tag} />
          ))}
        </div>
      </div>
    </div>
  );
};

const styules = css({
  padding: '18px',
  borderRadius: '6px',
  transition: 'all .2s',
  overflow: 'hidden',
  backgroundColor: '$neutral6',
  '&:hover': {
    backgroundColor: '$neutral7',
    boxShadow: '0 1px 2px -1px rgb(0 0 0 / 20%), 0 1px 9px 0 rgb(0 0 0 / 14%)',
  },
  a: {
    textDecoration: 'none',
    color: '$neutral0',
  },
  h3: {
    fontSize: '19px',
    textTransform: 'capitalize',
    lineHeight: '24px',
    marginTop: '9px',
  },
  p: {
    fontSize: '14px',
    lineHeight: '20px',
    marginTop: '6px',
    color: '$neutral1',
  },
});

const TagCard = ({ tag }) => {
  return (
    <article className={styules()}>
      <Link href="/tags/[tag]" as={`/tags/${tag}`}>
        <a>
          <h3>{tag}</h3>
          <p>{`Latest updates, tutorials, and news about ${tag}.`}</p>
        </a>
      </Link>
    </article>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const tags = allPosts.reduce(reduceTags, []).filter(filterTags);
  return { props: { tags } };
};

export default TagsPage;
