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
