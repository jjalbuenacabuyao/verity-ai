import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const body = await request.json();
  const { id, role} = body;

  const user = await prisma.user.update({
    where: {
      id,
    },
    data: {
      role
    }
  });

  if (!user) {
    return NextResponse.json({
      success: false
    })
  }

  return NextResponse.json({
    success: true
  })
}
