import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { method } = req;
    res.status(200).json({ page: 'header', method })
  } catch(error: any) {
    res.status(500).json({ statusCode: 500, message: error.message })
  }
  
}