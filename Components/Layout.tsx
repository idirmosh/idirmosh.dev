import React, { FC, ReactNode } from 'react';
import Navbar from '@components/Navbar';
import Footer from './Footer';

const Layout: FC<{
  name: string;
  title: string;
  menu: Record<string, string>;
  children: ReactNode;
}> = ({ name, menu, title, children }) => {
  return (
    <>
      <Navbar menu={menu} name={name} title={title} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
