import { box, wrapper } from '@styles/common';
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
    display: 'flex',
    alignItems: 'center',
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
    lineHeight: '1.2',
  });
  const sub = css({
    margin: '0 !important',
    fontWeight: '400',
    color: '$neutral3',
    lineHeight: '1.2',
  });
  const audioS = css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: '99px',
    width: '20px',
    height: '20px',
    background: '$neutral5',
    cursor: 'pointer',
    marginLeft: '.4rem',
    svg: {
      fill: '$neutral3',
    },
  });
  const menuBtn = css({
    transition: 'all .5s ease 0s',
    marginLeft: '2rem',
    cursor: 'pointer',
    svg: {
      fill: '$neutral2',
    },
  });
  return (
    <>
      <div className={wrapper()}>
        <nav className={navbar()}>
          <div className={logo()}>
            <h1 className={name(heading({ type: 'h3' }))}>
              Idir Hamouch
              <span className={audioS()} onClick={() => new Audio(audio).play()}>
                <Icons.Audio width="14px" />
              </span>
            </h1>
            <p className={sub(text({ type: 'medium' }))}>making the web a better place</p>
          </div>

          {/* <ul className={menu()}>
          <Link href="/blog">Blog</Link>
          <Link href="/about">About</Link>
        </ul> */}

          <ThemeToggler />
          <div className={menuBtn()}>
            <Icons.MenuOpen width="30px" />
          </div>
        </nav>
        {/* <Portal>
          <MobileMenu />
        </Portal> */}
      </div>
    </>
  );
}
function MobileMenu() {
  const menu = css({
    margin: '0',
    position: 'absolute',
    top: '0',
    right: '0',
    backgroundColor: '$neutral6',
    width: '300px',
    height: '100vh',
  });
  return <menu className={menu()}></menu>;
}
export default NavbarNew;
