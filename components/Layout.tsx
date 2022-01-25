import React, { FC, ReactNode } from 'react';
import { Navbar, Footer } from 'components';
import { ILayoutInfo } from 'global';
import { LayoutContext } from 'context';

type Props = {
  children: ReactNode;
  values: ILayoutInfo;
};
const Layout: FC<Props> = ({ values, children }) => {
  return (
    <LayoutContext.Provider value={values}>
      <Navbar />
      {children}
      <Footer />
    </LayoutContext.Provider>
  );
};

export default Layout;
