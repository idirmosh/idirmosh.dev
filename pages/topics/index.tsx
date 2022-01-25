import type { GetStaticProps, NextPage, InferGetStaticPropsType } from 'next';
import { Head, Layout } from 'components';
import { TagCard, BlogListHeader } from 'components/common';
import { ILayoutInfo, ITags } from 'global';
import { css } from 'stitches.config';
import { blogWrapper, Grid } from '@styles/common';
import { allPosts } from '.contentlayer/data';
import { info } from '.contentlayer/data';
import { filterTags, keyGen, reduceTags } from '@lib/helpers';

const Topics: NextPage<ITags & ILayoutInfo> = ({ tags, name, title, menu }: InferGetStaticPropsType<typeof getStaticProps>) => {
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

export const getStaticProps: GetStaticProps = async () => {
  const tags = allPosts.reduce(reduceTags, []).filter(filterTags);
  const { name, title, menu } = info;

  return { props: { tags, name, title, menu } };
};

export default Topics;
