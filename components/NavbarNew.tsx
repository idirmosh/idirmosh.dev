import { flexRow, wrapper } from '@styles/common';
import React, { ReactNode, useEffect, useRef, useState } from 'react';
import { css } from 'stitches.config';
import MobileMenu from './MobileMenu';
import Logo from './Logo';
import { text } from '@styles/typography';
import ThemeToggler from './common/ThemeTogglerMew';

function NavbarNew(): React.ReactElement {
  const [isOpen, setIsOpen] = useState<Boolean>(false);
  const nodeRef = useRef(null);
  const navbar = css({
    borderBottom: '1px solid $neutral6',
    marginBottom: '2rem',
    height: '96px',
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
      '&:after': {
        'transition-delay': '.1s',
      },
    },
    '&:nth-child(2)': {
      top: '6px',
      '&:after': {
        'transition-delay': '.2s',
      },
    },
    '&:nth-child(3)': {
      top: '12px',
      '&:after': {
        'transition-delay': '.3s',
      },
    },
  });
  return (
    <div className={wrapper({ css: { margin: '0 auto $3 auto !important' } })}>
      <nav className={flexRow(navbar())}>
        <div className={menuBtn()} onClick={() => setIsOpen(!isOpen)}>
          <div className={iconMenu()}>
            <div className={`${bar()} bar`}></div>
            <div className={`${bar()} bar`}></div>
            <div className={`${bar()} bar`}></div>
          </div>
          <span className={text({ type: 'menuCap' })}>Menu</span>
        </div>

        <Logo />
        <ThemeToggler />
      </nav>
      <MobileMenu isOpen={isOpen} handleMenu={setIsOpen} />
    </div>
  );
}

export default NavbarNew;
