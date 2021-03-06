import React, { ReactNode } from 'react';
import { flexColumn } from '@styles/common';
import { heading } from '@styles/typography';

type Props = {
  title: string;
  children?: ReactNode;
};
function BlogListHeader({ title, children }: Props): React.ReactElement {
  return (
    <div className={flexColumn({ css: { display: 'block', marginBottom: '$6' } })}>
      <h1 className={heading({ type: 'xlarge' })}>{title}</h1>
      {children}
    </div>
  );
}

export default BlogListHeader;
