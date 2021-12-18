import type { GetStaticProps, NextPage } from 'next';
import { useEffect, useState } from 'react';
import { allPosts } from '.contentlayer/data';
import { filterTags, postMetaFilter, reduceTags, subscribe } from '@lib/helpers';
import { IPageProps, IView } from 'global';
import BlogCardNew from '@components/BlogCardNew';
import BlogListWrapper from '@components/common/BlogListWrapper';
import Layout from '@components/Layout';
import { box, flexRow, linkReset, singlePostWrapper, wrapper } from '@styles/common';
import Link from '@components/common/Link';
import { heading, text } from '@styles/typography';
import { input } from '@components/MDXComponents/styles';
import Head from '@components/Head';
import { NAME } from '@lib/constants';

const Blog: NextPage<IPageProps> = ({ posts, tagsCount }) => {
  const [slugs, setSlugs] = useState(null);
  console.log(tagsCount);
  useEffect(() => {
    let isSubscribed = true;
    if (isSubscribed) subscribe(setSlugs, 'http://localhost:3000/api/views');
    return () => {
      isSubscribed = false;
    };
  }, []);

  return (
    <Layout>
      <Head
        title={`The ${NAME}'s Blog`}
        description="I write about JavaScript, TypeScript, React, and share the things I've learned."
      />
      <div
        className={flexRow(
          singlePostWrapper({
            css: {
              justifyContent: 'space-between',
              padding: '24px 16px',
              margin: '2rem auto',
            },
          })
        )}
      >
        <h5 className={heading({ type: 'h3', css: { margin: '0' } })}>Latest Articles</h5>
        <Link href="/tags" className={text({ type: 'link', css: { margin: '0' } })}>
          See all topics ({tagsCount})
        </Link>
      </div>

      <div className={singlePostWrapper()}>
        {/* <div>
          <input
            className={input({
              css: {
                border: 'none',
                padding: '1.2rem',
                width: '100%',
                borderRadius: '999px',
                boxShadow: '0 0 0 1px $colors$neutral5',
                color: '$neutral3',
                transition: '.2s box-shadow',
                '&::placeholder': {
                  color: '$neutral5',
                },
                '&:focus': {
                  boxShadow: '0 0 0 1px $colors$brand_main',
                },
              },
            })}
            type="search"
            placeholder="Search articles"
          />
        </div> */}
        {posts && posts.map((post) => <BlogCardNew key={post.slug} post={post} />)}
      </div>

      {/* 
      <h1>{frontmatter.title}</h1>
      <Component /> */}
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = allPosts.map(postMetaFilter);
  const tags = allPosts.reduce(reduceTags, []).filter(filterTags);

  return { props: { posts, tagsCount: tags.length } };
};

export default Blog;
