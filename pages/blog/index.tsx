import type { GetStaticPropsContext, NextPage } from 'next';
import * as React from 'react';
import fs, { readFileSync } from 'fs';
import path, { join } from 'path';
import Head from 'next/head';
import Link from 'next/link';
import { getPostsFrontMatter } from '@lib/bundle-mdx';

const Blog: NextPage = ({ posts }) => {
  // console.log(posts);
  return (
    <div>
      <Head>
        <title>Blog</title>
      </Head>
      <h1>hi blog</h1>
      {posts &&
        posts.map((post) => (
          <Link href={`/blog/${post.slug}`} key={post.slug}>
            <a>
              {post.title}
              <br></br>
            </a>
          </Link>
        ))}

      {/* 
      <h1>{frontmatter.title}</h1>
      <Component /> */}
    </div>
  );
};

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  const posts = await getPostsFrontMatter('posts');

  return { props: { posts } };
};

export default Blog;
