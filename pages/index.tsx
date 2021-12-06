import type { GetStaticPropsContext } from 'next';
import { allPosts } from '.contentlayer/data';
import Head from 'next/head';
import Layout from '@components/Layout';
import { css } from 'stitches.config';
import { sortPosts } from '@lib/helpers';
import FeaturedPosts from '@components/FeaturedPosts';
import HomeEntry from '@components/HomeEntry';
import { box, wrapper } from '@styles/common';
import { BLOG_CARD_GAP, MAIN_CARD_WIDTH } from '@lib/constants';
import Image from 'next/image';
import { heading, text } from '@styles/typography';
import Link from '@components/common/Link';

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
        <FeaturedWorks />
      </Layout>
    </div>
  );
};

function FeaturedWorks() {
  const container = css({
    display: 'grid',
    gridTemplateColumns: `repeat(1,minmax(0,1fr))`,
    gridGap: '1.5rem',

    '@mobile': {
      gridTemplateColumns: `repeat(2,minmax(0,1fr))`,
      gridGap: '2rem',
    },
    '@tablet': {
      gridTemplateColumns: `repeat(3,minmax(0,1fr))`,
      gridGap: '2.5rem',
    },
    '@desktop': {
      gridTemplateColumns: `repeat(4,minmax(0,1fr))`,
      gridGap: '3rem',
    },
  });

  return (
    <div className={box({ css: { margin: '10rem auto' } })}>
      <div className={wrapper()}>
        <h2 className={heading({ type: 'h2', css: { marginBottom: '24px', color: '$neutral1' } })}>
          Projects
        </h2>
      </div>

      <div className={wrapper(container())}>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
}

function ProjectCard() {
  const card = css({
    textDecoration: 'none',
    width: '100%',
    // minWidth: `${MAIN_CARD_WIDTH}px`,
  });
  const content = css({
    marginTop: '0.5rem',
    paddingRight: '1.6rem',
  });

  const title = css({
    display: 'inline-block',
    margin: '0 .25rem 0 0 !important',
    color: '$neutral1',
  });
  const desc = css({
    color: '$neutral3',
  });
  return (
    <Link href="#" className={card()}>
      <div>
        <Image
          width={MAIN_CARD_WIDTH - 40}
          height={280}
          layout="responsive"
          objectFit="cover"
          alt="sds"
          src="https://pbs.twimg.com/profile_images/1374070746817908740/mIfVlbBb_400x400.jpg"
        />
      </div>
      <div className={content()}>
        <span className={title(heading({ type: 'h4' }))}>99.co </span>
        <span className={desc(text({ type: 'medium' }))}>
          — A map-based property search engine that provides renters, buyers, and agents fast and
          efficient property search experience.
        </span>
      </div>
    </Link>
  );
}
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
