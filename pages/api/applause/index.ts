// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import { ORIGIN_URL } from '@lib/constants';

const prisma = new PrismaClient();

type Applause = {
  id?: string;
  slug?: string;
  value?: string;
};
export default async function handler(req: NextApiRequest, res: NextApiResponse & Applause) {
  let slug = req.query?.slug?.toString();
  // check if the request is not from the origin
  // if (req.headers.referer == undefined || new URL(req.headers.referer).origin !== ORIGIN_URL) {
  //   res.status(401).json({ message: `Forbidden operation`, code: 401 });
  // }
  if (req.method === 'POST') {
    const applause = await prisma.applause.findFirst({ where: { slug: slug } });
    if (!applause) {
      const data = { slug, value: 1 };
      const createdRes = await prisma.applause.create({ data });
      res.status(201).json(createdRes);
    } else {
      const updatedRes = await prisma.applause.update({
        where: { id: applause.id },
        data: { value: { increment: 1 } },
      });
      res.status(200).json(updatedRes);
    }
  } else if (req.method === 'GET') {
    if (!slug) {
      res.status(401).json({ error: 'slug is required!' });
    } else {
      const applause = await prisma.applause.findFirst({ where: { slug: slug } });
      if (!applause) res.status(401).json({ error: 'not found' });
      res.status(200).json(applause);
    }
  }
}
