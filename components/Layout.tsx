import React, { FC, ReactNode } from 'react';
import Navbar from '@components/Navbar';

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default Layout;
