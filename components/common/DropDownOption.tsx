import React from 'react';
import { useTheme } from 'next-themes';
import { css } from 'stitches.config';

function DropDownOption({
  value,
  children,
}: {
  value: string;
  children: React.ReactNode;
}): React.ReactElement {
  const { setTheme } = useTheme();

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

  const handleClick = (value) => setTheme(value);
  return (
    <li className={action()} onClick={() => handleClick(value)}>
      {children}
    </li>
  );
}

export default DropDownOption;
