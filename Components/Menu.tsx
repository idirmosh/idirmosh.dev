import { flexRow } from '@styles/common';
import { ReactElement } from 'react';
import MenuLink from './Common/MenuLink';

function Menu({ menu }): ReactElement {
  return (
    <ul className={flexRow({ css: { listStyle: 'none', margin: '0', padding: '0' } })}>
      {menu && menu.map((item) => <MenuLink key={item.name} href={item.href} text={item.name} />)}
    </ul>
  );
}
export default Menu;
