import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const body = await request.json()
  const { id } = body;

  const deletedUser = await prisma.user.delete({
    where: {
      id: id,
    }
  })

  return NextResponse.json("Success")
}