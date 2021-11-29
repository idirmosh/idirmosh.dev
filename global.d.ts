export interface IPageProps {
  posts: Post[];
  tagsCount: number;
  slugsStr: string;
}
export interface IView {
  slug: string;
  readingTime?: any;
  viewProp?: number | undefined;
}

export interface ISinglePostProps {
  post: Post;
}

export interface IParams {
  params: {
    slug: string;
    tag: string;
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
