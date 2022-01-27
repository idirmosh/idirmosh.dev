import { ILayoutInfo } from 'global';
import { createContext } from 'react';

export type PostCtxType = {
  slug: string;
  name: string;
};

export const PostContext = createContext<PostCtxType>({
  slug: '',
  name: '',
});
export const LayoutContext = createContext<ILayoutInfo>({});
