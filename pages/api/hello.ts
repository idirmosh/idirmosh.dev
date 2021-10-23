// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import faunadb from 'faunadb';
import { query } from 'faunadb';

const { Paginate, Get, Ref, Select, Match, Index, Create, Collection, Lambda, Var, Join } = query;

const secret = process.env.FAUNA_SECRET;

const client = new faunadb.Client({
  secret: 'fnAEWE6hJ8AAQo_RTkPmNoP51T1NSp98AIDNKnVF',
  domain: 'db.us.fauna.com',
  port: 443,
  scheme: 'https',
});

type Data = {
  name: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const slug = req.query.slug.toString();

  const doc = await client
    .query(Get(Match(Index('views_by_slug'), slug)))
    .catch((e) => console.log(e.message));
  res.status(200).json(doc);
}
