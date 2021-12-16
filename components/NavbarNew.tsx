import React from 'react';
import { css } from 'stitches.config';

function NavbarNew() {
  const navbar = css({
    padding: '0',
  });
  return (
    <nav className={navbar()}>
      <h1>Idir</h1>
      <ul>
        <li>Blog</li>
        <li>About</li>
      </ul>
    </nav>
  );
}

export default NavbarNew;
