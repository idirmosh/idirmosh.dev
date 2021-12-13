import { box, flexColumn, flexRow } from '@styles/common';
import { heading, text } from '@styles/typography';
import { css } from 'stitches.config';
import Link from './Link';

function Logo() {
  const styles = css({
    gridColumn: '4/10',
    '@mobile': {
      gridColumn: '1/4',
    },
  });

  const test = css({
    display: 'flex',
    alignItems: 'center',

    flexDirection: 'row',
    alignSelf: 'center',

    img: {
      display: 'block',
      width: '100%',
      height: 'auto',
      borderRadius: '100%',
    },
  });
  return (
    <div className={styles()}>
      <Link
        href="/"
        title="Go to homepage"
        className={box({
          css: {
            textDecoration: 'none',
            border: 'none',
          },
        })}
      >
        <div className={test()}>
          <div
            className={box({
              css: {
                width: '42px',
                marginRight: '8px',
              },
            })}
          >
            <img
              alt="tet"
              src="https://pbs.twimg.com/profile_images/1374070746817908740/mIfVlbBb_400x400.jpg"
            />
          </div>

          <div className={flexColumn({})}>
            <h5 className={heading({ type: 'h4', css: { margin: '0', color: '$neutral1' } })}>
              Idir Hamouch
            </h5>
            <p
              className={text({
                type: 'small',

                css: {
                  textDecoration: 'none',
                  border: 'none',
                  margin: '0',
                  color: '$neutral3',
                },
              })}
            >
              Software Enginner
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Logo;
