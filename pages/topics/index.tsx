// @ts-nocheck
import type { GetStaticProps, NextPage } from 'next';
import { Head, Layout } from 'components';
import { TagCard, BlogListHeader } from 'components/common';
import { css } from 'stitches.config';
import { blogWrapper, Grid } from '@styles/common';
import { allPosts } from '.contentlayer/data';
import { info } from '.contentlayer/data';
import { filterTags, keyGen, reduceTags } from '@lib/helpers';
import { ReactElement } from 'react';
type Props = {
  tags: Array<string>;
  info: Info;
};

const Topics: NextPage<Props> = ({ tags, info }): ReactElement => {
  const { name, title, menu } = info;

  return (
    <Layout values={{ menu, name, title }}>
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

// Styles
const container = css(Grid, {
  gridAutoColumns: 'auto !important',
  gridTemplateColumns: '1fr !important',
  gridRowGap: '$3',
  gridColumnGap: '$3',
  '@mobile': {
    gridTemplateColumns: '1fr 1fr !important',
  },
});

export const getStaticProps: GetStaticProps = async () => {
  const tags = allPosts.reduce(reduceTags, []).filter(filterTags);

  return { props: { tags, info } };
};

export default Topics;
