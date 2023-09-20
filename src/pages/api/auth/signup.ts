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
    const { first_name, last_name, email, password } = req.body;
    const body = req.body;
    const errors: string[] = [];
    let slug = `${first_name}_${last_name}`;

    const validationSchema: any = [
      {
        valid: validator.isLength(first_name, { min: 2, max: 30 }),
        errorMessage: "First name invalid",
      },
      {
        valid: validator.isLength(last_name, { min: 2, max: 30 }),
        errorMessage: "Last name invalid",
      },
      {
        valid: validator.isEmail(email),
        errorMessage: "Email invalid",
      },
      {
        valid: validator.isStrongPassword(password),
        errorMessage: "Password not strong enough",
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

    // check if email already exists
    const existingEmail = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    console.log(existingEmail);

    if (existingEmail) {
      return res.status(400).json({ errorMessages: "Email already exists" });
    }

    // check if slug already exists
    const existingSlug = await prisma.user.findUnique({
      where: {
        slug,
      },
    });

    // if slug already exists, add a random number to the end of it
    if (existingSlug) {
      const randomNumber = Math.floor(Math.random() * 1000);
      slug = `${slug}_${randomNumber}`;
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    let data = {
      first_name: first_name,
      last_name: last_name,
      email: email,
      password: hashedPassword,
      slug: slug,
    };

    console.log(data);

    // create user
    const user = await prisma.user
      .create({
        data,
      })
      .catch((err) => {
        console.log(err);
        return res.status(400).json({ errorMessages: err });
      });

    // create jwt
    const algorithm = "HS256";

    const secret = new TextEncoder().encode(process.env.JWT_SECRET);

    const token = await new jose.SignJWT({
      email: user?.email,
    })
      .setProtectedHeader({ alg: algorithm })
      .setExpirationTime("1d")
      .sign(secret);

    setCookie("jwt", token, { req, res, maxAge: 60 * 30 * 24 });

    return res.status(200).json({
      firstName: user?.first_name,
      lastName: user?.last_name,
      email: user?.email,
    });
  }

  return res.status(404).json("unknown endpoint");
}
