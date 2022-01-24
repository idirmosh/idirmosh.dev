import { ReactElement } from 'react';
import { ThemeToggler } from 'components/common';
import { Menu, Logo } from 'components';
import { flexColumn, flexRow, wrapper } from '@styles/common';
import { css } from 'stitches.config';

function Navbar({ menu, name, title }): ReactElement {
  const navbar = css({
    borderBottom: '1px solid $neutral6',
    marginBottom: '$3',
    height: '80px',
  });

  return (
    <div className={wrapper({ css: { margin: '0 auto $3 auto !important' } })}>
      <nav className={flexRow(navbar())}>
        <div className={flexColumn()}>
          <Logo name={name} title={title} />
        </div>
        <ThemeToggler />
      </nav>
      <Menu menu={menu} />
    </div>
  );
}

export default Navbar;
