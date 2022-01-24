import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { DropDown } from 'components/common';
import { MoonStar, Sun } from './icons';
import { css } from 'stitches.config';

function ThemeToggler(): React.ReactElement {
  const [mounted, setMounted] = useState<Boolean>(false);
  const [isOpen, setIsOepn] = useState<Boolean>(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const handleOpen = () => setIsOepn(!isOpen);

  const isLight = resolvedTheme === 'light';

  const togglebtn = css({
    position: 'relative',
    minWidth: '1.8rem',
    height: '1.8rem',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginLeft: 'auto',
    borderRadius: '999px',
    transition: 'all .5s ease 0s',
    cursor: 'pointer',
    svg: {
      fill: '$neutral4',
    },
  });
  const active = css({
    fill: '$brand_main !important',
  });

  return (
    <div
      className={togglebtn()}
      onClick={handleOpen}
      title={isLight ? 'Enable Dark Mode' : 'Enable Light Mode'}
      role="button"
      aria-pressed={isLight}
    >
      {isLight ? (
        <Sun width="24" className={active()} />
      ) : (
        <MoonStar className={active()} width="24" />
      )}
      {isOpen && <DropDown />}
    </div>
  );
}

export default ThemeToggler;
