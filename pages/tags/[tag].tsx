import type { GetStaticProps, GetStaticPaths, NextPage } from 'next';
import { allPosts } from '.contentlayer/data';
import { capitalize, filterTags, keyGen, reduceTags, sizeLogger } from '@lib/helpers';
import { IPageProps, IParams } from 'global';
import Layout from '@components/Layout';
import { blogWrapper } from '@styles/common';
import BlogCardNew from '@components/BlogCardNew';
import { css } from 'stitches.config';
import Head from '@components/Head';

const SingleTagPage: NextPage<IPageProps> = ({ posts, tag }) => {
  const title = css({
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
    <Layout>
      <Head
        title={`${capitalize(tag)} Tutorials`}
        description={`Latest ${capitalize(tag)} tutorials.`}
      />
      <div className={blogWrapper({})}>
        <div className={container()}>
          <h1 className={title()}>{tag}</h1>
        </div>
        {posts && posts.map((post) => <BlogCardNew key={keyGen(post.slug)} post={post} />)}
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ params: { tag } }: IParams) => {
  const posts = allPosts
    .map(({ body, _raw, ...post }) => post.tags.includes(tag) && post)
    .filter((o) => o);

  return { props: { posts, tag } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const tags = allPosts.reduce(reduceTags, []).filter(filterTags) as string[];

  return {
    paths: tags.map((tag) => ({ params: { tag } })),
    fallback: false,
  };
};

export default SingleTagPage;
