import { flexRow, wrapper } from '@styles/common';
import React, { useState } from 'react';
import { css } from 'stitches.config';
import ThemeToggler from './Navbar/ThemeToggler';
import Portal from './common/Portal';
import MobileMenu from './MobileMenu';
import Logo from './Logo';
import { text } from '@styles/typography';

function NavbarNew() {
  const [isOpen, setIsOpen] = useState(false);

  const navbar = css({
    borderBottom: '1px solid $neutral6',
    marginBottom: '2rem',
    height: '70px',
  });
  const menuBtn = css({
    marginRight: '16px',
    cursor: 'pointer',
  });
  const iconMenu = css({
    cursor: 'pointer',
    position: 'relative',
    display: 'inline-block',
    width: '20px',
    height: '16px',
    top: '1px',
    marginRight: '10px',
    verticalAlign: 'middle',
  });
  const bar = css({
    position: 'absolute',
    width: '100%',
    height: '2px',
    backgroundColor: '$neutral2',
    borderRadius: '2px',
    overflow: 'hidden',
    '&:after': {
      content: '',
      display: 'block',
      width: '100%',
      height: '100%',
      background: '$neutral6',
      position: 'absolute',
      top: '0',
      left: '100%',
      zIndex: '1',
      transition: '.3s',
    },
    '&:nth-child(1)': {
      top: '0',
    },
    '&:nth-child(2)': {
      top: '6px',
    },
    '&:nth-child(3)': {
      top: '12px',
    },
  });

  return (
    <>
      <div className={wrapper({ css: { margin: '0 auto $3 auto !important' } })}>
        <nav className={flexRow(navbar())}>
          {/* <div className={menuBtn()} onClick={() => setIsOpen(!isOpen)}>
            <Icons.MenuOpen width="32px" />
          </div> */}
          <div className={menuBtn()} onClick={() => setIsOpen(!isOpen)}>
            <div className={iconMenu()}>
              <div className={bar()}></div>
              <div className={bar()}></div>
              <div className={bar()}></div>
            </div>
            <span className={text({ type: 'menuCap' })}>Menu</span>
          </div>

          <Logo />
          <ThemeToggler />
        </nav>
        {isOpen && (
          <Portal>
            <MobileMenu handleMenu={setIsOpen} />
          </Portal>
        )}
      </div>
    </>
  );
}

export default NavbarNew;
