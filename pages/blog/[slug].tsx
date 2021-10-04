import { getPostBySlug, getPosts } from '@lib/bundle-mdx';
import { useMemo } from 'react';
import { components } from '@components/MDXComponents';
import { getMDXComponent } from 'mdx-bundler/client';
import { container } from '@components/MDXComponents/container';
import { box } from '@components/MDXComponents/box';

export default function PostBySlug({ code, frontMatter }) {
  const Component = useMemo(() => getMDXComponent(code), [code]);

  // const Component = useMemo(() => getMDXComponent(code), [code]);
  // console.log(frontMatter);

  return (
    // <BlogLayout frontMatter={frontMatter}>
    //   <Component
    //     components={
    //       {
    //         ...components,
    //         StaticTweet,
    //       } as any
    //     }
    //   />
    // </BlogLayout>
    <div
      className={container({
        css: {
          mx: '$4',
          py: '$4',
          '@bp1': {
            mx: '$5',
            py: '$5',
          },
          '@bp2': {
            mx: '$6',
          },
        },
      })}
    >
      <div className={box({ my: '$5' })}>
        <Component components={components as any} />
      </div>
    </div>
  );
}

export async function getStaticProps({ params: { slug } }) {
  const post = await getPostBySlug('posts', slug);

  return { props: { ...post } };
}

export async function getStaticPaths() {
  const posts = await getPosts('posts');

  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.replace(/\.mdx/, ''),
      },
    })),

    fallback: false,
  };
}
