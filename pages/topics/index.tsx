import type { GetStaticProps, NextPage } from 'next';
import { allPosts } from '.contentlayer/data';
import { filterTags, keyGen, reduceTags } from '@lib/helpers';
import { ILayoutInfo, ITags } from 'global';
import { css } from 'stitches.config';
import Layout from 'components/Layout';
import { blogWrapper, Grid } from '@styles/common';
import Head from 'components/Head';
import BlogListHeader from 'components/common/BlogListHeader';
import { info } from '.contentlayer/data';
import TagCard from 'components/common/TagCard';

const Topics: NextPage<ITags & ILayoutInfo> = ({ tags, name, title, menu }) => {
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
    <Layout menu={menu} name={name} title={title}>
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
