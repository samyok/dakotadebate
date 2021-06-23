import { connectToDatabase } from "../../utils/mongodb";
import type { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse<JSON>) => {
    const { db } = await connectToDatabase();
    const preregistrationForms = await db
        .collection("preregistration")
        .find({})
        .toArray();
    res.json(preregistrationForms);
};