import { Moon, MoonStar, Sun, System } from '../common/icons';
import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { css } from 'stitches.config';
import { text } from '@styles/typography';

function ThemeToggler(): React.ReactElement {
  const [mounted, setMounted] = useState<Boolean>(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const toggleTheme = () => {
    const targetTheme: string = resolvedTheme === 'light' ? 'dark' : 'light';
    setTheme(targetTheme);
  };
  const isCurrent = resolvedTheme === 'light';
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
  const dropDown = css({
    position: 'absolute',
    right: '0',
    top: '56px',
    padding: '0',
    width: '144px',
    border: '1px solid $neutral4',
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
      fill: isLight ? '$red' : '$yellow',
    },
  });

  const span = css({
    fontWeight: '700',
    margin: '0 0 0 $2',
    color: '$neutral1',
  });
  return (
    <div
      className={togglebtn()}
      onClick={toggleTheme}
      title={isLight ? 'Enable Dark Mode' : 'Enable Light Mode'}
      role="button"
      aria-pressed={isLight}
    >
      {isLight ? <MoonStar width="24" /> : <Sun width="24" />}
      <ul className={dropDown()}>
        <li className={action()}>
          <Sun width="24" />
          <span className={span(text({ type: 'medium' }))}>Light</span>
        </li>
        <li className={action()}>
          <MoonStar width="24" />
          <span className={span(text({ type: 'medium' }))}>Dark</span>
        </li>
        <li className={action()}>
          <System width="24" />
          <span className={span(text({ type: 'medium' }))}>System</span>
        </li>
      </ul>
    </div>
  );
}

export default ThemeToggler;
