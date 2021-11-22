// import type { NextApiRequest, NextApiResponse } from 'next';
// import faunadb from 'faunadb';
// import { query } from 'faunadb';
// import secureRoute from '@lib/secureRoute';

// const { Paginate, Get, Documents, Collection, Lambda,  Var } = query;

// const secret = process.env.FAUNA_SECRET;

// const client = new faunadb.Client({
//   secret: secret,
//   domain: 'db.us.fauna.com',
//   port: 443,
//   scheme: 'https',
// });

// type Data = {
//   name: string;
// };
// type Result = {
//   [key: string]: number;
// };
//  async function handler(req: NextApiRequest, res: NextApiResponse<Data | Result>) {
//   const results:Result = {};
//   const doc = await client
//     .query(query.Map(Paginate(Documents(Collection('views'))), Lambda('X', Get(Var('X')))))
//     .then((res) => res.data.forEach(({ data }) => results.[data.slug] = data.count))
//     .catch((e) => console.log(e.message));

//   res.status(200).json(results);
// }

// export default secureRoute(handler);

async function handler(req, res) {
  res.status(200).json('data');
}

export default handler;
