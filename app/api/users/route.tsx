import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

export async function GET(req: NextRequest) {
  const data = await prisma.user.findMany();

  return NextResponse.json(data);
}

export async function POST(req: NextRequest) {
  const data = await req.json();

  const validation = schema.safeParse(data);
  if (!validation.success) {
    return NextResponse.json(
      { error: validation.error.errors },
      { status: 401 }
    );
  }

  const user = await prisma.user.findUnique({
    where: {
      email: data?.email,
    },
  });

  if (!user) {
    const result = await prisma.user.create({
      data: {
        name: data?.name,
        email: data?.email,
      },
    });
    return NextResponse.json(
      {
        message: "Successfully created the user",
        result,
      },
      { status: 200 }
    );
  } else {
    return NextResponse.json("already used this email.", { status: 400 });
  }
  // return NextResponse.json(result);
}
