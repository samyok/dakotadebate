import { connectToDatabase } from "../../utils/mongodb";
import type { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse<JSON>) => {
    const { db } = await connectToDatabase();
    const registrationForms = await db
        .collection("registration")
        .find({})
        .toArray();
    res.json(registrationForms);
};
