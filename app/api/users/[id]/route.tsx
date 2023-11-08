import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

type Params = {
  params: {
    id: string;
  };
};

export async function GET(req: NextRequest, { params }: Params) {
  const userId = parseInt(params?.id);

  const body = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  if (!body) {
    return NextResponse.json({ error: "User not found" }, { status: 401 });
  }

  return NextResponse.json(body);
}

export async function PUT(req: NextRequest, { params }: Params) {
  const body = await req.json();

  const validation = schema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(
      { error: validation.error.errors },
      { status: 401 }
    );
  }

  const user = await prisma.user.findFirst({
    where: {
      id: parseInt(params?.id),
    },
  });

  if (!user) {
    return NextResponse.json("user not found", { status: 400 });
  }
  const result = await prisma.user.update({
    where: { id: user?.id },
    data: {
      name: body?.name,
      email: body?.email,
    },
  });
  return NextResponse.json(
    {
      message: "Successfully updated the user",
      result,
    },
    { status: 200 }
  );
}

export async function DELETE(req: NextRequest, { params }: Params) {
  const userId = parseInt(params?.id);

  const body = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  if (!body) {
    return NextResponse.json({ error: "User not found" }, { status: 401 });
  }

  const result = await prisma.user.delete({
    where: {
      id: userId,
    },
  });

  return NextResponse.json(
    {
      message: "Successfully deleted the user",
      result,
    },
    { status: 200 }
  );
}
