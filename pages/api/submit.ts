import {connectToDatabase} from "../../utils/mongodb";
import type {NextApiRequest, NextApiResponse} from 'next'
type result = {
    success: Boolean
    data?: any,
    msg?: string
}
export default async (req: NextApiRequest, res: NextApiResponse<result>) => {
    const {db} = await connectToDatabase();
    console.log(req.body);
    if(!req.body.name) return res.json({success: false, msg: "Please enter your name"});
    if(!req.body.phone) return res.json({success: false, msg: "Please enter a phone number"});
    if(!req.body.email) return res.json({success: false, msg: "Please enter your email"});
    if(!req.body.experience) return res.json({success: false, msg: "Please select the amount of experience you have."});

    const preregistrationForms = await db
        .collection("preregistration")
        .insertOne(req.body/*, (err: any, rslt: any) => {
            if (!err) res.json({success: true});
            else res.json({success: false, data: err});
        }*/)
    res.json({success: true})
};