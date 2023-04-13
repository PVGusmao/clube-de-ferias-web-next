import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { method } = req;

    switch(method) {
      case "GET":
        break;
      default:
        res.setHeader("Allow", ["GET", "PUT"]);
        res.status(405).end(`Method ${method} Not Allowed`);
    }
    res.status(200).json({ name: 'John Doe', method })
  } catch(error: any) {
    res.status(500).json({ statusCode: 500, message: error.message })
  }
  
}