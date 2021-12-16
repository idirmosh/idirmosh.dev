import type { GetStaticPropsContext } from 'next';
import { allPosts } from '.contentlayer/data';
import Head from 'next/head';
import Layout from '@components/Layout';
import { css } from 'stitches.config';
import { sortPosts } from '@lib/helpers';
import FeaturedPosts from '@components/FeaturedPosts';
import HomeEntry from '@components/HomeEntry';
import data from '../content/data/home';
import FeaturedWorks from '@components/FeaturedWorks';
import FreelanceCTA from '@components/FreelanceCTA';

const WrapperSpacer = () => {
  const spacer = css({
    display: 'block',
    width: '100%',
    height: '80px',
  });
  return <div className={spacer()}></div>;
};

const Home = ({ featuredPosts, about, socials, work }) => {
  return (
    <div>
      <Head>
        <title>Index</title>
      </Head>
      <Layout>
        <HomeEntry about={about} socials={socials} />
        <FeaturedPosts posts={featuredPosts} />
        <FeaturedWorks work={work} />
        <FreelanceCTA />
      </Layout>
    </div>
  );
};

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  const filtered = allPosts.sort(sortPosts).slice(0, 3);

  return {
    props: {
      featuredPosts: filtered,
      about: data.about,
      socials: data.socials,
      work: data.work,
    },
  };
};
// 2017-07-15
// 2017-07-15
// 2021-09-06

export default Home;
