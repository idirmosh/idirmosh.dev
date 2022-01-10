import { ORIGIN_URL } from '@lib/constants';

export default {
  open: false,
  contact: 'idir.mosh@gmail.com',
  about: {
    avatar: '/avatar.webp',
    title: "I'm a self-taught full-stack developer based in Florida, USA.",
    para1:
      "I have multiple years of experience in the JavaScript ecosystem and have a blog where I write about technology, share the things I've learned, and ponder the future of the field.",
    para2:
      "I am passionate about building things for the web, writing clean & maintainable code, and keeping up with the newest technology trends while looking ahead to what's on the horizon.",
  },
  socials: [
    {
      name: 'Github',
      link: 'https://github.com/idirmosh',
    },
    {
      name: 'Twitter',
      link: 'https://twitter.com/Idirmosh',
    },
    {
      name: 'Linkedin',
      link: 'https://linkedin.com/in/Idirmosh',
    },
  ],
  work: [
    {
      preview: ORIGIN_URL + '/projects/portfolio-preview.png',
      name: 'My Portfolio / Blog',
      description: 'my portfolio and blog built with MDX, Nextjs and Stitches.',
      demo: 'https://flowidir-dev.vercel.app',
      source: 'https://github.com/idirmosh/idirmosh.dev',
    },
    {
      preview: ORIGIN_URL + '/projects/joly.png',
      name: 'JollyWellHealth',
      description: 'A micro website for friend build with Next.js and ChakraUI.',
      demo: 'https://camilewellhealth-meedinbox.vercel.app/',
      source: 'https://github.com/idirmosh/camilewellhealth',
    },
  ],
};

//export default data;
