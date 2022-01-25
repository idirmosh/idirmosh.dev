import { ILayoutInfo } from 'global';
import { createContext } from 'react';

export const PostContext = createContext({});
export const LayoutContext = createContext<ILayoutInfo>({});
