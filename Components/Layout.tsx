import React, { FC, ReactNode } from 'react';
import NavbarNew from '@components/Navbar';
import Footer from './Footer';
const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <NavbarNew />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
