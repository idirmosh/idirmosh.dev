import { flexRow, linkReset } from '@styles/common';
import { text } from '@styles/typography';
import { css } from 'stitches.config';
import Link from '../common/Link';

const NavMenuList = ({ menus }) => {
  const item = css({
    fontSize: '.9rem',
    fontWeight: '500',
    color: '$neutral2',
    marginLeft: '1rem !important',
    transition: 'all 0.2s ease',
    touchAction: 'pan-y',
    '-webkit-tap-highlight-color': 'transparent',
    '&:hover': {
      color: '$neutral0',
      textDecoration: 'underline',
      'text-underline-position': 'under',
    },
    padding: '0',
    '@mobile': {
      display: 'none',
    },
  });

  return menus.map((link) => (
    <Link href={link.href} title={link.text} key={link.id} className={item(linkReset())}>
      {link.text}
    </Link>
  ));
};

export default NavMenuList;
