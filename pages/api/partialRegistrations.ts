/*
 * Copyright (c) 2021 Samyok Nepal.
 */

import { connectToDatabase } from "../../utils/mongodb";
import type { NextApiRequest, NextApiResponse } from "next";
import { nanoid } from "nanoid";

type result = {
    success: Boolean;
    data?: any;
    msg?: string;
};
export default async (req: NextApiRequest, res: NextApiResponse<result>) => {
    const { db } = await connectToDatabase();
    console.log(req.body);

    const registrationForms = await db
        .collection("partials")
        .insertOne({ ...req.body, nanoid: nanoid(7), timestamp: new Date() });
    res.json({ success: true });
};
