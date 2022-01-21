import { css } from 'stitches.config';
import { box } from '@styles/common';
import Link from 'components/common/Link';
import { heading, text } from '@styles/typography';

const TagCard = ({ tag }): React.ReactElement => {
  const card = css({
    padding: '$3 0',
    '&:hover': {
      boxShadow: '0 2px 2px -2px $colors$neutral4',
    },
  });
  const container = css({
    display: 'flex',
    alignItems: 'center',
  });
  const circle = css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    minWidth: '2.4rem',
    height: '2.4rem',
    backgroundColor: '$neutral6',
    borderRadius: '999px',
    fontSize: '1.2rem',
    fontWeight: '600',
    textTransform: 'uppercase',
    color: '$neutral4',
  });
  return (
    <article className={card()}>
      <Link
        href={`/tags/${tag}`}
        className={box({ css: { textDecoration: 'none', color: '$neutral0' } })}
      >
        <div className={container()}>
          <div className={circle()}>#</div>
          <span className={box({ css: { marginLeft: '1rem' } })}>
            <h2
              className={heading({ type: 'h4', css: { textTransform: 'capitalize', margin: '0' } })}
            >
              {tag}
            </h2>
            <p
              className={text({ type: 'small', css: { margin: '2px 0 0 0' } })}
            >{`Latest updates, tutorials, and news about ${tag}.`}</p>
          </span>
        </div>
      </Link>
    </article>
  );
};

export default TagCard;
