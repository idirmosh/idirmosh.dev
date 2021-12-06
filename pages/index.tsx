import type { GetStaticPropsContext } from 'next';
import { allPosts } from '.contentlayer/data';
import Head from 'next/head';
import Layout from '@components/Layout';
import { css } from 'stitches.config';
import { sortPosts } from '@lib/helpers';
import FeaturedPosts from '@components/FeaturedPosts';
import HomeEntry from '@components/HomeEntry';

const WrapperSpacer = () => {
  const spacer = css({
    display: 'block',
    width: '100%',
    height: '80px',
  });
  return <div className={spacer()}></div>;
};

const Home = ({ featuredPosts }) => {
  return (
    <div>
      <Head>
        <title>Index</title>
      </Head>
      <Layout>
        {/* <WrapperSpacer /> */}
        <HomeEntry />
        <FeaturedPosts posts={featuredPosts} />
      </Layout>
    </div>
  );
};

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  const filtered = allPosts.sort(sortPosts).slice(0, 3);

  return {
    props: {
      featuredPosts: filtered,
    },
  };
};
// 2017-07-15
// 2017-07-15
// 2021-09-06

export default Home;
