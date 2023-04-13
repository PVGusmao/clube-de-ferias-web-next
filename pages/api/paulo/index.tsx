import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../config/db";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "GET":
      const result = await prisma.pages.findMany();
      const data = JSON.parse(result[0]?.content);
      return res.status(200).json(result);
    default:
      return res.status(200).json({message: 'Cara, melhora tua requisição ai, ta uma merda!'});
  }
}

// const getDataPages = async (req: NextApiRequest, res: NextApiResponse) => {
//   try {
//     const result = await prisma.pages.findMany();
//     console.log(result);
//     return res.status(200).json({ result });
//   } catch (err) {
//     return res.status(200).json(err);
//   }
// }