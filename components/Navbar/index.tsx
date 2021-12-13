import { box, btn, linkReset, wrapper } from '@styles/common';
import { css } from 'stitches.config';
import Link from '../common/Link';
import Portal from '../common/Portal';
import Logo from '../common/Logo';
import MobileMenu from './MobileMenu';
import SkipContent from './SkipContent';
import NavMenuList from './NavMenuList';
import MenuBotton from './MenuBotton';
import { text } from '@styles/typography';
import { useState } from 'react';

import ThemeToggler from './ThemeToggler';

const menus = [
  { id: 1, text: 'About', href: '/about', desc: 'A little about this' },
  { id: 2, text: 'Blog', href: '/blog', desc: 'A little about this' },
  { id: 3, text: 'Reading', href: '/reading', desc: 'A little about this' },
  { id: 4, text: 'Projects', href: '/projects', desc: 'A little about this' },
];

function CTA() {
  return (
    <Link href="/contact" className={btn(linkReset(text({ type: 'small' })))}>
      Reach out
    </Link>
  );
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menu = css({
    display: 'grid',
    gridTemplateColumns: 'repeat(12,minmax(0,1fr))',
    gap: '0',
    '@tablet': {
      gap: '0.4rem',
    },
    '@desktop': {
      gap: '0.8rem',
    },
    //width: '100%',
    // display: 'flex',
    //alignItems: 'center',
    //justifyContent: 'space-between',
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
    borderBottom: '1px solid $neutral6',
    backgroundColor: '$neutral7',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    zIndex: '999',
    '@mobile': {
      borderBottom: '1px solid $neutral6',
    },
  });
  const navbarStyles = css({
    position: 'relative',
    //flex: '1',
    height: '72px',
    padding: '1rem 0',
    //display: 'flex',
    alignItems: 'center',

    '@tablet': {
      // height: 'unset',
      // flexDirection: 'column',
      // alignItems: 'flex-start',
      // justifyContent: 'flex-start',
      // padding: '1rem 0',
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
              <div
                className={box({
                  css: {
                    display: 'none',
                    '@mobile': {
                      display: 'flex',
                      flexDirection: 'row',
                      gridColumn: '5/9',
                      alignSelf: 'center',
                      justifyContent: 'space-around',
                    },
                  },
                })}
              >
                {menus && <NavMenuList menus={menus} />}
              </div>

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
