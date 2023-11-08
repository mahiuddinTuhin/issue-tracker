import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

type Params = {
  params: {
    id: string;
  };
};

export async function GET(req: NextRequest, { params }: Params) {
  const userId = parseInt(params?.id);

  const data = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  if (!data) {
    return NextResponse.json({ error: "User not found" }, { status: 401 });
  }

  return NextResponse.json(data);
}
