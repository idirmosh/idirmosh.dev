import type { GetStaticProps, NextPage } from 'next';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import { allPosts } from '.contentlayer/data';
import PostCard from '@components/Post/Card';
import { postMetaFilter, subscribe } from '@lib/helpers';
import { IPageProps, IView } from 'global';
import { box } from '@styles/common';
import BlogCard from '@components/BlogCard';

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
    <div>
      <Head>
        <title>Blog</title>
      </Head>
      <h1>hi blog</h1>
      <div
        className={box({
          css: {
            maxWidth: '768px',
            display: 'grid',
            'grid-template-columns': 'repeat(auto-fit, minmax(374px, 1fr))',
            gridGap: '0.8rem',
            margin: '0 auto',
          },
        })}
      >
        {slugs &&
          posts &&
          posts.map((post) => (
            // <PostCard viewProp={slugs && slugs[post.slug]} key={post.slug} post={post} />
            <BlogCard viewProp={slugs && slugs[post.slug]} key={post.slug} post={post} />
          ))}
      </div>

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
