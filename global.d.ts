export interface IFrontMatter {
  title: string;
  publishedAt: string;
  summary: string;
  image: string;
  tags: string[];
  readingTime?: { text: string; minutes: number; time: number; words: number };
  wordCount: number;
  slug: string;
}

export interface IPost {
  frontMatter: IFrontMatter;
  code?: string;
}
