// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import faunadb from 'faunadb';
import { query } from 'faunadb';
import secureRoute from '@lib/secureRoute';

const { Paginate, Get, Ref, Select, Match, Index, Documents, Collection, Lambda, Map, Var, Join } =
  query;

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
type Result = {
  [key: string]: number;
};
 async function handler(req: NextApiRequest, res: NextApiResponse<Data | Result>) {
  const results:Result = {};
  const doc = await client
    .query(query.Map(Paginate(Documents(Collection('views'))), Lambda('X', Get(Var('X')))))
    .then((res) => res.data.forEach(({ data }) => results.[data.slug] = data.count))
    .catch((e) => console.log(e.message));

  res.status(200).json(results);
}


export default secureRoute(handler);