import { connectToDatabase } from "../../utils/mongodb";
import type { NextApiRequest, NextApiResponse } from "next";
import { parse } from "json2csv";
export default async (req: NextApiRequest, res: NextApiResponse<JSON>) => {
    const { db } = await connectToDatabase();
    const registrationForms = await db.collection("registration").find({}).toArray();
    const rslt: string = parse(registrationForms).toString();
    // @ts-ignore
    res.send(rslt);
};
