import { useEffect, useState } from 'react';
import type { GetStaticProps, NextPage, InferGetStaticPropsType } from 'next';
import { Head, Layout, BlogCard } from 'components';
import { BlogListTagsDisplay, BlogListHeader } from 'components/common';
import { ILayoutInfo, IPageProps } from 'global';
import { blogWrapper } from '@styles/common';
import { info } from '.contentlayer/data';
import { allPosts } from '.contentlayer/data';
import { filterTags, postMetaFilter, reduceTags, subscribe } from '@lib/helpers';

const Blog: NextPage<IPageProps & ILayoutInfo> = ({ posts, tags, name, title, menu }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [slugs, setSlugs] = useState(null);

  useEffect(() => {
    let isSubscribed = true;
    if (isSubscribed) subscribe(setSlugs, 'http://localhost:3000/api/views');
    return () => {
      isSubscribed = false;
    };
  }, []);

  return (
    <Layout values={{ menu, name, title }}>
      <Head
        title={`The ${name}'s Blog`}
        description="I write about JavaScript, TypeScript, React, and share the things I've learned."
      />

      <div className={blogWrapper()}>
        {/* //TODO: imporve Bellow */}
        <BlogListHeader title="Blog">
          <BlogListTagsDisplay tags={tags} />
        </BlogListHeader>
        {posts && posts.map((post) => <BlogCard key={post.slug} post={post} />)}
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
