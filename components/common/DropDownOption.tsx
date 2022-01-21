import React, { useEffect, useState, ReactNode, ReactElement } from 'react';
import { useTheme } from 'next-themes';
import { css } from 'stitches.config';

function DropDownOption({ value, children }: { value: string; children: ReactNode }): ReactElement {
  const { setTheme, resolvedTheme, systemTheme } = useTheme();
  let log = console.log;
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
  const active = css({
    background: '#5700e308',
  });
  const selected = value === resolvedTheme;
  log({ selected, systemTheme, value, resolvedTheme });
  const jgh = systemTheme === value;
  const temp = jgh && selected;

  const handleClick = (value: string) => setTheme(value);

  return (
    <li className={action(selected && active())} onClick={() => handleClick(value)}>
      {children}
    </li>
  );
}

export default DropDownOption;
