import { wrapper } from '@styles/common';
import { heading, text } from '@styles/typography';
import { css } from 'stitches.config';
import Image from 'next/image';

function HomeEntry() {
  const entry = css({
    display: 'grid',
    gridTemplateColumns: 'repeat(12,minmax(0,1fr))',
    gridTemplateRows: 'none',
    alignItems: 'center',
    margin: '4rem auto',
    '@desktop': {
      margin: '10rem auto',
    },
  });
  const content = css({
    gridColumnStart: '1',
    gridColumnEnd: '13',
    '@tablet': {
      gridColumnStart: '1',
      gridColumnEnd: '10',
    },
    '@desktop': {
      gridColumnStart: '1',
      gridColumnEnd: '10',
    },
  });
  const title = css({
    fontSize: '1.9rem',
    lineHeight: '1.1',
    letterSpacing: '-.05em',
    // fointWeight: '700',

    margin: '1.25rem 0',

    '@tablet': {
      fontSize: '3rem',
      lineHeight: '1',
    },
  });
  const avatar = css({
    borderRadius: '999px',
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
    </div>
  );
}

export default HomeEntry;
