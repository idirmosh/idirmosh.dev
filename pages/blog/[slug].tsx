import React, { ReactElement, useMemo } from 'react';
import type { NextPage, InferGetStaticPropsType } from 'next';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { ArticleHeader } from 'components';
import { components } from '@components/MDXComponents';
import { Layout } from 'components';
import { IParams } from 'global';
import { blogWrapper } from '@styles/common';
import { info } from '.contentlayer/data';
import { Post, Info } from '.contentlayer/types';
import { allPosts } from '.contentlayer/data';
import { PostContext } from 'context';

type Props = {
  post: Post;
  info: Info;
  slug: string;
};

const PostBySlug: NextPage<Props> = ({ post, info, slug }): ReactElement => {
  const { name, title, menu, footerLinks: links } = info;
  const Component = useMDXComponent(post.body.code);

  return (
    <Layout values={{ name, title, menu, links }}>
      <article className={blogWrapper()}>
        <PostContext.Provider value={{ slug, name }}>
          <ArticleHeader post={post} />
          <Component components={components as any} />
        </PostContext.Provider>
      </article>
    </Layout>
  );
};

export async function getStaticProps({ params: { slug } }: IParams) {
  const post = allPosts.find((post) => post.slug === slug);

  return { props: { post, info, slug } };
}

export async function getStaticPaths() {
  return {
    paths: allPosts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
}

export default PostBySlug;
