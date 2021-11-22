import type { GetStaticPropsContext, NextPage } from 'next';
import * as React from 'react';
import fs from 'fs';
import path from 'path';
import Head from 'next/head';
import { wrapper } from '@styles/common';
import Layout from '@components/Layout';
import { heading, text } from '@styles/typography';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Index</title>
      </Head>
      <Layout>
        <div className={wrapper()}>
          <h1 className={heading({ type: 'h1', css: { marginBottom: '0' } })}>Idir Hamouch</h1>
          <h3
            className={heading({
              type: 'h3',
              css: { fontWeight: '400', margin: '1rem 0', letterSpacing: '0' },
            })}
          >
            Lorem Ipsum , only five centuries, simply dummy
          </h3>
          <p
            className={heading({
              type: 'h4',
              css: { fontWeight: '400', lineHeight: '1.5', letterSpacing: '0' },
            })}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          <p
            className={heading({
              type: 'h4',
              css: { fontWeight: '400', lineHeight: '1.5', letterSpacing: '0' },
            })}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          <p
            className={heading({
              type: 'h4',
              css: { fontWeight: '400', lineHeight: '1.5', letterSpacing: '0' },
            })}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </Layout>
    </div>
  );
};
export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  return {
    props: {},
  };
};

export default Home;
