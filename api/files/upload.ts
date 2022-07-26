import type { VercelRequest, VercelResponse } from '@vercel/node';
import { cors } from '../lib/_cors';
import { db } from '../lib/_db';

export default cors(async function (req: VercelRequest, res: VercelResponse) {
  try {
    let apps = await db.collection('Apps').find({}).toArray();
    res.status(200).send(apps);
  } catch (exception) {
    res.status(500).send(exception);
  }
});
