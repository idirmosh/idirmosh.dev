import { Moon, MoonStar, Sun, System } from '../common/icons';
import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { css } from 'stitches.config';
import { text } from '@styles/typography';

function ThemeToggler(): React.ReactElement {
  const [mounted, setMounted] = useState<Boolean>(false);
  const { setTheme, resolvedTheme, systemTheme, ...rest } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const toggleTheme = () => {
    const targetTheme: string = resolvedTheme === 'light' ? 'dark' : 'light';
    setTheme(targetTheme);
  };
  const targetTheme: string = resolvedTheme === 'light' ? 'dark' : 'light';
  console.log(rest);
  const isCurrent = resolvedTheme === 'light';
  const isLight = resolvedTheme === 'light';

  const togglebtn = css({
    position: 'relative',
    minWidth: '1.8rem',
    height: '1.8rem',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginLeft: 'auto',
    borderRadius: '.7rem',
    transition: 'all .5s ease 0s',
    // boxShadow: '0 0 0 1px $colors$neutral4',
    cursor: 'pointer',
    backgroundColor: '$neutral7',
    svg: {
      fill: isLight ? '$neutral1' : '$yellow',
    },
    // '&:hover': {
    //   backgroundColor: isLight ? '$neutral3' : '$yellow',
    //   boxShadow: '0',
    //   svg: {
    //     fill: '$neutral7',
    //   },
    // },
  });

  return (
    <div
      className={togglebtn()}
      //  onClick={toggleTheme}
      title={isLight ? 'Enable Dark Mode' : 'Enable Light Mode'}
      role="button"
      aria-pressed={isLight}
    >
      {isLight ? <MoonStar width="24" /> : <Sun width="24" />}
      <DropDown />
    </div>
  );
}

function DropDown() {
  const { setTheme, resolvedTheme, systemTheme, theme, ...rest } = useTheme();

  const dropDown = css({
    position: 'absolute',
    right: '8px',
    top: '18px',
    padding: '$1 0',
    width: '144px',
    border: '1px solid $neutral5',
    boxShadow: '0 0 18px $colors$neutral6',
    background: '$neutral7',
    borderRadius: '6px',
  });
  const action = css({
    display: 'flex',
    alignItems: 'center',
    listStyle: 'none',
    padding: '$1 $2 !important',
    margin: '0',

    '&:hover': {
      background: '$neutral6',
    },
    svg: {
      fill: '$neutral4',
    },
  });

  const span = css({
    fontWeight: '700',
    margin: '0 0 0 $2',
    color: '$neutral1',
  });

  return (
    <ul className={dropDown()}>
      <li className={action()} onClick={() => setTheme('light')}>
        <Sun width="24" />
        <span className={span(text({ type: 'small' }))}>Light</span>
      </li>
      <li className={action()} onClick={() => setTheme('dark')}>
        <MoonStar width="24" />
        <span className={span(text({ type: 'small' }))}>Dark</span>
      </li>
      <li className={action()} onClick={() => setTheme(systemTheme)}>
        <System width="24" />
        <span className={span(text({ type: 'small' }))}>System</span>
      </li>
    </ul>
  );
}

export default ThemeToggler;
