declare global {
  interface Window {
    gtag: any;
  }
}

export interface IPageProps {
  posts: Post[];
  tagsCount: number;
  slugsStr: string;
  tags?: string[];
  tag?: string;
}
export interface IView {
  slug: string;
  readingTime?: any;
  viewProp?: number | undefined;
}

export interface ISinglePostProps {
  post: Post;
  body?: any;
}

export interface ILayoutInfo {
  name?: string;
  title?: string;
  menu?: Array<Record<string, string>>;
  links?: Array<Record<string, string>>;
}
export interface IParams {
  params: {
    slug: string;
    tag: string;
  };
}
export interface IFrontMatter {
  body?: { raw: string; code: string };
  title?: string;
  image?: string;
  summary?: string;
  publishedAt?: string;
  readingTime?: {
    minutes: number;
    text: string;
    time: number;
    words: number;
  };
}
export interface ITags {
  tags: Array<ITag>;
}
export interface ITag {
  tag?: string | undefined;
  key?: any;
}

export interface IEntry {
  date: string;
  readingTime: any;
}

export interface IStorage {
  set: (key: string, val: any, ttl: number) => void;
  get: (key: string) => IView;
}

export interface IFetcher {
  url: string;
  options: any;
  count: number;
}
