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

const getDataPages = async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    const result = await prisma.pages.findMany();
    
    const quemsomos = result.find((element) => element.name === 'quemsomos');
    
    const obj = {
      ...quemsomos,
      content: JSON.parse(quemsomos.content),
    }
    return res.status(200).json(obj);
  } catch (err) {
    return res.status(200).json(err);
  }
}