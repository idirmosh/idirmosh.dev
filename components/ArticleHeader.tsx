import { heading, text } from '@styles/typography';
import React from 'react';
import Image from 'next/image';
import { CopyURL, Facebook, LeftArrow, Twitter } from './common/icons';
import { css } from 'stitches.config';
import { box, flexColumn, flexRow, meta } from '@styles/common';
import Link from './common/Link';
import PostMeta from './common/PostMeta';
import Head from './Head';
import { NAME } from '@lib/constants';
function ArticleHeader({ post }) {
  const header = css({
    margin: '2rem auto',
  });
  const back = css({
    textDecoration: 'none',
    cursor: 'pointer',
    transition: 'all .2s ease',
    fontWeight: '600',
    svg: {
      //  display: 'inline-block',
      fill: '$neutral2',
      marginRight: '8px',
    },
    '&:hover': {
      //  backgroundColor: '$neutral5',
    },
  });
  const metaWrapper = css({
    justifyContent: 'space-between',
    padding: '.5rem 0 1.7rem 0',
  });
  const social = css({
    justifyContent: 'space-around',
    cursor: 'pointer',
    borderRadius: '9px',
    color: '$neutral7',
    padding: '8px',
    backgroundColor: '$neutral6',
    marginRight: '8px',
    transition: 'all .2s ease',
    svg: {
      fill: '$neutral2',
    },
    '&:hover': {
      backgroundColor: '$neutral5',
    },
    '&:last-of-type': {
      margin: '0',
      padding: '8px 12px',
      svg: {
        marginRight: '4px',
      },
    },
  });

  const preview = css({
    display: 'flex',
    borderRadius: '6px',
    border: '1px solid $neutral5 !important',
    // margin: '1rem 0 !important',
  });
  const avatar = css({
    width: '36px',
    height: '36px',
    marginRight: '8px',

    img: {
      display: 'block',
      boxShadow: '0px 0px 0px 1px $colors$neutral4',
      width: '100%',
      height: 'auto',
      borderRadius: '9999px',
    },
  });

  return (
    <header className={header()}>
      <Head
        title={`${post.title} - The ${NAME}'s Blog`}
        description={post.summary}
        image={post.image}
      />
      <Link href="/blog" className={back()}>
        <LeftArrow width="20px" />
        <p className={text({ css: { margin: '0', display: 'inline-block', lineHeight: '1' } })}>
          Back to Blog
        </p>
      </Link>
      <h1 className={heading({ type: 'h1' })}> {post.title} </h1>
      <div className={metaWrapper(flexRow())}>
        <div className={flexRow({ css: { alignItems: 'center' } })}>
          <Link className={flexRow(avatar())} href="/about">
            <img
              src="https://pbs.twimg.com/profile_images/1374070746817908740/mIfVlbBb_400x400.jpg"
              alt="sads"
            />
          </Link>
          <div className={flexColumn({})}>
            <Link
              className={heading({
                type: 'h5',
                css: {
                  color: '$neutral1',
                  textDecoration: 'none',
                },
              })}
              href="/about"
            >
              Idir Hamouch
            </Link>
            {/* <time className={text({ type: 'small', css: { margin: '0', color: '$neutral3' } })}>
              May 28, 2014 • {post.readingTime.text}
            </time> */}
            <PostMeta
              className={meta({})}
              date={post.publishedAt}
              readTime={post.readingTime.text}
            />
          </div>
        </div>
        <div className={flexRow()} title="Retweet" aria-label="Retweet">
          <span className={social(flexRow())}>
            <Twitter width="16px" />
          </span>
          <span
            className={social(flexRow())}
            title="Share on Facebook"
            aria-label="Share on Facebook"
          >
            <Facebook width="16px" />
          </span>
          <span className={social(flexRow())} title="Copy Post URL" aria-label="Copy Post URL">
            <CopyURL width="16px" />
            <p
              className={text({
                type: 'small',
                css: {
                  margin: 0,
                },
              })}
            >
              Copy URL
            </p>
          </span>
        </div>
      </div>
      <p className={text({ css: { fontSize: '1.125rem', marginBottom: '1.7rem' } })}>
        {post.summary}
      </p>
      <Image
        className={preview()}
        width={768}
        height={475}
        layout="responsive"
        objectFit="cover"
        src={post.image}
      />
    </header>
  );
}
export default ArticleHeader;
