import type { GetStaticPropsContext, NextPage } from 'next';
import * as React from 'react';
import fs from 'fs';
import path from 'path';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Index</title>
      </Head>
      {/* 
      <h1>{frontmatter.title}</h1>
      <Component /> */}
    </div>
  );
};
export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  return {
    props: {},
  };
};

export default Home;
