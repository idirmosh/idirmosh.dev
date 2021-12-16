import { box, wrapper } from '@styles/common';
import { heading } from '@styles/typography';
import React from 'react';
import { css } from 'stitches.config';
import ProjectCard from './ProjectCard';

function FeaturedWorks({ work }) {
  const container = css({
    display: 'grid',
    gridTemplateColumns: `repeat(1,minmax(0,1fr))`,
    gridGap: '4rem',

    '@mobile': {
      gridTemplateColumns: `repeat(2,minmax(0,1fr))`,
      gridGap: '2rem',
    },
    '@tablet': {
      gridTemplateColumns: `repeat(3,minmax(0,1fr))`,
      gridGap: '2.5rem',
    },
    '@desktop': {
      gridTemplateColumns: `repeat(4,minmax(0,1fr))`,
      gridGap: '3rem',
    },
  });

  return (
    <div className={box({ css: { margin: '10rem auto' } })}>
      <div className={wrapper()}>
        <h2
          className={heading({ type: 'h2', css: { marginBottom: '2.4rem', color: '$neutral1' } })}
        >
          Projects
        </h2>
      </div>

      <div className={wrapper(container())}>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
}
export default FeaturedWorks;
