import { NextApiRequest, NextApiResponse } from "next";
import * as jose from "jose";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";

import { ca } from "date-fns/locale";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const bearerTokern = req.headers.authorization as string;
  const token = bearerTokern.split(" ")[1];

  const payload = jwt.decode(token) as { email: string };

  if (!payload.email) {
    return res.status(401).json({ errorMessages: "Unauthorized" });
  }

  const user = await prisma.user.findUnique({
    where: {
      email: payload.email,
    },
    select: {
      id: true,
      email: true,
      first_name: true,
      last_name: true,
      slug: true,
      services: {
        select: {
          id: true,
          title: true,
          price: true,
          description: true,
          duration: true,
        },
      },
      profile: {
        select: {
          id: true,
          avatar: true,
          bio: true,
          occupation: true,
          featured: true,
        },
      },
    },
  });

  // if user is null
  if (!user) {
    return res.status(401).json({ errorMessages: "Unauthorized" });
  }

  return res.status(200).json({
    id: user.id,
    email: user.email,
    first_name: user.first_name,
    last_name: user.last_name,
    slug: user.slug,
  });
}
