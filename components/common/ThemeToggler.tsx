import { Moon, Sun } from '../common/icons';
import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { css } from 'stitches.config';

function ThemeToggler(): React.ReactElement {
  const [mounted, setMounted] = useState<Boolean>(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const toggleTheme = () => {
    const targetTheme: string = resolvedTheme === 'light' ? 'dark' : 'light';
    setTheme(targetTheme);
  };

  const isLight = resolvedTheme === 'light';

  const togglebtn = css({
    minWidth: '1.8rem',
    height: '1.8rem',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginLeft: 'auto',
    borderRadius: '.7rem',
    transition: 'all .5s ease 0s',
    boxShadow: '0 0 0 1px $colors$neutral4',
    cursor: 'pointer',
    backgroundColor: '$neutral7',
    svg: {
      fill: isLight ? '$neutral3' : '$yellow',
    },
    '&:hover': {
      backgroundColor: isLight ? '$neutral3' : '$yellow',
      boxShadow: '0',
      svg: {
        fill: '$neutral7',
      },
    },
  });
  return (
    <div
      className={togglebtn()}
      onClick={toggleTheme}
      title={isLight ? 'Enable Dark Mode' : 'Enable Light Mode'}
      role="button"
      aria-pressed={isLight}
    >
      {isLight ? <Moon width="18" /> : <Sun width="18" />}
    </div>
  );
}

export default ThemeToggler;
