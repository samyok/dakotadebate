/*
 * Copyright (c) 2021 Samyok Nepal.
 */

// @ts-ignore
import clientPromise from '../../utils/mongodb'
import type { NextApiRequest, NextApiResponse } from "next";
import { nanoid } from "nanoid";

type result = {
    success: Boolean;
    data?: any;
    msg?: string;
};
export default async (req: NextApiRequest, res: NextApiResponse<result>) => {
    // @ts-ignore
    const client = await clientPromise
    const db = client.db("ddi");
    console.log(req.body);

    const registrationForms = await db
        .collection("partials")
        .insertOne({ ...req.body, nanoid: nanoid(7), timestamp: new Date() });
    res.json({ success: true });
};
