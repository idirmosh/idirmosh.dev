export interface IPageProps {
  posts: Post[];
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
  tag?: string | null;
  key?: any;
}
