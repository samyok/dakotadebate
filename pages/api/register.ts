import clientPromise from '../../utils/mongodb'
import type { NextApiRequest, NextApiResponse } from "next";
import Registration from "../../templates/registration";

type result = {
    success: Boolean;
    data?: any;
    msg?: string;
};
export default async (req: NextApiRequest, res: NextApiResponse<result>) => {
    const client = await clientPromise;
    const db = client.db("ddi");
    console.log(req.body);

    try {
        await db.collection("registration").insertOne({ ...req.body, timestamp: new Date() });
        const emailInfo = await Registration(
            req.body.studentFirstName,
            [req.body.studentEmail, req.body.parentEmail],
            req.body.studentPhoneNumber,
        );
        res.json({ success: true, data: emailInfo });
    } catch (e) {
        res.json({ success: false });
    }
};
