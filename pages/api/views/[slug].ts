//import type { NextApiRequest, NextApiResponse } from 'next';

async function handler(req, res) {
  res.status(200).json('data');
}

export default handler;

// import faunadb from 'faunadb';
// import { query } from 'faunadb';
// import secureRoute from '@lib/secureRoute';

// const {
//   Paginate,
//   Get,
//   Select,
//   Match,
//   Index,
//   Create,
//   Collection,
//   Lambda,
//   Var,
//   Documents,
//   Update,
//   Add,
// } = query;

// const secret = process.env.FAUNA_SECRET;

// const client = new faunadb.Client({
//   secret: secret,
//   domain: 'db.us.fauna.com',
//   port: 443,
//   scheme: 'https',
// });

// type IData = {
//   slug: string;
//   count: number;
// };

// async function handler(req: NextApiRequest, res: NextApiResponse<IData>) {
//   const slug = req.query.slug.toString();

//   switch (req.method) {
//     case 'GET':
//       try {
//         const { data } = await client.query(Get(Match(Index('views_by_slug'), slug)));
//         res.status(200).json(data);
//       } catch (err) {
//         console.log(err.message);
//         res.status(504).send({ error: err.message });
//       }
//       break;
//     case 'PUT':
//       try {
//         const { data } = await client.query(
//           Update(Select(['ref'], Get(Match(Index('views_by_slug'), slug))), {
//             data: {
//               count: Add(Select(['data', 'count'], Get(Match(Index('views_by_slug'), slug))), 1),
//             },
//           })
//         );
//         res.status(200).json(data);
//       } catch (err) {
//         console.log(err.message);
//         res.status(504).send({ error: err.message });
//       }

//       break;
//     case 'POST':
//       try {
//         const results = {};
//         const data = await client.query(query.Map(Paginate(Documents(Collection('views'))), Lambda('X', Get(Var('X')))))
//                 .then((res) => res.data.forEach(({ data }) => results.[data.slug] = data.count))
//                 .catch((e) => console.log(e.message));

//         if (results[slug] == undefined){
//               const doc = await client.query(
//                 Create(Collection('views'), {
//                   data: {
//                     slug: slug,
//                     count: 0,
//                   },
//                 })
//               );
//           console.log(doc);
//           res.status(200).json(doc);
//         } else {
//           res.status(404).json(results);
//         }
//       } catch (err) {
//         console.log(err.message);
//         res.status(504).send({ error: err.message });
//       }
//       break;
//     default:
//       res.status(405).end();
//   }
// }

// export default secureRoute(handler)
