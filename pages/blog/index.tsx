import type { GetStaticProps, NextPage } from 'next';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import { allPosts } from '.contentlayer/data';
import { postMetaFilter, subscribe } from '@lib/helpers';
import { IPageProps, IView } from 'global';
import BlogCard from '@components/BlogCard';
import BlogListWrapper from '@components/common/BlogListWrapper';
import Layout from '@components/Layout';

const Blog: NextPage<IPageProps> = ({ posts }) => {
  const [slugs, setSlugs] = useState(null);

  useEffect(() => {
    let isSubscribed = true;
    if (isSubscribed) subscribe(setSlugs, 'http://localhost:3000/api/views');
    return () => {
      isSubscribed = false;
    };
  }, []);

  return (
    <Layout>
      <Head>
        <title>Blog</title>
      </Head>

      <BlogListWrapper>
        {posts &&
          posts.map((post) => (
            <BlogCard viewProp={slugs && slugs[post.slug]} key={post.slug} post={post} />
          ))}
      </BlogListWrapper>

      {/* 
      <h1>{frontmatter.title}</h1>
      <Component /> */}
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = allPosts.map(postMetaFilter);

  return { props: { posts } };
};

export default Blog;
