import React from 'react';
import { Link } from 'components/common';
import * as Icons from 'components/common/icons';
import { flexRow, linkReset } from '@styles/common';
import { heading, text } from '@styles/typography';
import { css } from 'stitches.config';
import audio from '../public/sounds/idir.mp3';

function Logo({ name: fullName, title }): React.ReactElement {
  const logo = css({
    display: 'flex',
    flexDirection: 'column',
  });
  const name = css({
    margin: '0 0 .12rem 0 !important',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    lineHeight: '1.2',
  });
  const sub = css({
    margin: '0 !important',
    fontWeight: '400',
    color: '$neutral3',
    lineHeight: '1.2',
  });
  const audioS = css({
    justifyContent: 'space-around',
    borderRadius: '99px',
    minWidth: '20px',
    height: '20px',
    background: '$neutral6',
    cursor: 'pointer',
    marginLeft: '$2',
    transition: 'all .12s',
    svg: {
      fill: '$neutral3',
    },
    '&:hover': {
      background: '$neutral5',
    },
  });
  return (
    <div className={logo()}>
      <Link href="/" className={linkReset()}>
        <h1 className={name(heading({ type: 'h4' }))}>
          {fullName}
          <span className={flexRow(audioS())} onClick={() => new Audio(audio).play()}>
            <Icons.Audio width="12px" />
          </span>
        </h1>
        <p className={sub(text({ type: 'small' }))}> {title} </p>
      </Link>
    </div>
  );
}

export default Logo;
