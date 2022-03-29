import { NextApiRequest, NextApiResponse } from "next";
type result = {
  success: boolean;
};
export default async (req: NextApiRequest, res: NextApiResponse<result>) => {
  res.json({ success: true });
};
