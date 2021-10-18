## Personal Portfolio Project 2021

This is a future personal portfolio project meant to be the one and the only

### Runing in Development

```bash
npm run dev
# or
yarn dev
```

### Current Stack

- React/Next

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fleerob%2Fleerob.io)

# leerob.io

- **Framework**: [Next.js](https://nextjs.org/)
- **Database**: [PlanetScale](https://planetscale.com)
- **ORM**: [Prisma](https://prisma.io/)
- **Authentication**: [NextAuth.js](https://next-auth.js.org/)
- **Deployment**: [Vercel](https://vercel.com)
- **Content**: [MDX](https://github.com/mdx-js/mdx)
- **Styling**: [Stitches](https://stitches.dev/)

## Running Locally

```bash
$ git clone https://github.com/leerob/leerob.io.git
$ cd leerob.io
$ yarn
$ yarn dev
```

Create a `.env` file similar to [`.env.example`](https://github.com/leerob/leerob.io/blob/master/.env.example).

## Overview

- `pages/api/*` - [API routes](https://nextjs.org/docs/api-routes/introduction) powering [`/dashboard`](https://leerob.io/dashboard), newsletter subscription, and post views.
- `pages/blog/*` - Static pre-rendered blog pages using [MDX](https://github.com/mdx-js/mdx).
- `pages/dashboard` - [Personal dashboard](https://leerob.io/dashboard) containing metrics like sales, views, and subscribers.
- `pages/*` - All other static pages.
