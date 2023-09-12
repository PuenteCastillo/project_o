import { stat } from "fs";
import { NextRequest, NextResponse } from "next/server";
import * as jose from "jose";

export async function middleware(req: NextRequest, res: NextResponse) {
  const bearerTokern = req.headers.get("authorization") as string;

  if (!bearerTokern) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const token = bearerTokern.split(" ")[1];

  if (!token) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const secret = new TextEncoder().encode(process.env.JWT_SECRET);

  try {
    await jose.jwtVerify(token, secret);
  } catch (error) {
    return new NextResponse("Unauthorized", { status: 401 });
  }
}

export const config = {
  matcher: "/api/auth/me",
};
