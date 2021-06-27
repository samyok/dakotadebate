import { connectToDatabase } from "../../utils/mongodb";
import type { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse<JSON>) => {
    const { db } = await connectToDatabase();
    const forms = await db
        .collection("partials")
        .find({})
        .toArray();
    res.json(forms);
};
