import { ReactElement, useContext } from 'react';
import { flexRow } from '@styles/common';
import { MenuLink } from 'components/common';
import { LayoutContext } from 'context';

function Menu(): ReactElement {
  const { menu } = useContext(LayoutContext);

  return (
    <ul className={flexRow({ css: { listStyle: 'none', margin: '0', padding: '0' } })}>
      {menu && menu.map((item) => <MenuLink key={item.name} href={item.href} text={item.name} />)}
    </ul>
  );
}
export default Menu;
