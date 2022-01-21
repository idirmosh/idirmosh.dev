import type { GetStaticProps, NextPage } from 'next';
import { useEffect, useState } from 'react';
import { allPosts } from '.contentlayer/data';
import { filterTags, postMetaFilter, reduceTags, subscribe } from '@lib/helpers';
import { ILayoutInfo, IPageProps } from 'global';
import BlogCardNew from 'components/BlogCard';
import Layout from 'components/Layout';
import { blogWrapper } from '@styles/common';
import { info } from '.contentlayer/data';

import Head from 'components/Head';

import BlogListHeader from 'components/common/BlogListHeader';
import BlogListTagsDisplay from 'components/common/BlogListTagsDisplay';

const Blog: NextPage<IPageProps & ILayoutInfo> = ({ posts, tags, name, title, menu }) => {
  const [slugs, setSlugs] = useState(null);

  useEffect(() => {
    let isSubscribed = true;
    if (isSubscribed) subscribe(setSlugs, 'http://localhost:3000/api/views');
    return () => {
      isSubscribed = false;
    };
  }, []);

  return (
    <Layout menu={menu} name={name} title={title}>
      <Head
        title={`The ${name}'s Blog`}
        description="I write about JavaScript, TypeScript, React, and share the things I've learned."
      />

      <div className={blogWrapper()}>
        {/* //TODO: imporve Bellow */}
        <BlogListHeader title="Blog">
          <BlogListTagsDisplay tags={tags} />
        </BlogListHeader>
        {posts && posts.map((post) => <BlogCardNew key={post.slug} post={post} />)}
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = allPosts.map(postMetaFilter);
  const tags = allPosts.reduce(reduceTags, []).filter(filterTags);
  const { name, title, menu } = info;

  return { props: { posts, tags, name, title, menu } };
};

export default Blog;
