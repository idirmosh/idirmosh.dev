import { FC, ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const Portal: FC<ReactNode | null> = ({ children }) => {
  const [mounted, setMounted] = useState(false);
  let div = '#mobile-menu';

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  return mounted ? createPortal(children, document.querySelector(div)) : null;
};

export default Portal;
