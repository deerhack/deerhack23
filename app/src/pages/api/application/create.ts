import prisma from "@/prisma/prisma";
import type { NextApiRequest, NextApiResponse } from "next";
import { Prisma } from "@prisma/client";
import Joi from "joi";

const schema = Joi.object({
  letter: Joi.string().email().required(),
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { error, value } = schema.validate(req.body);

    if (error) {
      return res.status(400).json({ error: error, sucess: false });
    }
    try {
      const response = await prisma.application.create({
        data: {
          letter: value.letter,
        },
      });
      return res.status(200).json({
        error: false,
        success: true,
        data: { application: response },
      });
    } catch (err) {
      return res.status(500).json({
        error: {
          message: "Something went wrong!",
        },
        success: false,
      });
    }
  }
  return res.status(405).json({
    error: "Invalid Method",
    success: false,
  });
}
