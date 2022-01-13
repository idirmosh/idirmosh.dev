import { NAME, ORIGIN_URL } from '@lib/constants';
import NextHead from 'next/head';
import React, { FC, ReactNode } from 'react';
import { useRouter } from 'next/router';

function Head({
  title,
  description,
  image,
  date,
  children,
}: {
  title?: string;
  description?: string;
  image?: string;
  date?: string;
  children?: ReactNode;
}) {
  const router = useRouter();
  const asPath = ORIGIN_URL + router.asPath;
  const siteType = router.asPath === '/' ? 'website' : 'article';
  const isBlogPost = router.asPath.startsWith('/blog/');
  const siteImg = image ? ORIGIN_URL + image : ORIGIN_URL + '/avatar.png';
  return (
    <NextHead>
      <title>{title}</title>
      <meta content={description} name="description" />
      <meta name="robots" content="follow, index" />
      <link rel="canonical" href={asPath} />
      // openGraph
      <meta property="og:url" content={asPath} />
      <meta property="og:type" content={siteType} />
      <meta property="og:site_name" content={NAME} />
      <meta property="og:description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={siteImg} />
      // twitter
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@idirmosh" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={siteImg} />
      {isBlogPost && <meta property="article:published_time" content={date} />}
      <link
        href="/feed.xml"
        rel="alternate"
        type="application/atom+xml"
        data-title="idirmosh.dev feed"
      />
      {children}
    </NextHead>
  );
}

export default Head;
