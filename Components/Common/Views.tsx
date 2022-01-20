import type { FC } from 'react';
import { IView } from 'global';
import { views } from '@styles/common';
import { text } from '@styles/typography';

import useViewCount from '@lib/hooks/useViewCount';

const Views: FC<IView> = ({ slug, viewProp, readingTime }) => {
  const viewCount = useViewCount(slug, viewProp, readingTime);
  return <data className={views(text({ type: 'small' }))}>{`${viewCount} Views`}</data>;
};

export default Views;
