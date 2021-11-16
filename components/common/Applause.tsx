import { text } from '@styles/typography';
import React from 'react';
import { css } from 'stitches.config';
import { Clap } from '@components/icons';

function Applause() {
  return (
    <figure className={applauseStyles()} aria-label="support this post">
      <data className={text({ type: 'xSmall' })}>546</data>
      <Clap width="32px" />
    </figure>
  );
}

export const applauseStyles = css({
  marginLeft: 'auto',

  svg: {
    cursor: 'pointer',
    marginLeft: '4px',
    path: {
      fill: '#555555',
    },
  },
});
export default Applause;
