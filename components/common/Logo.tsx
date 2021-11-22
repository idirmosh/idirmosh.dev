import { heading } from '@styles/typography';
import { css } from 'stitches.config';
import Link from './Link';

function Logo() {
  const styles = css({
    a: {
      color: '$neutral0',
      textDecoration: 'none',
      h1: {
        fontSize: '1rem',
        letterSpacing: '0',
      },
      span: {
        fontWeight: '800',
      },
    },
  });
  return (
    <div className={styles()}>
      <Link href="/" title="Go to homepage">
        <h1 className={heading({ type: 'h4', css: { margin: '0', fontWeight: '400' } })}>
          <span>Idir</span>Hamouch
        </h1>
      </Link>
    </div>
  );
}

export default Logo;
