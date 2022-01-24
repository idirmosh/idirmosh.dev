import React from 'react';
import { useTheme } from 'next-themes';
import { DropDownOption } from 'components/common';
import { MoonStar, Sun, System } from './icons';
import { css } from 'stitches.config';
import { text } from '@styles/typography';

function DropDown(): React.ReactElement {
  const { systemTheme } = useTheme();
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

  const span = css({
    fontWeight: '700',
    margin: '0 0 0 $2',
    color: '$neutral1',
  });

  return (
    <ul className={dropDown()}>
      <DropDownOption value="light">
        <Sun width="24" />
        <span className={span(text({ type: 'medium' }))}>Light</span>
      </DropDownOption>
      <DropDownOption value="dark">
        <MoonStar width="24" />
        <span className={span(text({ type: 'medium' }))}>Dark</span>
      </DropDownOption>
      <DropDownOption value={systemTheme}>
        <System width="24" />
        <span className={span(text({ type: 'medium' }))}>System</span>
      </DropDownOption>
    </ul>
  );
}

export default DropDown;
