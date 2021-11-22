import { flexRow, linkReset } from '@styles/common';
import { text } from '@styles/typography';
import { css } from 'stitches.config';
import Link from '../common/Link';

const NavMenuList = ({ menus }) => {
  const container = css({
    // display: 'flex',
    // flexDirection: 'row',

    '@mobile': {
      display: 'none',
    },
  });

  const item = css({
    color: '$neutral3',
    marginLeft: '1rem !important',
    transition: 'color 0.2s ease',
    touchAction: 'pan-y',
    '-webkit-tap-highlight-color': 'transparent',
    '&:hover': {
      color: '$neutral0',
    },
    padding: '0',
    '@mobile': {
      display: 'none',
    },
  });

  return (
    <div className={flexRow(container())}>
      {menus.map((link) => (
        <Link
          href={link.href}
          title={link.text}
          key={link.id}
          className={item(linkReset(text({ type: 'body', css: { margin: '0' } })))}
        >
          {link.text}
        </Link>
      ))}
    </div>
  );
};

export default NavMenuList;
