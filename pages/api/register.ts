import { connectToDatabase } from "../../utils/mongodb";
import type { NextApiRequest, NextApiResponse } from "next";
type result = {
    success: Boolean;
    data?: any;
    msg?: string;
};
export default async (req: NextApiRequest, res: NextApiResponse<result>) => {
    const { db } = await connectToDatabase();
    console.log(req.body);

    const registrationForms = await db
        .collection("registration")
        .insertOne({ ...req.body, timestamp: new Date() });
    res.json({ success: true });
};
