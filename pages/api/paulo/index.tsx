import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../config/db";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "GET":
      await getDataPages(req, res);
      return
    default:
      return res.status(200).json({message: 'Requisição não suportada.'});
  }
}

const getDataPages = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const result = await prisma.pages.findMany();
    const data = JSON.parse(result[0]?.content);
    return res.status(200).json(data);
  } catch (err) {
    return res.status(200).json(err);
  }
}