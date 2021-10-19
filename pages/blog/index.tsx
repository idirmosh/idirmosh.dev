import type { GetStaticProps, NextPage } from 'next';
import * as React from 'react';
import Head from 'next/head';
import { allPosts } from '.contentlayer/data';
import PostCard from '@components/Post/Card';
import { postMetaFilter } from '@lib/helpers';
import { IPageProps } from 'global';

const Blog: NextPage<IPageProps> = ({ posts }) => {
  return (
    <div>
      <Head>
        <title>Blog</title>
      </Head>
      <h1>hi blog</h1>
      {posts && posts.map((post) => <PostCard key={post.slug} post={post} />)}

      {/* 
      <h1>{frontmatter.title}</h1>
      <Component /> */}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = allPosts.map(postMetaFilter);
  return { props: { posts } };
};

export default Blog;
