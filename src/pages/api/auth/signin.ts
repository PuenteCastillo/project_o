import { NextApiRequest, NextApiResponse } from "next";
import validator from "validator";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import * as jose from "jose";
import { setCookie } from "cookies-next";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    // Process a POST request
    const errors: string[] = [];
    const { email, password } = req.body;

    const validationSchema: any = [
      {
        valid: validator.isEmail(email),
        errorMessage: "Email invalid",
      },
      {
        valid: validator.isLength(password, { min: 1 }),
        errorMessage: "Password is invalid",
      },
    ];

    validationSchema.forEach((item: any) => {
      if (!item.valid) {
        errors.push(item.errorMessage);
      }
    });

    if (errors.length) {
      return res.status(400).json({ errorMessages: errors[0] });
    }

    // check if user exists
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      return res.status(400).json({ errorMessages: "Email not found" });
    }

    // password match
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ errorMessages: "Invalid credentials" });
    }

    // create jwt
    const algorithm = "HS256";

    const secret = new TextEncoder().encode(process.env.JWT_SECRET);

    const token = await new jose.SignJWT({
      email: user.email,
    })
      .setProtectedHeader({ alg: algorithm })
      .setExpirationTime("1d")
      .sign(secret);

    setCookie("jwt", token, { req, res, maxAge: 60 * 30 * 24 });

    return res.status(200).json({
      firstName: user.first_name,
      lastName: user.last_name,
      email: user.email,
    });
  }

  return res.status(404).json("unknown endpoint");
}
