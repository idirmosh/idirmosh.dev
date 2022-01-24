import React from 'react';
import ProjectCard, { IProject } from './ProjectCard';
import { keyGen } from '@lib/helpers';
import { wrapper } from '@styles/common';
import { heading } from '@styles/typography';
import { css } from 'stitches.config';

function FeaturedWorks({ projects }: { projects: IProject[] }): React.ReactElement {
  const container = css({
    display: 'grid',
    gridTemplateColumns: `repeat(1,minmax(0,1fr))`,
    gridGap: '4rem',
    marginTop: '$4 !important',
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
    <div className={wrapper({ css: { margin: '$6 auto' } })}>
      <h2 className={heading({ type: 'h2' })}>Selected Projects</h2>
      <div className={container()}>
        {projects &&
          projects.map((project) => <ProjectCard key={keyGen(project.name)} project={project} />)}
      </div>
    </div>
  );
}
export default FeaturedWorks;
