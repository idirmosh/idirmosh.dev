import type { GetStaticPropsContext, NextPage } from 'next';
import * as React from 'react';
import fs, { link } from 'fs';
import path from 'path';
import Head from 'next/head';
import Image from 'next/image';
import { box, flexRow, wrapper } from '@styles/common';
import Layout from '@components/Layout';
import { heading, text } from '@styles/typography';
import { css } from 'stitches.config';
import Link from '@components/common/Link';

const WrapperSpacer = () => {
  const spacer = css({
    display: 'block',
    width: '100%',
    height: '80px',
  });
  return <div className={spacer()}></div>;
};

const Home: NextPage = () => {
  const paragraph = css({
    color: '$neutral2',
    fontSize: '1rem !important',
    fontWeight: '500',
    letterSpacing: '-0.0207143em',
  });
  return (
    <div>
      <Head>
        <title>Index</title>
      </Head>
      <Layout>
        <WrapperSpacer />
        <HomeEntry />
        <Featured />
      </Layout>
    </div>
  );
};
function Featured() {
  const link = css({
    justifyContent: 'space-between',
    textDecoration: 'none',
    marginTop: '12px',
    paddingBottom: '4px',
    borderBottom: '1px solid $neutral6',
  });
  const groupe = css({
    minWidth: '364px',
    '@mobile': {
      minWidth: '100%',
    },
  });
  return (
    <div
      className={wrapper({
        css: {
          marginTop: '52px',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '32px',
        },
      })}
    >
      <div className={groupe()}>
        <h4 className={heading({ type: 'h3', css: { marginBottom: '24px', color: '$neutral1' } })}>
          Writting
        </h4>
        <div>
          <Link href="/" className={flexRow(link())}>
            <h6 className={heading({ type: 'h4', css: { color: '$neutral2' } })}>
              What new on Rocket Log Pro
            </h6>
            <time className={text({ type: 'small', css: { color: '$neutral3' } })}>
              Jan 29, 2021
            </time>
          </Link>
          <Link href="/" className={flexRow(link())}>
            <h6 className={heading({ type: 'h4', css: { color: '$neutral2' } })}>
              What new on Rocket Log Pro
            </h6>
            <time className={text({ type: 'small', css: { color: '$neutral3' } })}>
              Jan 29, 2021
            </time>
          </Link>
          <Link href="/" className={flexRow(link())}>
            <h6 className={heading({ type: 'h4', css: { color: '$neutral2' } })}>
              What new on Rocket Log Pro
            </h6>
            <time className={text({ type: 'small', css: { color: '$neutral3' } })}>
              Jan 29, 2021
            </time>
          </Link>
        </div>
      </div>
    </div>
  );
}
function HomeEntry() {
  const entry = css({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: '40px',

    '@mobile': {
      flexDirection: 'column-reverse',
      gap: '20px',
    },
  });
  const content = css({
    display: 'flex',
    flexDirection: 'column',
    paddingRight: '2rem',
    maxWidth: 'calc(100% - 190px)',
    '@mobile': {
      maxWidth: '100%',
      padding: '0',
    },
  });
  const avatar = css({
    display: 'block',
    borderRadius: '52px',
    width: '150px',
    height: '150px',
    gridColumnStar: '1',
    gridRowStart: '2',

    '@mobile': {
      width: '100px',
      height: '100px',
      borderRadius: '40px',
    },
    right: '0',
  });
  return (
    <div className={wrapper(entry())}>
      <div className={content()}>
        <h1
          className={heading({
            type: 'h1',
            css: {
              '@mobile': {
                marginBottom: '.5rem',
              },
            },
          })}
        >
          Idir Hamouch
        </h1>
        <p className={text()}>
          I’m a self-taught freelance full-stack developer based in Florida, USA.
        </p>
        <p className={text()}>
          I have multiple years of experience in the JavaScript ecosystem and have a blog where I
          write about technology, share the things I've learned, and ponder the future of the field.
        </p>
        <p className={text()}>
          I am passionate about building things for the web, writing clean & maintainable code, and
          keeping up with the newest technology trends while looking ahead to what’s on the horizon.
        </p>
      </div>
      <img
        className={avatar()}
        src="https://pbs.twimg.com/profile_images/1374070746817908740/mIfVlbBb_400x400.jpg"
      />
    </div>
  );
}

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  return {
    props: {},
  };
};

export default Home;
