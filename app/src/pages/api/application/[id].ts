import prisma from "@/prisma/prisma";
import type { NextApiRequest, NextApiResponse } from "next";
import { Prisma } from "@prisma/client";
import Joi from "joi";

// should check role or not for update ?

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;
  if (req.method === "POST") {
    // const result = await prisma.application.update({})
    console.log("Hello World");
  }
}
