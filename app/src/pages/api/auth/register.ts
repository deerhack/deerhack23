import prisma from "@/prisma/prisma";
import Joi from "joi";
import type { NextApiRequest, NextApiResponse } from "next";
import crypto from "crypto";
import { Prisma } from "@prisma/client";
import { encode, decode } from "next-auth/jwt";
import { userAgent } from "next/server";

const date = new Date();
const dobLimit = date.setFullYear(date.getFullYear() - 18);

const schema = Joi.object({
  name: Joi.string()
    .regex(/^[A-Za-z ]+$/)
    .required(),
  email: Joi.string().email().required(),
  password: Joi.string()
    .regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)
    .required(),
  confirmPassword: Joi.ref("password"),
  dob: Joi.date().greater("1974-1-1").less(dobLimit).required(),
  phone: Joi.string()
    .regex(
      /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/
    )
    .required(),
  github: Joi.string().uri().allow(''),
  linkedin: Joi.string().uri().allow(''),
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { error, value } = schema.validate(req.body);

    if (error) {
      return res.status(400).json({ error: error, success: false });
    }

    try {
      const user = await prisma.user.create({
        data: {
          name: value.name,
          email: value.email,
          dob: value.dob,
          password: crypto
            .createHash("md5")
            .update(value.password)
            .digest("hex"),
          phone: value.phone,
          github_profile: value.github,
          linkedin_profile: value.linkedin,
        },
      });

      return res.status(200).json({
        error: false,
        success: true,
        data: {
          user: await encode({
            secret: process.env.SECRETS || "",
            token: { id: user.id },
          }),
        },
      });
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        if (e.code === "P2002") {
          return res.status(400).json({
            error: { message: "Email address already in use." },
            success: false,
          });
        }
      }

      console.log(e);
      return res
        .status(500)
        .json({ error: { message: "Something went wrong!" }, success: false });
    }
  }

  return res.status(405).json({ error: "Invalid Method", success: false });
}
