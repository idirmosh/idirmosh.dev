import { box, wrapper } from '@styles/common';
import { heading, text } from '@styles/typography';
import { css } from 'stitches.config';
import Image from 'next/image';
import Link from './common/Link';
import { link } from 'fs';

function HomeEntry() {
  const entry = css({
    display: 'grid',
    gridTemplateColumns: 'repeat(12,minmax(0,1fr))',
    gridTemplateRows: '1fr 72px',
    //gridTemplateRows: 'none',
    alignItems: 'center',
    margin: '6rem auto',
    '@desktop': {
      margin: '10rem auto',
    },
  });
  const content = css({
    gridColumn: '1/13',
    gridRow: '1',
    '@tablet': {
      gridColumn: '1/10',
    },
    '@desktop': {
      gridColumn: '1/10',
    },
  });
  const title = css({
    fontSize: '2.4rem',
    lineHeight: '1.1',
    letterSpacing: '-.05em',
    // fointWeight: '700',

    margin: '1.25rem 0',
    '@mobile': {
      fontSize: '2.9rem',
      lineHeight: '1',
    },
    '@tablet': {
      fontSize: '3.5rem',
      lineHeight: '1',
    },
  });
  const avatar = css({
    borderRadius: '999px',
  });
  const link = css({
    fontFamily: '$sans',
    cursor: 'pointer',
    fontWeight: '500',
    padding: '8px 30px 8px 16px',
    marginBottom: '0',
    marginRight: '8px',
    display: 'inline-block',
    color: '$neutral2',
    opacity: '1',
    transition: 'color 0.15s ease-in 0s',
    textDecoration: 'none',
    position: 'relative',
    '&:after': {
      content: '',
      position: 'absolute',
      bottom: '12px',
      width: '14px',
      height: '14px',
      marginLeft: '4px',
      '-webkit-mask':
        'url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI0IDI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9IiMwMDAwMDAiPjxyZWN0IGZpbGw9Im5vbmUiIGhlaWdodD0iMjQiIHdpZHRoPSIyNCIvPjxwYXRoIGQ9Ik05LDV2Mmg2LjU5TDQsMTguNTlMNS40MSwyMEwxNyw4LjQxVjE1aDJWNUg5eiIvPjwvc3ZnPg==) 50% 50% no-repeat',
      backgroundColor: 'currentcolor',
    },
    '&:hover': {
      color: '$brand_main',
    },
  });
  return (
    <div className={wrapper(entry())}>
      <div className={content()}>
        <Image
          alt="Idir Hamouch"
          width={64}
          height={64}
          className={avatar()}
          src="https://pbs.twimg.com/profile_images/1374070746817908740/mIfVlbBb_400x400.jpg"
        />
        <p className={heading(title())}>
          I’m a self-taught full-stack developer based in Florida, USA.
        </p>
        <p
          className={text({
            css: {
              fontSize: '1.125rem',
              lineHeight: '1.75rem',
              fointWeight: '400',
              letterSpacing: '-.025em',
            },
          })}
        >
          I have multiple years of experience in the JavaScript ecosystem and have a blog where I
          write about technology, share the things I've learned, and ponder the future of the field.
        </p>
        <p
          className={text({
            css: {
              fontSize: '1.125rem',
              lineHeight: '1.75rem',
              fointWeight: '400',
              letterSpacing: '-.025em',
            },
          })}
        >
          I am passionate about building things for the web, writing clean & maintainable code, and
          keeping up with the newest technology trends while looking ahead to what’s on the horizon.
        </p>
      </div>
      <nav
        className={box({
          css: { gridRow: '2', display: 'flex', marginLeft: '-14px' },
        })}
      >
        <Link className={link()} href="#">
          Github
        </Link>
        <Link className={link()} href="#">
          Twitter
        </Link>
        <Link className={link()} href="#">
          Linkedin
        </Link>
        <Link className={link()} href="#">
          Resume
        </Link>
      </nav>
    </div>
  );
}

export default HomeEntry;
