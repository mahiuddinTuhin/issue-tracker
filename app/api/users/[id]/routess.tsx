import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

type Params = {
  params: {
    id: number;
  };
};
export async function GET(
  req: NextRequest,
  { params }: { params: { id: number } }
) {
  // console.log("Called");
  const data = await prisma.user.findUnique({
    where: {
      id: params?.id,
    },
  });

  if (!data) {
    return NextResponse.json({ error: "User not found" }, { status: 401 });
  }

  return NextResponse.json(data);
}
