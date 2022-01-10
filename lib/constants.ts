export const ORIGIN_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://flowidir-dev.vercel.app';
export const NAME = 'Idir Hamouch';
export const AVATAR =
  'https://pbs.twimg.com/profile_images/1374070746817908740/mIfVlbBb_400x400.jpg';
export const MAIN_WIDTH = 1280;
export const BLOG_WIDTH = 768;
export const BLOG_CARD_GAP = 20;
export const MAIN_CARD_WIDTH = MAIN_WIDTH / 3 - BLOG_CARD_GAP;
