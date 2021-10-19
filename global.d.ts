import { ParsedUrlQuery } from 'querystring';

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
