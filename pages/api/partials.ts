import { connectToDatabase } from "../../utils/mongodb";
import type { NextApiRequest, NextApiResponse } from "next";
import { parse } from "json2csv";

export default async (req: NextApiRequest, res: NextApiResponse<JSON>) => {
    const { db } = await connectToDatabase();
    const forms = await db.collection("partials").find({}).toArray();
    const rslt: string = parse(forms).toString();
    // @ts-ignore
    res.send(rslt);
};
