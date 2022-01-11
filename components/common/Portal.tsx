import { FC, ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const Portal: FC<ReactNode | null> = ({ children }) => {
  const [mounted, setMounted] = useState<Boolean>(false);
  let div: string = '#mobile-menu';

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  return mounted ? createPortal(children, document.querySelector(div)) : null;
};

export default Portal;
