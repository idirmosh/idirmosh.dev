import { heading } from '@styles/typography';
import React from 'react';
import { css } from 'stitches.config';

function ProjectDetails(): React.ReactElement {
  const textarea = css({
    width: '100%',
    padding: '1.2rem 1.2rem 80px',

    margin: '1.2rem 0 2.1rem 0',
    fontSize: '1rem',
    border: 'none',
    boxShadow: '0 0 0 1px $colors$neutral5',
    borderRadius: '9px',
    backgroundColor: '$neutral6',
  });
  return (
    <div>
      <label className={heading({ type: 'h4' })} htmlFor="project-details">
        Project details
      </label>
      <textarea
        className={textarea()}
        placeholder="more about your project..."
        maxLength={5000}
        name="project-details"
      ></textarea>
    </div>
  );
}
export default ProjectDetails;
