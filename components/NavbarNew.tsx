import { box, flexRow, wrapper } from '@styles/common';
import { heading, text } from '@styles/typography';
import React, { useState } from 'react';
import { css } from 'stitches.config';
import Link from './common/Link';
import ThemeToggler from './Navbar/ThemeToggler';
import * as Icons from '@components/common/icons';

import audio from '../public/sounds/idir.mp3';
import Portal from './common/Portal';

function NavbarNew() {
  const navbar = css({
    borderBottom: '1px solid $neutral6',
    marginBottom: '2rem',
    padding: '1.8rem 0',
  });
  const menu = css({
    display: 'flex',
    alignItems: 'center',
    listStyle: 'none',
  });
  const logo = css({
    display: 'flex',
    flexDirection: 'column',
  });
  const name = css({
    margin: '0 0 .12rem 0 !important',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    lineHeight: '1.2',
  });
  const sub = css({
    margin: '0 !important',
    fontWeight: '400',
    color: '$neutral3',
    lineHeight: '1.2',
  });
  const audioS = css({
    justifyContent: 'space-around',
    borderRadius: '99px',
    minWidth: '20px',
    height: '20px',
    background: '$neutral5',
    cursor: 'pointer',
    marginLeft: '$2',
    svg: {
      fill: '$neutral3',
    },
  });
  const menuBtn = css({
    transition: 'all .5s ease 0s',
    marginLeft: '$3',
    cursor: 'pointer',
    svg: {
      fill: '$neutral2',
    },
  });
  return (
    <>
      <div className={wrapper({ css: { margin: '0 auto $3 auto !important' } })}>
        <nav className={flexRow(navbar())}>
          <Logo />

          {/* <ul className={menu()}>
          <Link href="/blog">Blog</Link>
          <Link href="/about">About</Link>
        </ul> */}

          <ThemeToggler />
          <div className={menuBtn()}>
            <Icons.MenuOpen width="32px" />
          </div>
        </nav>
        <Portal>
          <MobileMenu />
        </Portal>
      </div>
    </>
  );
}

function Logo() {
  const logo = css({
    display: 'flex',
    flexDirection: 'column',
  });
  const name = css({
    margin: '0 0 .12rem 0 !important',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    lineHeight: '1.2',
  });
  const sub = css({
    margin: '0 !important',
    fontWeight: '400',
    color: '$neutral3',
    lineHeight: '1.2',
  });
  const audioS = css({
    justifyContent: 'space-around',
    borderRadius: '99px',
    minWidth: '20px',
    height: '20px',
    background: '$neutral6',
    cursor: 'pointer',
    marginLeft: '$2',
    transition: 'all .12s',
    svg: {
      fill: '$neutral3',
    },
    '&:hover': {
      background: '$neutral5',
    },
  });
  return (
    <div className={logo()}>
      <h1 className={name(heading({ type: 'h3' }))}>
        Idir Hamouch
        <span className={flexRow(audioS())} onClick={() => new Audio(audio).play()}>
          <Icons.Audio width="12px" />
        </span>
      </h1>
      <p className={sub(text({ type: 'medium' }))}>making the web a better place</p>
    </div>
  );
}
function MobileMenu() {
  const menu = css({
    display: 'block',
    padding: '$4',
    margin: '0',
    position: 'absolute',
    top: '0',
    left: '0',
    backgroundColor: '$neutral7',
    borderRight: '1px solid $neutral5',
    width: '100vw',
    height: '100vh',
    zIndex: '99',
    '@mobile': {
      width: '$8',
    },
  });

  const overlay = css({
    position: 'absolute',
    top: '0',
    bottom: '0',
    right: '0',
    left: '0',
    width: '100%',
    height: '100vh',
    background: 'rgba(0,0,0,0.3)',
  });
  const close = css({
    cursor: 'pointer',
    width: '$4',
    height: '$4',
    backgroundColor: '$neutral6',
    borderRadius: '999px',
    svg: { fill: '$neutral4' },
  });
  return (
    <>
      <menu className={menu()}>
        <div className={flexRow({ css: { justifyContent: 'space-between' } })}>
          <Logo />
          <div className={close(flexRow({ css: { justifyContent: 'space-around' } }))}>
            <Icons.MenuClose width="20px" />
          </div>
        </div>
        <div>head</div>
        <div>footer</div>
      </menu>
      <div className={overlay()}></div>
    </>
  );
}
export default NavbarNew;
