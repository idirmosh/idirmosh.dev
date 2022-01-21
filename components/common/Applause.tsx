import { text } from '@styles/typography';
import React from 'react';
import { css } from 'stitches.config';
import { Clap } from 'components/common/icons';
import { flexRow } from '@styles/common';

function Applause(): React.ReactElement {
  return (
    <figure className={flexRow(applauseStyles())} aria-label="support this article">
      <data className={text({ type: 'small', css: { margin: '0' } })}>546</data>
      <Clap onClick={() => alert('Clicked')} width="32px" />
    </figure>
  );
}

export const applauseStyles = css({
  margin: '0 !important',

  svg: {
    cursor: 'pointer',
    marginLeft: '4px',
    path: {
      fill: '#555555',
    },
  },
});
export default Applause;
