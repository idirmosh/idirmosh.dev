import { flexColumn, flexRow } from '@styles/common';
import { heading, text } from '@styles/typography';
import React from 'react';
import { css } from 'stitches.config';

function FooterCard({ children, pos, title, desc = '' }) {
  const noDesc = desc !== '';
  const container = css({
    gridColumn: '1/13',
    marginBottom: '$5',
    '@tablet': {
      gridColumn: pos,
      marginBottom: '0',
    },
  });
  const titleOvrd = css({
    margin: '0 0 $3 0 !important',
  });
  const childWrap = css({
    svg: {
      transition: 'all .3s ease',
      fill: '$neutral1',
      marginRight: '$3',
      '&:hover': { fill: '$neutral2' },
    },
  });
  return (
    <div className={flexColumn(container())}>
      <h3 className={titleOvrd(heading({ type: `${noDesc ? 'h3' : 'h4'}` }))}>{title}</h3>
      {noDesc && <p className={flexColumn(text({ css: { margin: '0 0 $3 0' } }))}>{desc}</p>}
      <div className={childWrap(noDesc ? flexRow() : flexColumn())}>{children}</div>
    </div>
  );
}

export default FooterCard;
