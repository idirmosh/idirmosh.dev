import { box } from '@styles/common';
import { heading, text } from '@styles/typography';
import React from 'react';
import { css } from 'stitches.config';
import Link from './common/Link';
import Image from 'next/image';
import { MAIN_CARD_WIDTH } from '@lib/constants';

function ProjectCard({ project }) {
  const card = css({
    textDecoration: 'none',
    width: '100%',
    // minWidth: `${MAIN_CARD_WIDTH}px`,
  });
  const content = css({
    marginTop: '0.8rem',
    paddingRight: '1.6rem',
  });

  const title = css({
    display: 'inline-block',
    margin: '0 .4rem 0 0 !important',
    color: '$neutral1',
  });
  const desc = css({
    color: '$neutral3',
  });
  return (
    <div className={card()}>
      <div>
        <Image
          width={MAIN_CARD_WIDTH - 40}
          height={280}
          layout="responsive"
          objectFit="cover"
          alt="sds"
          src={project.preview}
        />
      </div>
      <div className={content()}>
        <span className={title(heading({ type: 'h4' }))}>{project.name} </span>
        <span className={desc(text({ type: 'medium' }))}>— {project.description}</span>
        <div className={box({ css: { marginTop: '.4rem' } })}>
          <Link
            href={project.demo}
            target="_blank"
            className={text({
              type: 'external-link',
              css: { paddingRight: '1rem', fontSize: '.875rem' },
            })}
          >
            Demo
          </Link>

          <Link
            href={project.source}
            target="_blank"
            className={text({
              type: 'external-link',
              css: { fontSize: '.875rem' },
            })}
          >
            Source Code
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
