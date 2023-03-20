import { NextApiRequest, NextApiResponse } from "next";

type Result = {
  success: boolean;
};
export default async (req: NextApiRequest, res: NextApiResponse<Result>) => {
  res.json({ success: true });
};
