import { IFetcher, IView } from 'global';
import storage from './storage';

// log shurtcute
export const log = console.log;

// Filter the array & remove duplicates
export const filterTags = (item, pos, self) => self.indexOf(item) == pos;

// reduce dub-arrays to flat array
export const reduceTags = (acc, { tags }) => acc.concat(tags);

// returns frontMatter from post
export const postMetaFilter = ({ body, _raw, _id, ...rest }) => rest;

// Genarate random number
export const randGen = (max) => Math.floor(Math.random() * max);

// return unique prefix for react keys
export const keyGen = (str) => `key-${[...str][randGen(str.length)]}-${str}`;

// simple fn to parse response
export const parse = (res): Promise<IFetcher> => res.json();
export const errorLog = (err): void => console.log(err.message);

export const fetcher = async (url, options = { method: 'GET' }): Promise<IFetcher | any> => {
  const data = await fetch(url, options).then(parse).catch(errorLog);
  return data;
};

//  subscribe function for performing side-effcets
export const subscribe = async (setter: any, url: string, options: any = {}): Promise<void> => {
  if (Object.keys(options).length === 0) {
    const data = await fetcher(url);
    setter(data);
  } else {
    if (!options.isInSorage) {
      const data = await fetcher(url, { method: 'PUT' });
      storage.set(options.slug, data, options.ttl);
      setter(data.count);
    } else {
      setter(options.isInSorage.count);
    }
  }
};
