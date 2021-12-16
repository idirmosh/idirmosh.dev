import { wrapper } from '@styles/common';
import React from 'react';
import { css } from 'stitches.config';
import ThemeToggler from './Navbar/ThemeToggler';

function NavbarNew() {
  const navbar = css({
    display: 'flex',
    alignItems: 'center',
    borderBottom: '1px solid $neutral6',
    marginBottom: '2rem',
    padding: '1rem 0',
  });
  const menu = css({
    display: 'flex',
    alignItems: 'center',
  });
  return (
    <div className={wrapper()}>
      <nav className={navbar()}>
        <h1>Idir</h1>
        <ul className={menu()}>
          <li>Blog</li>
          <li>About</li>
        </ul>
        <ThemeToggler />
      </nav>
    </div>
  );
}

export default NavbarNew;
