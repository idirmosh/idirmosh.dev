import { ReactElement } from 'react';
import type { GetStaticProps, GetStaticPaths, NextPage } from 'next';
import { Head, BlogCard, Layout } from 'components';
import { IParams } from 'global';
import { blogWrapper } from '@styles/common';
import { css } from 'stitches.config';
import { info } from '.contentlayer/data';
import { allPosts } from '.contentlayer/data';
import { capitalize, filterTags, keyGen, reduceTags, sizeLogger } from '@lib/helpers';
import { Info, Post } from '.contentlayer/types';

type Props = {
  posts: Post[];
  tag: string;
  info: Info;
};

const SingleTopic: NextPage<Props> = ({ posts, tag, info }): ReactElement => {
  const { name, title, menu } = info;

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
  return { props: { posts, tag, info } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const tags = allPosts.reduce(reduceTags, []).filter(filterTags) as string[];

  return {
    paths: tags.map((tag) => ({ params: { tag } })),
    fallback: false,
  };
};

// Styles
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

export default SingleTopic;
