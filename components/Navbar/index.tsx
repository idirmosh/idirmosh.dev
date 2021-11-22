import { btn, clickableIcon, wrapper } from '@styles/common';
import { useState } from 'react';
import { css } from 'stitches.config';
import Link from '../common/Link';
import { Moon, MenuOpen, MenuClose } from '../common/icons';
import Portal from '../common/Portal';
import { CSSTransition } from 'react-transition-group';
import Logo from '../common/Logo';
import MobileMenu from './MobileMenu';
import SkipContent from './SkipContent';
import NavMenuList from './NavMenuItems';
import MenuBotton from './MenuBotton';

const menus = [
  { id: 1, text: 'About', href: '/about', desc: 'A little about this' },
  { id: 2, text: 'Blog', href: '/blog', desc: 'A little about this' },
  { id: 3, text: 'Reading', href: '/reading', desc: 'A little about this' },
  { id: 4, text: 'Projects', href: '/projects', desc: 'A little about this' },
];

function CTA() {
  return (
    <Link
      href="/contact"
      className={btn({
        css: {
          '@mobile': {
            display: 'none',
          },
        },
      })}
    >
      Reach out
    </Link>
  );
}
function ThemeToggler() {
  return (
    <div className={clickableIcon()} title="Enable Dark Mode" aria-label="Enable Dark Mode">
      <Moon width="18" />
    </div>
  );
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menu = css({
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    zIndex: '1',
  });
  const navWrapper = css({
    width: '100%',
    textAlign: 'center',
    '&:after': {
      content: '',
      display: 'table',
      clear: 'both',
    },
  });
  const headerStyles = css({
    position: 'sticky',
    top: '0',
    backgroundColor: 'transparent',
    'backdrop-filter': 'blur(10px)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    zIndex: '999',
    '@mobile': {
      'backdrop-filter': 'blur(0)',
      backgroundColor: '$neutral7',
      borderBottom: '1px solid $neutral6',
    },
  });
  const navbarStyles = css({
    position: 'relative',
    flex: '1',
    height: '80px',
    display: 'flex',
    alignItems: 'center',

    '@tablet': {
      height: 'unset',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      padding: '1rem 0',
    },
  });
  return (
    <>
      <header className={headerStyles()}>
        <div className={navWrapper(wrapper())}>
          <SkipContent />
          <nav className={navbarStyles()}>
            <div className={menu()}>
              <MenuBotton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
              <Logo />
              {menus && <NavMenuList menus={menus} />}
              <CTA />
              <ThemeToggler />
            </div>

            {isOpen && (
              <Portal>
                <MobileMenu isOpen={isOpen} menus={menus} />
              </Portal>
            )}
          </nav>
        </div>
      </header>
      <div id="skip-nav"></div>
    </>
  );
}

export default Navbar;
