import { text } from '@styles/typography';
import React, { useContext, useState } from 'react';
import { css } from 'stitches.config';
import { Clap } from 'components/common/icons';
import { flexRow } from '@styles/common';
import { PostContext } from 'context';
import { IApplause } from 'global';

function Applause(): React.ReactElement {
  const applauses: IApplause = useContext(PostContext);
  const [value, setValue] = useState<number>(applauses.value);

  const handleApplause = async () => {
    fetch(`/api/applause?slug=${applauses.slug}`, { method: 'POST' })
      .then((res) => res.json())
      .then((data) => setValue(data.value));
  };
  return (
    <figure className={flexRow(applauseStyles())} aria-label="support this article">
      <data className={text({ type: 'small', css: { margin: '0' } })}>{value}</data>
      <Clap onClick={handleApplause} width="32px" />
    </figure>
  );
}

export const applauseStyles = css({
  margin: '0 !important',
  svg: {
    cursor: 'pointer',
    marginLeft: '4px',
    path: {
      fill: '$neutral3',
    },
  },
});
export default Applause;
