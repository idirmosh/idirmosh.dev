import { IStorage } from 'global';

const storage: IStorage = {
  set: (key, val, ttl) => {
    const now = new Date();

    const item = {
      value: val,
      expires: now.getTime() + ttl,
    };

    localStorage.setItem(key, JSON.stringify(item));
  },
  get: (key) => {
    const itmStr = localStorage.getItem(key);
    const item = JSON.parse(itmStr);
    const now = new Date();

    if (!itmStr) return null;

    if (now.getTime() > item.expires) {
      localStorage.removeItem(key);
      return null;
    }
    return item.value;
  },
};

export default storage;
