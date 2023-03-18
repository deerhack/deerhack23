import prisma from "@/prisma/prisma";
import type { NextApiRequest, NextApiResponse } from "next";
import { Prisma } from "@prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;

  if (req.method === "GET") {
    try {
      const result = await prisma.application.findFirst({
        where: {
          id: String(id),
        },
      });
      return res.status(200).json({
        error: false,
        success: true,
        data: {
          application: result,
        },
      });
    } catch (err) {
      if (err instanceof Prisma.PrismaClientKnownRequestError) {
        if (err.code === "P2015") {
          return res.status(400).json({
            error: { message: "Application not found." },
            success: false,
          });
        }
      }
      return res.status(500).json({
        error: { message: "Something went wrong!" },
        success: false,
      });
    }
  }
  return res.status(405).json({ error: "Invalid Method", success: false });
}
