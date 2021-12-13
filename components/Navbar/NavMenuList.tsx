import { flexRow, linkReset } from '@styles/common';
import { text } from '@styles/typography';
import { css } from 'stitches.config';
import Link from '../common/Link';
import { useRouter } from 'next/router';

const NavMenuList = ({ menus }) => {
  const router = useRouter();

  return menus.map((link) => {
    let isActive = router.pathname == link.href;
    const activeStyle = () => {
      return {
        position: 'relative',
        zIndex: '0',
        borderBottom: 'none',
        fontWeight: '600',
        color: '$neutral0',
        '&:before': {
          content: '',
          position: 'absolute',
          zIndex: '-1',
          top: '-2px',
          left: '-7px',
          width: 'calc(100% + 14px)',
          height: '1.75rem',
          borderRadius: '0.5rem',
          backgroundColor: '$neutral6',
        },
      };
    };

    const reset = css({
      // gridColumnStart: '3',
      // gridColumnEnd: '10',
      marginBottom: '0',
      display: 'none !important',
      '@mobile': {
        display: 'block !important',
      },
    });
    return (
      <Link
        href={link.href}
        title={link.text}
        key={link.id}
        className={reset(
          linkReset(
            text({
              type: 'menu',
              css: isActive && activeStyle(),
            })
          )
        )}
      >
        {link.text}
      </Link>
    );
  });
};

export default NavMenuList;
