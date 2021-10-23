import type { GetStaticProps, NextPage } from 'next';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import { allPosts } from '.contentlayer/data';
import PostCard from '@components/Post/Card';
import { postMetaFilter, subscribe } from '@lib/helpers';
import { IPageProps, IView } from 'global';
import { box } from '@styles/common';

const Blog: NextPage<IPageProps> = ({ posts }) => {
  const [slugs, setSlugs] = useState(null);
  //console.log(slugs);
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
      <div className={box({ css: {} })}>
        {slugs &&
          posts &&
          posts.map((post) => (
            <PostCard viewProp={slugs && slugs[post.slug]} key={post.slug} post={post} />
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
