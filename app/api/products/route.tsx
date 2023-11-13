import prisma from "@/prisma/client";

import { NextRequest, NextResponse } from "next/server";
import productScheme from "./schema";

export async function POST(request: NextRequest) {
  const data = await request.json();
  const validation = productScheme.safeParse(data);

  // console.log({ validation });

  if (!validation.success) {
    return NextResponse.json(
      {
        message: "Data validation failed from product schema",
        error: validation.error.errors,
      },
      { status: 401 }
    );
  }

  const newProduct = await prisma.product.create({
    data: {
      name: data?.name,
      price: data?.price,
    },
  });
  return NextResponse.json(newProduct, { status: 201 });
}

export async function GET(request: NextRequest) {
  const products = await prisma.product.findMany();
  return NextResponse.json(products);
}
