import type { GetStaticProps, GetStaticPaths, NextPage, InferGetStaticPropsType } from 'next';
import { Head, BlogCard, Layout } from 'components';
import { ILayoutInfo, IPageProps, IParams } from 'global';
import { blogWrapper } from '@styles/common';
import { css } from 'stitches.config';
import { info } from '.contentlayer/data';
import { allPosts } from '.contentlayer/data';
import { capitalize, filterTags, keyGen, reduceTags, sizeLogger } from '@lib/helpers';

const SingleTopic: NextPage<IPageProps & ILayoutInfo> = ({ posts, tag, name, title, menu }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const titleCss = css({
    fontSize: '2.4rem',
    lineHeight: '1.1',
    letterSpacing: '-.05em',
    margin: '1.25rem 0',
    textTransform: 'capitalize',
    '@mobile': {
      fontSize: '2.9rem',
      lineHeight: '1',
    },
    '@tablet': {
      fontSize: '3.5rem',
      lineHeight: '1',
    },
  });
  const container = css({ margin: '3.4rem 0' });
  return (
    <Layout values={{ menu, name, title }}>
      <Head
        title={`${capitalize(tag)} Tutorials`}
        description={`Latest ${capitalize(tag)} tutorials.`}
      />
      <div className={blogWrapper({})}>
        <div className={container()}>
          <h1 className={titleCss()}>{tag}</h1>
        </div>
        {posts && posts.map((post) => <BlogCard key={keyGen(post.slug)} post={post} />)}
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ params: { tag } }: IParams) => {
  const posts = allPosts
    .map(({ body, _raw, ...post }) => post.tags.includes(tag) && post)
    .filter((o) => o);
  const { name, title, menu } = info;
  return { props: { posts, tag, name, title, menu } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const tags = allPosts.reduce(reduceTags, []).filter(filterTags) as string[];

  return {
    paths: tags.map((tag) => ({ params: { tag } })),
    fallback: false,
  };
};

export default SingleTopic;
