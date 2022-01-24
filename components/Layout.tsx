import React, { FC, ReactNode } from 'react';
import { Navbar, Footer } from 'components';
import { ILayoutInfo } from 'global';

const Layout: FC<
  ILayoutInfo & {
    children: ReactNode;
  }
> = ({ name, links, menu, title, children }) => {
  return (
    <>
      <Navbar menu={menu} name={name} title={title} />
      {children}
      <Footer links={links} />
    </>
  );
};

export default Layout;
