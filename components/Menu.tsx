import { ReactElement } from 'react';
import { flexRow } from '@styles/common';
import { MenuLink } from 'components/common';

function Menu({ menu }): ReactElement {
  return (
    <ul className={flexRow({ css: { listStyle: 'none', margin: '0', padding: '0' } })}>
      {menu && menu.map((item) => <MenuLink key={item.name} href={item.href} text={item.name} />)}
    </ul>
  );
}
export default Menu;
