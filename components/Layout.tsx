import React, { FC, ReactNode } from 'react';
import NavbarNew from '@components/NavbarNew';

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <NavbarNew />
      {children}
    </>
  );
};

export default Layout;
