// Filter the array & remove duplicates
export const filterTags = (item, pos, self) => self.indexOf(item) == pos;

// reduce dub-arrays to flat array
export const reduceTags = (acc, { tags }) => acc.concat(tags);

// returns frontMatter from post
export const postMetaFilter = ({ body, _raw, _id, ...rest }) => rest;
